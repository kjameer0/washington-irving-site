import type { Entry, EntryFieldTypes, EntrySkeletonType } from 'contentful';

/**
 * Fields type definition for content type 'TypeCarousel'
 * @name TypeCarouselFields
 * @type {TypeCarouselFields}
 * @memberof TypeCarousel
 */
export interface TypeCarouselFields {
  /**
   * Field type definition for field 'carouselImages' (carouselImages)
   * @name carouselImages
   * @localized false
   */
  carouselImages: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCarouselImageSkeleton>>;

  /**
   * Field type definition for field 'year' (year)
   * @name year
   * @localized false
   */
  year?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'title' (title)
   * @name title
   * @localized false
   */
  title?: EntryFieldTypes.Symbol;
}
/**
 * Entry skeleton type definition for content type 'carousel' (Carousel)
 * @name TypeCarouselSkeleton
 * @type {TypeCarouselSkeleton}
 * @author 0H7QJUQw6nd6NVtiSX4s7l
 * @since 2023-09-10T00:43:46.438Z
 * @version 5
 */
export type TypeCarouselSkeleton = EntrySkeletonType<TypeCarouselFields, 'carousel'>;
/**
 * Entry type definition for content type 'carousel' (Carousel)
 * @name TypeCarousel
 * @type {TypeCarousel}
 * @author Khalid Jameer<kjameer0@gmail.com>
 * @since 2023-09-10T00:43:46.438Z
 * @version 5
 * @link https://app.contentful.com/spaces/jhdk2rr72yfb/environments/master/content_types/carousel
 */
export type TypeCarousel = Entry<TypeCarouselSkeleton>;

export function isTypeCarousel(entry: Entry<EntrySkeletonType>): entry is TypeCarousel {
  return entry.sys.contentType.sys.id === 'carousel';
}
export interface TypeCarouselListFields {
  carousels?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCarouselSkeleton>>;
}

export type TypeCarouselListSkeleton = EntrySkeletonType<TypeCarouselListFields, 'carouselList'>;
export type TypeCarouselList = Entry<TypeCarouselListSkeleton>;

export function isTypeCarouselList(entry: Entry<EntrySkeletonType>): entry is TypeCarouselList {
  return entry.sys.contentType.sys.id === 'carouselList';
}

