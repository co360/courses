import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:kiwi/kiwi.dart' as kiwi;
import 'package:bytebank/pages/contact/contact_bloc.dart';
import 'package:bytebank/pages/contact/contact_event.dart';
import 'package:bytebank/pages/contact/contact_state.dart';

class ContactPage extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => ContactPageState();
}

class ContactPageState extends State<ContactPage> {
  final ContactBloc _contactBloc = kiwi.Container().resolve<ContactBloc>();
  final TextEditingController _nameController = TextEditingController();
  final TextEditingController _accountController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return BlocProvider<ContactBloc>(
      create: (_) => _contactBloc,
      child: BlocListener<ContactBloc, ContactState>(
        listener: (context, state) {
          if (state is StoredContactState) {
            Navigator.of(context).pop();
          }
        },
        child: BlocBuilder<ContactBloc, ContactState>(
          builder: (context, state) {
            return Scaffold(
              appBar: AppBar(
                title: Text('New contact'),
              ),
              body: SingleChildScrollView(
                child: SafeArea(
                  child: Column(
                    children: <Widget>[
                      Padding(
                        padding: EdgeInsets.only(
                          top: 8.0,
                          right: 16.0,
                          bottom: 8.0,
                          left: 16.0,
                        ),
                        child: TextField(
                          controller: _nameController,
                          decoration: InputDecoration(
                            labelText: 'Name',
                            hintText: 'João',
                          ),
                          style: TextStyle(
                            fontSize: 32,
                          ),
                        ),
                      ),
                      Padding(
                        padding: EdgeInsets.only(
                          top: 8.0,
                          right: 16.0,
                          bottom: 8.0,
                          left: 16.0,
                        ),
                        child: TextField(
                          controller: _accountController,
                          decoration: InputDecoration(
                            labelText: 'Account',
                            hintText: '000-0',
                            icon: Icon(Icons.monetization_on),
                          ),
                          keyboardType: TextInputType.number,
                          style: TextStyle(
                            fontSize: 32,
                          ),
                        ),
                      ),
                      Container(
                        width: MediaQuery.of(context).size.width,
                        padding: EdgeInsets.all(16.0),
                        child: RaisedButton(
                          onPressed: () async {
                            _contactBloc.add(StoreContactEvent(
                              _nameController.text,
                              _accountController.text,
                            ));
                          },
                          child: Text('Confirm'),
                        ),
                      )
                    ],
                  ),
                ),
              ),
            );
          },
        ),
      ),
    );
  }

  @override
  void dispose() {
    _contactBloc.close();
    super.dispose();
  }
}
