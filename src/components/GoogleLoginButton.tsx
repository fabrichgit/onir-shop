import React, { useEffect } from "react";

interface GoogleLoginProps {
  onSuccess: (token: string) => void;
  children: React.ReactNode
}

const GoogleLoginButton: React.FC<GoogleLoginProps> = ({ onSuccess, children }) => {
  useEffect(() => {
    // Charger le script Google
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Initialisation après le chargement du script
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: "VOTRE_CLIENT_ID",
          callback: handleCredentialResponse,
        });

        window.google.accounts.id.renderButton(
          document.getElementById("google-signin-btn")!,
          {
              theme: "outline", size: "large",
              type: "standard"
          }
        );
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleCredentialResponse = (response: any) => {
    console.log("ID Token:", response.credential);
    onSuccess(response.credential);
  };

  return <div id="google-signin-btn">{children}</div>;
};

export default GoogleLoginButton;
