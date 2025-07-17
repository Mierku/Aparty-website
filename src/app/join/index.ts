function checkExtension() {
  const extensionId = process.env.NEXT_PUBLIC_EXTENSION_ID;
  chrome.runtime.sendMessage(
    extensionId,
    {
      type: "check-extension",
      ç,
    },
    (response) => {
      console.log(response);
    },
  );
}
