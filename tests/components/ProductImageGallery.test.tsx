import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("ProductImageGallery", () => {
  it("Should render nothing when the array is empty", () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("Should render the list of images", () => {
    const imageURLs = ["url1", "url2"];
    render(<ProductImageGallery imageUrls={imageURLs} />);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(2);

    imageURLs.forEach((url, index) => {
      console.log(url, index);
      expect(images[index]).toHaveAttribute("src", url);
    });
  });
});
