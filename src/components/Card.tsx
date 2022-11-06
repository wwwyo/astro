type Props = {
  title: string;
  body: string;
  href: string;
};

const Card = ({ title, body, href }: Props) => (
  <>
    <li
      className="list-none flex p-1 bg-white bg-gradient bg-[400%]
      rounded-lg
      transition-[background-position 0.6s cubic-bezier(0.22, 1, 0.36, 1)]"
    >
      <a
        href={href}
        className="w-full leading-normal py-4 px-5 rounded-md text-[#111] bg-white opacity-80"
      >
        <h2 className="m-0 text-xl transition-[color 0.6s cubic-bezier(0.22, 1, 0.36, 1)]">
          {title}
        </h2>
        <span>&rarr;</span>
        <p>{body}</p>
      </a>
    </li>
  </>
);

export default Card;
