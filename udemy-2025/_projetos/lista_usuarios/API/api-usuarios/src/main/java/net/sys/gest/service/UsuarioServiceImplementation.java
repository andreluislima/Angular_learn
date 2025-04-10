package net.sys.gest.service;

import java.util.Collection;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import net.sys.gest.domain.Usuario;
import net.sys.gest.repository.UsuarioRepository;

@Service
public class UsuarioServiceImplementation implements UsuarioServiceInterface{
	
	@Autowired
	UsuarioRepository usuarioRepository;

	@Override
	public Usuario saveUsuario(Usuario user) {
		 
		return usuarioRepository.save(user);
	}

	@Override
	public Usuario findUsuarioById(Long id) {
		
		Optional<Usuario>temp = usuarioRepository.findById(id);	 
		if(temp.isEmpty()) {
			throw new NoSuchElementException("Usuario não encontrado" + id);
		}
		return temp.get();
	
	}

	@Override
	public Collection<Usuario> getAllUsuario() {
		 
		return usuarioRepository.findAll(Sort.by(Sort.Direction.ASC,"id"));
	}

}
