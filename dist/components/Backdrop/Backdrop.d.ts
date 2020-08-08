/// <reference types="react" />
interface IBackdropProps {
    closeFn: () => any;
    opacity?: number;
    timer?: number;
    bg?: boolean;
}
declare const Backdrop: ({ closeFn, opacity, timer, bg, }: IBackdropProps) => JSX.Element;
export default Backdrop;
