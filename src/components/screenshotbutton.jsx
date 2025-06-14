import html2canvas from "html2canvas";

function ScreenshotButton() {
  const takeScreenshot = () => {
    html2canvas(document.body).then((canvas) => {
      const link = document.createElement("a");
      link.download = "screenshot.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <button
      onClick={takeScreenshot}
      className="mb-4 mt-4 px-4 py-2 bg-emerald-400 hover:bg-emerald-600 text-white rounded shadow"
    >
      📸 Take Screenshot
    </button>
  );
}

export default ScreenshotButton;
