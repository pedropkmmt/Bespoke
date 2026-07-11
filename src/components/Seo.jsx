const SITE = "https://www.bespokesolutech.co.za";
const DEFAULT_IMAGE = `${SITE}/og-image.png`;

export default function Seo({
  title = "Bespoke Solutech | Digital Solutions, Professionally Operated",
  description = "Bespoke Solutech operates and manages digital products and services for businesses across South Africa.",
  path = "/",
  image = DEFAULT_IMAGE,
}) {
  const url = `${SITE}${path}`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
}