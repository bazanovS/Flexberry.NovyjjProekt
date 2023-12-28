export default {
  projections: {
    ЗаказE: {
      датаЗаказа: {
        __caption__: 'Дата заказа'
      },
      типОплаты: {
        __caption__: 'Тип оплаты'
      },
      горячиеНапитки: {
        __caption__: 'Горячие напитки',
        напитки: {
          __caption__: 'Напитки',
          наименование: {
            __caption__: 'Наименование напитка'
          },
          цена: {
            __caption__: 'Цена'
          }
        },
        сахар: {
          __caption__: 'Сахар'
        }
      },
      еда: {
        __caption__: 'Еда',
        продукты: {
          __caption__: 'Продукты',
          наименование: {
            __caption__: 'Наименование'
          },
          цена: {
            __caption__: 'Цена'
          }
        }
      }
    },
    ЗаказL: {
      датаЗаказа: {
        __caption__: 'Дата заказа'
      },
      типОплаты: {
        __caption__: 'Тип оплаты'
      }
    }
  },
  validations: {
    датаЗаказа: {
      __caption__: 'Дата заказа'
    },
    типОплаты: {
      __caption__: 'Тип оплаты'
    },
    горячиеНапитки: {
      __caption__: 'Горячие напитки'
    },
    еда: {
      __caption__: 'Еда'
    }
  }
};
