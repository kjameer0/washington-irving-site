export function errorGenerator(error: unknown) {
  if (error instanceof ReferenceError) {
    console.error(error.message);
  } else {
    if (error instanceof Error && error && error.stack && error.message) {
      // it's an error, probably
      console.error(error);
    }
  }
}
