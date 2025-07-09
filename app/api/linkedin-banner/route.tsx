import { ImageResponse } from "next/og";

/**
 * A standard Next.js GET Route handler function used for Next.js API endpoints
 * @param req Standard web request API extended with some Next.js related APIs
 * @returns An image
 */
export const GET = async () => {
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
            alignItems: "flex-end",
            position: "relative",
            backgroundImage: "linear-gradient(to right, #303030, #00000)",
          }}
        >
          <div
            style={{
              margin: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              overflow: "hidden",
              color: "white",
              paddingRight: "60px",
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
                fontSize: "18px",
                letterSpacing: "0.35rem",
              }}
            >
              FULL-STACK ENGINEER
            </h2>
            <h3
              style={{
                margin: 0,
                fontSize: "18px",
                paddingTop: "48px",
              }}
            >
              pezhmangh.ir | github.com/PezhmanGhavami
            </h3>
          </div>
        </div>
      ),
      {
        // Linkedin banner
        width: 1400,
        height: 350,
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
    return new Response(`unknown error in image generator`, {
      status: 500,
    });
  }
};
