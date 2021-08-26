export class FormUtils{
    public constructor(){}

    
    static confirmLeave() {
        let confirm = window.confirm("Are you sure you want to leave this page?");
        return confirm;
      }

}

