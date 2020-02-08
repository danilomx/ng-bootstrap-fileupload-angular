import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngbootstrapfileuploadangular';
  formGroup: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      FileUp: new FormControl(null, {
        validators: [Validators.required]
      })
    });

    this.formGroup.patchValue({ FileUp: 'dan'});
  }
  guardar() {
    // HoldOn.open();

    const FORMULARIO: any = this.formGroup;
    console.log(FORMULARIO.value.FileUp);
    // this._perfilService.actualizar(FORMULARIO, this.archivo).subscribe(res => {
    //   if (res.exito) {
    //     this._toastr.success(
    //       FormularioUtil.lenguaje.registroGuardadoSatistactoriamente,
    //       FormularioUtil.lenguaje.notificacion
    //     );
    //     HoldOn.close();
    //    // this.regresar();
    //   } else {
    //     HoldOn.close();
    //     this._toastr.warning(res.mensaje, FormularioUtil.lenguaje.notificacion);
    //   }
    // });
  }
}
