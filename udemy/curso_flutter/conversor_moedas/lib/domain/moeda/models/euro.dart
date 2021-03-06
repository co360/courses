import 'package:conversor_moedas/domain/moeda/models/moeda.dart';
import 'package:conversor_moedas/domain/moeda/models/real.dart';

class Euro extends Moeda {
  Euro(double valor) : super(valor);

  double real(double valor, Real real) {
    return valor * real.valor / this.valor;
  }
}
