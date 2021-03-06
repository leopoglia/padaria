import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { 

  }

  login = ""
  senha = ""
  ID = ""

  ngOnInit() {

  }



  voltar() {
    this.router.navigate(['/'])
  }

  entrar() {
    fetch('/api/buscar_admin',
      {
        method: 'POST',
        body: JSON.stringify(
          {
            nome: this.login, password: this.senha
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(function (result) {
      return result.json();
    }).then((dados) => {
        localStorage.setItem('img64', dados.list[0].IMG);
        localStorage.setItem('login', this.login);
        localStorage.setItem('nome', dados.list[0].NOME)
        localStorage.setItem('senha', this.senha);
        localStorage.setItem('ID', dados.list[0].ID)
        localStorage.setItem('admin', "ok")
        this.router.navigate(['/admin'])
    }).catch(function(erro) {
      document.getElementById('alertaerro').style.color = "white"
      document.getElementById('alertaerro').style.width = "300px"

      setTimeout(function () {
        document.getElementById('alertaerro').style.color = "transparent"
        document.getElementById('alertaerro').style.width = "0px"
      }, 2000);
    })
  }

  loginn() {
    document.getElementById('spansenha').style.fontSize = '0px';
    document.getElementById('spanlogin').style.fontSize = '15px';
  }

  senhaa() {
    document.getElementById('spanlogin').style.fontSize = '0px';
    document.getElementById('spansenha').style.fontSize = '15px';
  }

}