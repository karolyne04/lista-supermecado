import Button from "@/components/Button";
import Nav from "@/components/Nav";
import groceries from "../../public/groceries.png";
import Image from "next/image";
import React, { Children } from "react";

export default function Page() {
  return (
    <div>
      <Nav />
      <div className="fundo">
        <div className="fat">
          <p className="text-cor-secondary text-5xl">Olá </p>
          <h4 className="text-2xl text-cor-secondary ">
            Organize sua lista de compras
          </h4>
          <span className="text-2xl text-cor-secondary ">
            as ultimas compras
          </span>
          <Button title="Lista sugerida" />
        </div>
        <div className="container m-10  px-4 grid   grid-cols-4 grid-rows-4  col-span-full  justify-around gap-28">
          <h1 className="text-cor-secondary text-5xl m-2">Dicas</h1>
          <div className="bg-cor-quartearia  p-3 h-36 w-36 ">
            <p className="text">
              Reserve um tempo para verificar tudo o que está faltando na casa e
              fazer a lista com calma, de preferência um dia antes das compras;
            </p>
          </div>
          <div className="bg-cor-quartearia  p-3 h-36 w-36 ">
            <p>
              Aproveite para verificar se há itens fora do prazo de validade ou
              que precisam ser descartados e repostos na compra;
            </p>
          </div>
          <div className="bg-cor-quartearia  p-3 h-36 w-36 ">
            <p>
              Acrescente quantidades a todos os itens de acordo com o tempo
              desejado de duração dos produtos;
            </p>
          </div>
          <div className="bg-cor-quartearia  p-3 h-36 w-36 ">
            <p>
              Coloque algumas opções de marcas na lista, mas prefira a que
              estiver com o preço menor na hora de comprar;
            </p>
          </div>
          <div className="bg-cor-quartearia  p-3 h-36 w-36 ">
            <p>
              Pesquise preços na internet e faça uma estimativa de gasto, ou
              coloque um valor limite em cada lista de compras;
            </p>
          </div>
          <div className="bg-cor-quartearia p-3 h-36 w-36 ">
            <p>
              Na hora de comprar, vá riscando os itens da lista um a um e não
              pegue nada fora do planejamento;
            </p>
          </div>
          <div className="bg-cor-quartearia  p-3 h-36 w-36 ">
            <p>
              Se possível, use uma calculadora para registrar o preço de cada
              item e manter o controle sobre o valor da compra.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
