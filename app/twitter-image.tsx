import { ImageResponse } from "next/og";

export const alt = "Pezhman Ghavami - Full-Stack Engineer";
export const size = {
  width: 1024,
  height: 512,
};

/**
 * A standard Next.js GET Route handler function used for Next.js API endpoints
 * @param req Standard web request API extended with some Next.js related APIs
 * @returns An Image response used for OG and twitter images
 */
const GET = async () => {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            margin: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#171717",
            color: "white",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "72px",
            }}
          >
            Pezhman Ghavami
          </h1>
          <h2
            style={{
              margin: 0,
              fontSize: "52px",
            }}
          >
            Full-Stack Developer
          </h2>
        </div>
      ),
      {
        ...size,
      },
    );
  } catch (error) {
    if (error instanceof Error) {
      console.log(`${error.message}`);
      return new Response(`Failed to generate the image`, {
        status: 500,
      });
    }
    console.dir(error);
    return new Response(`unknown error in og image generator`, {
      status: 500,
    });
  }
};

export default GET;
