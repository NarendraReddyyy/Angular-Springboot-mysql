package com.example.springbootmysqldocker.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.List;

@Configuration
public class CorsConfig {

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
       // ✅ Allow All Origins
       config.setAllowedOriginPatterns(List.of("*")); // Use setAllowedOriginPatterns instead of setAllowedOrigins
        
       // ✅ Allow All HTTP Methods
       config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
       
       // ✅ Allow All Headers
       config.setAllowedHeaders(List.of("*"));
       
       // ✅ Allow Credentials (Cookies, Authorization Headers)
       config.setAllowCredentials(true);
       
       source.registerCorsConfiguration("/**", config);
       return new CorsFilter(source);
    }
}
