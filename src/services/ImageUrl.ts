const getCroppedImageUrl = (image: string, width: number, height: number) => {
    const target = 'media/';
    const index = image.indexOf(target) + target.length;
    return image.slice(0, index) + `crop/${width}/${height}/` + image.slice(index);
};

export default getCroppedImageUrl;