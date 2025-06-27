<div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center mt-16">
  <div className="lg:col-span-2" data-aos="fade-right">
    <img src="https://i.imgur.com/hs2twgf.png" alt="Luminária Solar com Câmera" className="rounded-xl shadow-lg w-full object-cover" />
  </div>
  <div className="lg:col-span-3" data-aos="fade-left">
    <div className="bg-white text-dark-800 p-8 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold mb-6 text-center">OFERTA COM 2 UNIDADES - Luminária Solar com Câmera Integrada</h3>
      <div className="flex justify-center mb-4">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-accent-500 fill-accent-500" />
          ))}
        </div>
      </div>
      <div className="text-center mb-6">
        <span className="text-sm line-through text-slate-500 block mb-1">De R$ 579,80</span>
        <div className="flex items-center justify-center gap-3">
          <span className="text-4xl font-bold text-accent-600">R$ 299,80</span>
          <span className="text-sm bg-accent-100 text-accent-700 px-2 py-1 rounded-full font-semibold">-25% OFF</span>
        </div>
        <span className="text-sm text-slate-600 block mt-2">em até 12x</span>
      </div>
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Check className="w-5 h-5 text-success-500" />
          <span>Frete Grátis para todo Brasil</span>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <Check className="w-5 h-5 text-success-500" />
          <span>Código de Rastreamento</span>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <Check className="w-5 h-5 text-success-500" />
          <span>Parcelamento em até 12x</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-5 h-5 text-success-500" />
          <span>Garantia de 12 meses</span>
        </div>
      </div>
      <div className="mb-8">
        <div className="relative w-full h-3 bg-slate-200 rounded-full overflow-hidden mb-2">
          <div className="absolute top-0 left-0 h-full bg-accent-600 w-[60%]"></div>
        </div>
        <p className="text-sm text-slate-600 flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>Restam apenas <b>14 unidades</b> em estoque!</span>
        </p>
      </div>
      <a href="https://www.google.com" className="w-full py-6 px-8 bg-accent-600 hover:bg-accent-700 text-white rounded-2xl font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 mb-6">
        <ShoppingCart className="w-7 h-7" />
        <span>Quero as 2 Unidades com Desconto</span>
      </a>
      <div className="flex justify-center gap-4 text-slate-600 text-sm">
        <div className="flex items-center gap-1">
          <Shield className="w-4 h-4" />
          <span>Compra Segura</span>
        </div>
        <div className="flex items-center gap-1">
          <Truck className="w-4 h-4" />
          <span>Envio Imediato</span>
        </div>
      </div>
    </div>
    <div className="mt-4 bg-white/20 p-4 rounded-lg flex items-center gap-3">
      <ArrowRight className="w-5 h-5 flex-shrink-0" />
      <p className="text-sm">
        Ao efetuar a compra, você receberá um e-mail com o código de rastreamento e todas as instruções de instalação e configuração.
      </p>
    </div>
  </div>
</div>
