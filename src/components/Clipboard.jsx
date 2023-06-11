import { useState } from "react";
import { Icon } from "@iconify/react";

const Clipboard = () => {
  const iban = "ES2721037135170030048718";
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setMessage("Copiado al portapapeles");
      setCopied(true);
      setTimeout(() => {
        setMessage("");
        setCopied(false);
      }, 3000);
    } catch (err) {
      setMessage("No se pudo copiar el texto.");
    }
  };
  return (
    <div className="clipboard">
      <h3>{iban}</h3>
      <button onClick={() => copyToClipboard(iban)}>
        <Icon icon="mdi:content-copy" width={18} />
      </button>
      {copied && <p className="toltip">{message}</p>}
    </div>
  );
};

export default Clipboard;
