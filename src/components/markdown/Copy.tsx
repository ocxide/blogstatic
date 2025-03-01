import { createSignal, type ResolvedChildren } from "solid-js";

enum PopupState {
  OPEN = 0,
  CLOSING = 1,
  CLOSED = 2,
}

export default function Copy({
  children,
  codeId,
}: {
  children: ResolvedChildren;
  codeId: string;
}) {
  const onCopy = () => {
    const code = document.getElementById(codeId);
		console.log(code, codeId);

    if (!code) return;

    navigator.clipboard.writeText(code.innerText);
    setClosing(PopupState.OPEN);

    setTimeout(() => {
      setClosing(PopupState.CLOSING);
      setTimeout(() => {
        setClosing(PopupState.CLOSED);
      }, 100);
    }, 500);
  };

  const [closing, setClosing] = createSignal(PopupState.CLOSED);

  return (
    <div class="copy">
      {closing() != PopupState.CLOSED && (
        <div
          class="feedback"
          classList={{ closing: closing() == PopupState.CLOSING }}
        >
          copied!
        </div>
      )}

      <button class="copy-btn" onClick={onCopy}>
        {children}
      </button>
    </div>
  );
}
