import { createClient } from "contentful";
import { errorGenerator } from "./error";
import {
  TypePageSkeleton,
  TypeCarouselSkeleton,
  isTypeHeader,
  isTypeParagraph,
  isTypeListText,
  isTypeLinkText,
  isTypeButtonInformation,
  TypeStaffMemberSkeleton,
} from "./types/contentful-types";
import * as dotenv from "dotenv";
import { Entry, Asset } from "contentful";
import { Document as ContentfulDocumentType } from "@contentful/rich-text-types";
dotenv.config();
export const client = createClient({
  space: process.env.SPACE_KEY as string,
  accessToken: process.env.API_KEY as string,
});

//all text in the website falls under these 3 categories
export type sectionObjType = {
  headers: Record<
    string,
    { mainHeading: string; subHeading: string | undefined }
  >;
  lists: Record<string, { listContent: string[] }>;
  paragraphs: Record<string, { content: string }>;
  links: Record<string, ContentfulDocumentType>;
  buttons: Record<string, buttonSectionType>;
};
type buttonSectionType = { file?: string; buttonText: string; link?: string };
export type PageDataType = Entry<
  TypePageSkeleton,
  "WITHOUT_UNRESOLVABLE_LINKS",
  string
>;
export type CarouselDataType = Entry<
  TypeCarouselSkeleton,
  "WITHOUT_UNRESOLVABLE_LINKS",
  string
>;

export const getSinglePageData = async (contentfulId: string) => {
  try {
    const response =
      await client.withoutUnresolvableLinks.getEntry<TypePageSkeleton>(
        contentfulId
      );
    if (!response) {
      throw new ReferenceError("no page data found");
    }
    return response;
  } catch (error) {
    errorGenerator(error);
  }
};

export function generateImageObject(data: PageDataType) {
  try {
    //make sure images is not undefined
    const images = data.fields.images || [];
    //throw error if undefined
    if (!data.fields) {
      throw new ReferenceError("images undefined");
    }
    //images are stored with their title as the key and url as the value
    const imgObj: Record<string, string> = {};
    images.forEach((img) => {
      //make sure image properties exist
      if (img !== undefined && img.fields && img.fields.title) {
        const name: string = img.fields.title;
        //make object key title of the image
        //make object value url
        imgObj[name.toLowerCase()] =
          img?.fields?.file?.url !== undefined
            ? "https:" + img.fields.file.url
            : "";
      }
    });
    return imgObj;
  } catch (error) {
    if (error instanceof ReferenceError) console.error(error.message);
    else console.error("image object error");
  }
}

export function generateSectionsObject(data: PageDataType) {
  try {
    //make sure sections is not undefined
    if (data.fields.sections === undefined) {
      throw new ReferenceError("sections undefined");
    }
    const sections = data.fields.sections;
    //sections are stored with their title as the key and content objects as values
    const sectionObj: sectionObjType = {
      lists: {},
      headers: {},
      paragraphs: {},
      links: {},
      buttons: {},
    };
    sections.forEach((section) => {
      //make sure section title exists
      if (section === undefined || section.fields === undefined) {
        throw new ReferenceError("no content");
      }
      const title = section.fields.title;
      if (typeof title === "object" || title === undefined) {
        throw new ReferenceError("no content");
      }
      //figure out what type of content this section might be
      //it could be a list, header, or paragraph
      if (isTypeHeader(section)) {
        const mainHeading = section.fields.mainHeading;
        const subHeading = section.fields.subHeading;
        if (typeof mainHeading === "object" || typeof subHeading === "object") {
          throw new ReferenceError("no content");
        }
        const content = { mainHeading, subHeading };
        sectionObj.headers[title] = content;
      } else if (isTypeParagraph(section)) {
        //paragraphs only have one field: content
        const text = section.fields.content;
        if (typeof text === "object") {
          throw new ReferenceError("no paragraph content");
        }
        const content = { content: text || "" };
        sectionObj.paragraphs[title] = content;
      } else if (isTypeListText(section)) {
        const content = section.fields.listContent;
        if (!Array.isArray(content) || content === undefined) {
          throw new ReferenceError("no list content");
        }
        const listContent = { listContent: content };
        sectionObj.lists[title] = listContent;
      } else if (isTypeLinkText(section)) {
        const link = section.fields.textWithLink as ContentfulDocumentType;
        if (!link) {
          throw new ReferenceError("no links in sections object");
        }
        sectionObj.links[title] = link;
      } else if (isTypeButtonInformation(section)) {
        const buttonInfoObj: buttonSectionType = { buttonText: "" };
        const file = section.fields.file;
        const link = section.fields.link;
        if (file) {
          const resolvedFile = file as Asset<"WITHOUT_UNRESOLVABLE_LINKS">;
          buttonInfoObj.file = resolvedFile.fields.file?.url;
        }
        if (link) {
          buttonInfoObj.link = link as string;
        }
        buttonInfoObj.buttonText = section.fields.buttonText as string;
        sectionObj.buttons[title] = buttonInfoObj;
      }
    });
    return sectionObj;
  } catch (error) {
    if (error instanceof ReferenceError) console.error(error.message);
    else console.error("image object error");
  }
}

export function generateImageObjectCarousel(data: CarouselDataType) {
  try {
    //make sure images is not undefined
    const images = data.fields.carouselImages || [];
    //throw error if undefined
    if (!data.fields || images.length === 0) {
      throw new ReferenceError('images undefined');
    }
    //images are stored with their title as the key and url as the value
    return images.map((img) => {
      //make sure image properties exist
      if (img !== undefined && img.fields && img.fields.title) {
        const imgData = img?.fields;
        const imgUrl = imgData.image?.fields.file?.url || '';
        const quoteText = imgData.quoteText || '';
        return { imgUrl, quoteText };
      } else {
        throw new ReferenceError('images undefined');
      }
    });
  } catch (error) {
    if (error instanceof ReferenceError) console.error(error.message);
    else console.error('image object error');
  }
}
//staff member can either be admin, faculty, support, missionSociety, or

export type StaffMemberDataType = {
  name: string;
  imgUrl: string;
  role: string;
};
export function generateStaffCategoryObject(
  staffArr: Entry<TypeStaffMemberSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>[]
) {
  try {
    const staffObj: Record<string, StaffMemberDataType[]> = {
      admin: [] as StaffMemberDataType[],
      missionSociety: [] as StaffMemberDataType[],
      counselor: [] as StaffMemberDataType[],
      faculty: [] as StaffMemberDataType[],
      support: [] as StaffMemberDataType[],
    };
    staffArr.forEach(
      (singleMemberData: Entry<TypeStaffMemberSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>) => {
        const { image, name, role, roleCategory } = singleMemberData.fields;
        const imgUrl = image?.fields.file?.url;
        if (!imgUrl) {
          throw new ReferenceError('No image provided for staff member');
        }
        staffObj[roleCategory].push({ imgUrl, name, role });
      }
    );
    return staffObj;
  } catch (error) {
    errorGenerator(error);
  }
}
