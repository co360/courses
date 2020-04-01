package br.com.flaviogf.manager.filters;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;

@WebFilter(urlPatterns = { "/*" })
public class MonitorFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        long begin = System.currentTimeMillis();

        chain.doFilter(request, response);

        long end = System.currentTimeMillis();

        System.out.println(String.format("Have been passed %d milliseconds", end - begin));
    }

    @Override
    public void destroy() {
    }
}