export interface TypeCarouselImageFields {
  /**
   * Field type definition for field 'image' (image)
   * @name image
   * @localized false
   */
  image?: EntryFieldTypes.AssetLink;
  /**
   * Field type definition for field 'quoteText' (quoteText)
   * @name quoteText
   * @localized false
   */
  quoteText?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'title' (title)
   * @name title
   * @localized false
   */
  title: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'carouselImage' (CarouselImage)
 * @name TypeCarouselImageSkeleton
 * @type {TypeCarouselImageSkeleton}
 * @author 0H7QJUQw6nd6NVtiSX4s7l
 * @since 2023-09-21T18:21:39.856Z
 * @version 3
 */
export type TypeCarouselImageSkeleton = EntrySkeletonType<TypeCarouselImageFields, 'carouselImage'>;
/**
 * Entry type definition for content type 'carouselImage' (CarouselImage)
 * @name TypeCarouselImage
 * @type {TypeCarouselImage}
 * @author Khalid Jameer<kjameer0@gmail.com>
 * @since 2023-09-21T18:21:39.856Z
 * @version 3
 * @link https://app.contentful.com/spaces/jhdk2rr72yfb/environments/master/content_types/carouselImage
 */
export type TypeCarouselImage = Entry<TypeCarouselImageSkeleton>;

export function isTypeCarouselImage(entry: Entry<EntrySkeletonType>): entry is TypeCarouselImage {
  return entry.sys.contentType.sys.id === 'carouselImage';
}
/**
 * Fields type definition for content type 'TypeHeader'
 * @name TypeHeaderFields
 * @type {TypeHeaderFields}
 * @memberof TypeHeader
 */
export interface TypeHeaderFields {
  /**
   * Field type definition for field 'mainHeading' (Main Heading)
   * @name Main Heading
   * @localized false
   */
  mainHeading: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'subHeading' (subHeading)
   * @name subHeading
   * @localized false
   */
  subHeading?: EntryFieldTypes.Text;
  /**
   * Field type definition for field 'title' (title)
   * @name title
   * @localized false
   */
  title: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'header' (Header)
 * @name TypeHeaderSkeleton
 * @type {TypeHeaderSkeleton}
 * @author 0H7QJUQw6nd6NVtiSX4s7l
 * @since 2023-09-08T20:09:46.829Z
 * @version 3
 */
export type TypeHeaderSkeleton = EntrySkeletonType<TypeHeaderFields, 'header'>;
/**
 * Entry type definition for content type 'header' (Header)
 * @name TypeHeader
 * @type {TypeHeader}
 * @author Khalid Jameer<kjameer0@gmail.com>
 * @since 2023-09-08T20:09:46.829Z
 * @version 3
 * @link https://app.contentful.com/spaces/jhdk2rr72yfb/environments/master/content_types/header
 */
export type TypeHeader = Entry<TypeHeaderSkeleton>;

export function isTypeHeader(entry: Entry<EntrySkeletonType>): entry is TypeHeader {
  return entry.sys.contentType.sys.id === 'header';
}

/**
 * Fields type definition for content type 'TypeListText'
 * @name TypeListTextFields
 * @type {TypeListTextFields}
 * @memberof TypeListText
 */
export interface TypeListTextFields {
  /**
   * Field type definition for field 'title' (title)
   * @name title
   * @localized false
   */
  title?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'listContent' (list_content)
   * @name list_content
   * @localized false
   */
  listContent?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
}

/**
 * Entry skeleton type definition for content type 'listText' (list-text)
 * @name TypeListTextSkeleton
 * @type {TypeListTextSkeleton}
 * @author 0H7QJUQw6nd6NVtiSX4s7l
 * @since 2023-09-08T20:36:00.541Z
 * @version 1
 */
export type TypeListTextSkeleton = EntrySkeletonType<TypeListTextFields, 'listText'>;
/**
 * Entry type definition for content type 'listText' (list-text)
 * @name TypeListText
 * @type {TypeListText}
 * @author Khalid Jameer<kjameer0@gmail.com>
 * @since 2023-09-08T20:36:00.541Z
 * @version 1
 * @link https://app.contentful.com/spaces/jhdk2rr72yfb/environments/master/content_types/listText
 */
export type TypeListText = Entry<TypeListTextSkeleton>;

export function isTypeListText(entry: Entry<EntrySkeletonType>): entry is TypeListText {
  return entry.sys.contentType.sys.id === 'listText';
}

/**
 * Fields type definition for content type 'TypeLogo'
 * @name TypeLogoFields
 * @type {TypeLogoFields}
 * @memberof TypeLogo
 */
export interface TypeLogoFields {
  /**
   * Field type definition for field 'logoImg' (logoImg)
   * @name logoImg
   * @localized false
   */
  logoImg: EntryFieldTypes.AssetLink;
  /**
   * Field type definition for field 'title' (title)
   * @name title
   * @localized false
   */
  title?: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'logo' (logo)
 * @name TypeLogoSkeleton
 * @type {TypeLogoSkeleton}
 * @author 0H7QJUQw6nd6NVtiSX4s7l
 * @since 2023-09-08T20:48:20.552Z
 * @version 1
 */
export type TypeLogoSkeleton = EntrySkeletonType<TypeLogoFields, 'logo'>;
/**
 * Entry type definition for content type 'logo' (logo)
 * @name TypeLogo
 * @type {TypeLogo}
 * @author Khalid Jameer<kjameer0@gmail.com>
 * @since 2023-09-08T20:48:20.552Z
 * @version 1
 * @link https://app.contentful.com/spaces/jhdk2rr72yfb/environments/master/content_types/logo
 */
export type TypeLogo = Entry<TypeLogoSkeleton>;

export function isTypeLogo(entry: Entry<EntrySkeletonType>): entry is TypeLogo {
  return entry.sys.contentType.sys.id === 'logo';
}

/**
 * Fields type definition for content type 'TypeLinkText'
 * @name TypeLinkTextFields
 * @type {TypeLinkTextFields}
 * @memberof TypeLinkText
 */
export interface TypeLinkTextFields {
    /**
     * Field type definition for field 'title' (title)
     * @name title
     * @localized false
     */
    title: EntryFieldTypes.Symbol;
    textWithLink: EntryFieldTypes.RichText;
}

/**
 * Entry skeleton type definition for content type 'linkText' (linkText)
 * @name TypeLinkTextSkeleton
 * @type {TypeLinkTextSkeleton}
 * @author 0H7QJUQw6nd6NVtiSX4s7l
 * @since 2023-09-24T18:50:43.049Z
 * @version 19
 */
export type TypeLinkTextSkeleton = EntrySkeletonType<TypeLinkTextFields, "linkText">;
/**
 * Entry type definition for content type 'linkText' (linkText)
 * @name TypeLinkText
 * @type {TypeLinkText}
 * @author Khalid Jameer<kjameer0@gmail.com>
 * @since 2023-09-24T18:50:43.049Z
 * @version 19
 * @link https://app.contentful.com/spaces/jhdk2rr72yfb/environments/master/content_types/linkText
 */
export type TypeLinkText = Entry<TypeLinkTextSkeleton>;

export function isTypeLinkText(entry: Entry<EntrySkeletonType>): entry is TypeLinkText {
    return entry.sys.contentType.sys.id === 'linkText'
}

/**
 * Fields type definition for content type 'TypePage'
 * @name TypePageFields
 * @type {TypePageFields}
 * @memberof TypePage
 */
export interface TypePageFields {
  /**
   * Field type definition for field 'title' (page-title)
   * @name page-title
   * @localized false
   */
  title: string;
  /**
   * Field type definition for field 'sections' (Sections)
   * @name Sections
   * @localized false
   */
  sections?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<
      | TypeHeaderSkeleton
      | TypeListTextSkeleton
      | TypeParagraphSkeleton
      | TypeLinkTextSkeleton
      | TypeButtonInformationSkeleton
    >
  >;
  /**
   * Field type definition for field 'slug' (slug)
   * @name slug
   * @localized false
   */
  slug?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'images' (images)
   * @name images
   * @localized false
   */
  images?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  /**
   * Field type definition for field 'carousels' (carousels)
   * @name carousels
   * @localized false
   */
  carousels?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCarouselSkeleton>>;
}

/**
 * Entry skeleton type definition for content type 'page' (Page)
 * @name TypePageSkeleton
 * @type {TypePageSkeleton}
 * @author 0H7QJUQw6nd6NVtiSX4s7l
 * @since 2023-09-08T20:04:27.369Z
 * @version 13
 */
export type TypePageSkeleton = EntrySkeletonType<TypePageFields, 'page'>;
/**
 * Entry type definition for content type 'page' (Page)
 * @name TypePage
 * @type {TypePage}
 * @author Khalid Jameer<kjameer0@gmail.com>
 * @since 2023-09-08T20:04:27.369Z
 * @version 13
 * @link https://app.contentful.com/spaces/jhdk2rr72yfb/environments/master/content_types/page
 */
export type TypePage = Entry<TypePageSkeleton>;

export function isTypePage(entry: Entry<EntrySkeletonType>): entry is TypePage {
  return entry.sys.contentType.sys.id === 'page';
}

/**
 * Fields type definition for content type 'TypeParagraph'
 * @name TypeParagraphFields
 * @type {TypeParagraphFields}
 * @memberof TypeParagraph
 */
export interface TypeParagraphFields {
  /**
   * Field type definition for field 'title' (title)
   * @name title
   * @localized false
   */
  title: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'content' (content)
   * @name content
   * @localized false
   */
  content?: EntryFieldTypes.Text;
}

/**
 * Entry skeleton type definition for content type 'paragraph' (Paragraph)
 * @name TypeParagraphSkeleton
 * @type {TypeParagraphSkeleton}
 * @author 0H7QJUQw6nd6NVtiSX4s7l
 * @since 2023-09-08T20:22:14.045Z
 * @version 1
 */
export type TypeParagraphSkeleton = EntrySkeletonType<TypeParagraphFields, 'paragraph'>;
/**
 * Entry type definition for content type 'paragraph' (Paragraph)
 * @name TypeParagraph
 * @type {TypeParagraph}
 * @author Khalid Jameer<kjameer0@gmail.com>
 * @since 2023-09-08T20:22:14.045Z
 * @version 1
 * @link https://app.contentful.com/spaces/jhdk2rr72yfb/environments/master/content_types/paragraph
 */
export type TypeParagraph = Entry<TypeParagraphSkeleton>;

export function isTypeParagraph(entry: Entry<EntrySkeletonType>): entry is TypeParagraph {
  return entry.sys.contentType.sys.id === 'paragraph';
}
export interface TypeBannerTextFields {
  text: EntryFieldTypes.Symbol;
}

export type TypeBannerTextSkeleton = EntrySkeletonType<TypeBannerTextFields, 'bannerText'>;
export type TypeBannerText = Entry<TypeBannerTextSkeleton>;

export interface TypeStaffMemberFields {
  name: EntryFieldTypes.Symbol;
  image: EntryFieldTypes.AssetLink;
  role: EntryFieldTypes.Symbol;
  roleCategory: EntryFieldTypes.Symbol<
    'admin' | 'counselor' | 'faculty' | 'missionSociety' | 'support'
  >;
}

export type TypeStaffMemberSkeleton = EntrySkeletonType<TypeStaffMemberFields, 'staffMember'>;
export type TypeStaffMember = Entry<TypeStaffMemberSkeleton>;

export function isTypeStaffMember(entry: Entry<EntrySkeletonType>): entry is TypeStaffMember {
  return entry.sys.contentType.sys.id === 'staffMember';
}

export interface TypeButtonInformationFields {
  buttonText: EntryFieldTypes.Symbol;
  file?: EntryFieldTypes.AssetLink;
  link?: EntryFieldTypes.Symbol;
  title: EntryFieldTypes.Symbol;
}

export type TypeButtonInformationSkeleton = EntrySkeletonType<
  TypeButtonInformationFields,
  'buttonInformation'
>;
export type TypeButtonInformation = Entry<TypeButtonInformationSkeleton>;

export function isTypeButtonInformation(
  entry: Entry<EntrySkeletonType>
): entry is TypeButtonInformation {
  return entry.sys.contentType.sys.id === 'buttonInformation';
}
