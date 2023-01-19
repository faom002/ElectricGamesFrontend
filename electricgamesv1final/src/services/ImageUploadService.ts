import axios from "axios";

const ImageUploadService = (
    ()=>{

        const testEndpoints = "https://localhost:7226/uploadimage";


        const uploadImage = async (image: File) => {

            const formData = new FormData();
            formData.append("file", image) 

            const result = await axios({
                url: testEndpoints,
                method: "POST",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" }
            }); 

            formData.delete("file");

        }

        return{
            uploadImage,
        }

    }
)();

export default ImageUploadService;