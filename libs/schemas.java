public class Persona {
    // Atributos
    @Id
    private String id;
    private String nombre;
    private String email;
    private String telefono;
    private String ci;
}

public class Activo {
    // Atributos
    @Id
    private String id;
    private String nombre;
    private String serial;
    private String estado;
    private Date ultimaAsignacion;
    private Date ultimaDesasignacion;
    private Date fechaCompra;
    private String valorCompra;
    private String valorActual;
}

public class Categoria {
    // Atributos
    @Id
    private String id;
    private String nombre;
}

public class Depreciacion {
    // Atributos
    @Id
    private String id;
    private String meses;
    private String valorMinimo;   
}

public class Fabricante {
    // Atributos
    @Id
    private String id;
    private String nombre;
}

public class Modelo {
    // Atributos
    @Id
    private String id;
    private String nombre;
}

public class Ubicacion {
    // Atributos
    @Id
    private String id;
    private String nombre;
}