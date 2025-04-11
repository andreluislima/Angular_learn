package net.sys.gest.controller;

import java.util.Collection;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import net.sys.gest.domain.Usuario;
import net.sys.gest.service.UsuarioServiceInterface;

@Controller
@RequestMapping("/usuarios")
 public class UsuarioController {

	@Autowired
	private UsuarioServiceInterface usuarioServiceInterface;
	
	@PostMapping(value="/saveUsuario")
	public ResponseEntity<Usuario>saveUsuario(@RequestBody Usuario usuario){
		try {
			Usuario usuarioSalvo = usuarioServiceInterface.saveUsuario(usuario);
			return ResponseEntity.status(HttpStatus.CREATED).body(usuarioSalvo);
		
		}catch (Exception e) {	
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
		
	}
	
	@GetMapping(value="/getAllUsuarios")
	public ResponseEntity <Collection<Usuario>> getAllUsuarios(){
		return ResponseEntity.ok(usuarioServiceInterface.getAllUsuario());
	}
	
	
	@GetMapping(value="/findUsuarioById/{id}")
	public ResponseEntity<?> findUsuarioById(@PathVariable Long id){
		try {
			Usuario usuario = usuarioServiceInterface.findUsuarioById(id);
			return ResponseEntity.status(HttpStatus.OK).body(usuario);
			
		}catch (NoSuchElementException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario não encontrado para o ID: " + id);
		}
		
		
	}
	
	

}
