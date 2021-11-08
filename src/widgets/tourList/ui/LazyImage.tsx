import React, {useState, useEffect} from 'react';

const placeHolder =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=";

type LazyImageProps = {
    src: string,
    alt: string
}
export const LazyImage = ({ src, alt }: LazyImageProps) => {
    const [imageSrc, setImageSrc] = useState(placeHolder);
    const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);

    const onLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
        const target = event.target as Element;
        target.classList.add("loaded");
    };

    const onError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = event.target as Element;
        target.classList.add("has-error");
    };

    useEffect(
        () => {
            let observer: IntersectionObserver;
            let didCancel = false;

            if (imageRef && imageSrc !== src) {
                if (IntersectionObserver) {
                    observer = new IntersectionObserver(
                        entries => {
                            entries.forEach(entry => {
                                if (
                                    !didCancel &&
                                    (entry.intersectionRatio > 0 || entry.isIntersecting)
                                ) {
                                    setImageSrc(src);
                                    observer.unobserve(imageRef);
                                }
                            });
                        },
                        {
                            threshold: 0.01,
                            rootMargin: "75%"
                        }
                    );
                    observer.observe(imageRef);
                } else {
                    // Old browsers fallback
                    setImageSrc(src);
                }
            }
            return () => {
                didCancel = true;
                // on component cleanup, we remove the listner
                if (observer && observer.unobserve && imageRef) {
                    observer.unobserve(imageRef);
                }
            };
        },
        [src, imageSrc, imageRef]
    );

    return (
        <img
            ref={setImageRef}
            src={imageSrc}
            alt={alt}
            onLoad={onLoad}
            onError={onError}
        />
    );
};

