export async function delayForDemo(promise: Promise<any>, time: number) {
  await new Promise((resolve) => {
    setTimeout(resolve, time);
  });
  return await promise;
}
