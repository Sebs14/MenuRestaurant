import axios from "axios";

const getData = async () => {
  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_BASE_URL);
    return response.data.categorias;
  } catch (error) {
    console.log(error)
  }
};

export default getData;
