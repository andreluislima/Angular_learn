package net.sys.gest.service;

import java.util.Collection;
import java.util.Optional;

import net.sys.gest.domain.Usuario;

public interface UsuarioServiceInterface {

	public Usuario saveUsuario(Usuario user);
	public Usuario findUsuarioById(Long id);
	public Collection<Usuario>getAllUsuario();
}
