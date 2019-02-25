import static java.lang.String.format;

public class TestaControleBonificacao {
	public static void main(String[] args) {
		double total = new ControleBonificacao()
			.registra(new Gerente("Fernando", "123.123.123-12", 1000, "123"))
			.registra(new EditorDeVideo("Luis Fernando", "123.123.123-12", 500))
			.getSoma();
		System.out.println(format("Total R$ %.2f", total));
	}
}