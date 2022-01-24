import { LinkIcon } from "@heroicons/react/outline";

interface LinkChipProps {
  label: string;
  link: string;
  img?: string;
  alt?: string;
}

const LinkChip = ({ label, link, img, alt }: LinkChipProps) => {
  return (
    <a
      className="m-1 px-2 py-1 border border-blue-500 rounded-full  flex justify-center items-center"
      href={link}
    >
      <LinkIcon className="w-4 h-4 mr-1" aria-hidden="true" />
      {img && <img src={img} alt={alt} />}
      <span>{label}</span>
    </a>
  );
};

export default LinkChip;
