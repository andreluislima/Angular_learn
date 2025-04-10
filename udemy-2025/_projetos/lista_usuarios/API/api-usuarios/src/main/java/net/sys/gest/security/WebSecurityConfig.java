package net.sys.gest.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class WebSecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .httpBasic(httpBasic -> httpBasic.disable())
            .formLogin(form -> form.disable())
            .headers(headers -> headers.frameOptions(frameOptions -> frameOptions.sameOrigin()))
            .authorizeHttpRequests(authz -> authz
                .requestMatchers("/usuarios/saveUsuario").permitAll() // permite o endpoint sem autenticação
                .requestMatchers("/usuarios/getAllUsuarios").permitAll() // permite o endpoint sem autenticação
                .requestMatchers("/usuarios/findUsuarioById/**").permitAll() // permite o endpoint sem autenticação
                .anyRequest().authenticated() // qualquer outro endpoint requer autenticação
            );
        return http.build();
    }
}
