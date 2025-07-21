import { useState, useEffect, useRef } from "react";

export default function useProfileImage(defaultImage = "/assets/images/empty-profile-img.png") {
  const [profileImage, setProfileImage] = useState(defaultImage);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const storedImage = localStorage.getItem("profileImage");
    if (storedImage) {
      setProfileImage(storedImage);
    }
  }, []);

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      setProfileImage(base64);
      localStorage.setItem("profileImage", base64);
    };
    reader.readAsDataURL(file);
  };

  const removeProfileImage= ()=>{
    const defaultImage = "/assets/images/empty-profile-img.png"
    setProfileImage(defaultImage)
    localStorage.setItem("profileImage",defaultImage );
  }

  return {
    profileImage,
    fileInputRef,
    triggerFileSelect,
    handleFileChange,
    removeProfileImage
  };
}
