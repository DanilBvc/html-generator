import { BlockText, BlockTitle, BlockForm, landBlock } from "./classes/model-class"
export const model = [

    new BlockTitle("generator", {
        styles: {
            color: "black",
            'font-size': '36px',
            'text-align':'center',
        }
    }),
    new BlockForm("form", {
        styles: {
            display: 'flex',
            background: 'white',
            'align-items': 'center',
            'justify-content': 'center',
            'flex-direction': 'column'
        

        }
    }),
    new BlockText("generated blocks", {
        styles: {
            background: "grey",
            'justify-content': 'center'
        }
    }),
   
  
]