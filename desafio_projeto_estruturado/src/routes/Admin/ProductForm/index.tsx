import "./styles.css";
import Button from "../../../components/Button";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FormInput from "../../../components/FormInput";
import * as forms from "../../../utils/forms";
import * as productService from "../../../services/product-service";
import FormTextArea from "../../../components/FormTextArea";

export default function ProductForm() {
  const [formData, setFormData] = useState<any>({
    name: {
      value: "",
      id: "name",
      name: "name",
      type: "text",
      placeholder: "Nome",
      validation: function (value: string) {
        return /^.{3,80}$/.test(value);
      },
      message: "Favor informar um nome de 3 a 80 caracteres",
    },
    price: {
      value: "",
      id: "price",
      name: "price",
      type: "number",
      placeholder: "Preço",
      validation: function (value: any) {
        return Number(value) > 0;
      },
      message: "Favor informar um valor positivo",
    },
    imgUrl: {
      value: "",
      id: "imgUrl",
      name: "imgUrl",
      type: "text",
      placeholder: "Imagem",
    },
    description: {
      value: "",
      id: "description",
      name: "description",
      type: "text",
      placeholder: "Descrição",
      validation: function (value: string) {
        return /^.{10,}$/.test(value);
      },
      message: "A descrição deve ter pelo menos 10 caracteres",
    },
  });

  const params = useParams();
  const isEditing = params.productId !== "create";

  function handleInputChange(event: any) {
    setFormData(
      forms.updateAndValidade(formData, event.target.name, event.target.value),
    );
  }

  function handleTurnDirty(name: string) {
    setFormData(forms.dirtyAndValidade(formData, name));
  }

  useEffect(() => {
    if (isEditing) {
      productService.findById(Number(params.productId)).then((response) => {
        setFormData(forms.updateAll(formData, response.data));
      });
    }
  }, []);

  return (
    <main>
      <section id="dsc-product-form-section" className="dsc-container">
        <div className="dsc-product-form-container">
          <form className="dsc-card dsc-form">
            <h2>Dados do produto</h2>
            <div className="dsc-form-controls-container">
              <div>
                <FormInput
                  {...formData.name}
                  className="dsc-form-control"
                  onTurnDirty={handleTurnDirty}
                  onChange={handleInputChange}
                />
                <div className="dsc-form-error">{formData.name.message}</div>
              </div>
              <div>
                <FormInput
                  {...formData.price}
                  onTurnDirty={handleTurnDirty}
                  className="dsc-form-control"
                  onChange={handleInputChange}
                />
                <div className="dsc-form-error">{formData.price.message}</div>
              </div>
              <div>
                <FormInput
                  {...formData.imgUrl}
                  onTurnDirty={handleTurnDirty}
                  className="dsc-form-control"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <FormTextArea
                  {...formData.description}
                  onTurnDirty={handleTurnDirty}
                  className="dsc-form-control dsc-textarea"
                  onChange={handleInputChange}
                ></FormTextArea>
                <div className="dsc-form-error">{formData.description.message}</div>
              </div>
              {/* <div>
                <select className="dsc-form-control dsc-select" required>
                  <option value="" disabled selected>
                    Categorias
                  </option>
                  <option value="1">Valor 1</option>
                  <option value="2">Valor 2</option>
                </select>
              </div>
              */}
            </div>

            <div className="dsc-form-container-buttons">
              <Link to="/admin/products">
                <Button text="Cancelar" variant="secondary" className="" />
              </Link>
              <Button text="Salvar" variant="primary" className="" />
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
