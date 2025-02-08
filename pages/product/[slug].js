import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import { IoMdHeartEmpty } from "react-icons/io";
import Wrapper from "@/components/Wrapper";
import React from "react";
import RelatedProducts from "@/components/RelatedProducts";
import { fetchDataFromApi } from "@/utils/api";

const ProductDetail = ({ product, products }) => {
  const p = product?.data?.[0]?.attributes;
  console.log('Product slug page', p);
  
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* Left column start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            {p && p.image ? (
              <ProductDetailsCarousel images={p.image.data} />
            ) : (
              <div>No images available</div>
            )}
          </div>
          {/* Left column end */}
          {/* Right column start */}
          <div className="flex-[1] py-3">
            {/* Product Title */}
            <div className="text-[34px] font-semibold mb-2">
              Jordan Retro 6 G
            </div>
            {/* Product Subtitle */}
            <div className="text-lg font-semibold mb-5">
              Men&apos;s Golf Shoes
            </div>
            {/* Product Price */}
            <div className="text-lg font-semibold">MRP : ₹ 19 695.00</div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>
            {/* Product Size Range Start */}
            <div className="mb-10">
              {/* Heading Start */}
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>
              {/* Headin End */}
              {/* Size List Start */}
              <div className="grid grid-cols-3 gap-2">
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6.5
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 7
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 7.5
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 8
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 8.5
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 9
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 9.5
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 10
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                  UK 10.5
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                  UK 11
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                  UK 11.5
                </div>
              </div>
              {/* Size List End */}
              {/* Show Error Start */}
              <div className="text-red-600 mt-1">
                Size selection is required
              </div>
              {/* Show Error End */}
            </div>
            {/* Product Size Range End */}

            {/* Add To Card Button Start */}
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Add to Cart
            </button>
            {/* Add To Card Button End */}

            {/* Wishlist Button Start */}
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button>
            {/* Wishlist Button End */}

            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="text-md mb-5">
                Introducing our latest collection of stylish and comfortable
                shoes, perfect for any occasion. Crafted with premium materials,
                these shoes offer a perfect blend of durability and elegance.
                The cushioned insoles provide all-day comfort, while the sleek
                design ensures you look your best whether you're at the office,
                a casual outing, or a night out on the town.
              </div>
              <div className="text-md mb-5">
                Available in a variety of colors and sizes, our shoes are
                designed to cater to every individual's unique taste and
                preference. Step into the world of fashion with confidence and
                comfort, and let these shoes be the perfect addition to your
                wardrobe. Whether you're dressing up or down, our shoes will
                elevate your style game effortlessly.
              </div>
            </div>
          </div>
          {/* Right column end */}
        </div>
        {/* <RelatedProducts products={products} /> */}
      </Wrapper>
    </div>
  );
};

export default ProductDetail;

export async function getStaticPaths() {
    const products = await fetchDataFromApi("/api/products?populate=*");
    const paths = products.data.map((products) => ({
        params: { slug: products.slug },
    }));
    return { paths, fallback: false };
}


// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params: { slug } }) {
    const product = await fetchDataFromApi(
        `/api/products?populate=*&filters[slug][$eq]=${slug}`
    );
    const products = await fetchDataFromApi(
        `/api/products?populate=*&filters[slug][$ne]=${slug}`
    );

    return {
        props: {
            product,
            products,
        },
    };
}
