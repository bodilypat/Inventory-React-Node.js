//src/features/pages/components/ProductForm.jsx 

import Button from '../../../components/common/Button';
import Loader from '../../../components/common/Loader';

const ProductForm = ({
    form, 
    categories,
    errors = {},
    loading = false,
    isEdit = false,
    onChange,
    onSubmit,
    onCancel,
}) => {
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            onChange(name, files[0]);
        } else {
            onChange(name, value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <Card title={isEdit ? "Edit Product" : "Add Product"}>
            {loading && <Loader />}
            {!loading &&
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
                {/* Product Name */}
                <div>
                    <label className="block mb-1 font-medium" htmlFor="name">
                        Product Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={`w-full border p-2 rounded ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                {/* Category */}
                <div>
                    <label className="block mb-1 font-medium" htmlFor="category">
                        Category
                    </label>
                    <select
                        id="category"
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        className={`w-full border p-2 rounded ${errors.category ? 'border-red-500' : 'border-gray-300'}`}
                    >
                        <option value="">Select Category</option>
                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                    {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
                </div>
                {/* Price */}
                <div>
                    <label className="block mb-1 font-medium" htmlFor="price">
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={form.price}
                        onChange={handleChange}
                        className={`w-full border p-2 rounded ${errors.price ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
                </div>
                {/* Image */}
                <div>
                    <label className="block mb-1 font-medium" htmlFor="image">
                        Product Image
                    </label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={handleChange}
                        className={`w-full border p-2 rounded ${errors.image ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
                </div>
                {/* Buttons */}
                <div className="flex space-x-4">
                    <Button type="submit" variant="primary">
                        {isEdit ? 'Update Product' : 'Add Product'}
                    </Button>
                    <Button type="button" variant="secondary" onClick={onCancel}>
                        Cancel
                    </Button>
                </div>
            </form>
            }
        </Card>
    );
};

export default ProductForm;
