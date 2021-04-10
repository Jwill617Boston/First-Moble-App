import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';

 class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    }
    render() {
        return (
            <ScrollView>
                <Card featuredTitle={"Contact Information"} wrapperStyle={{margin: 20}}>
                    <Text style={{marginBottom: 10}}>
                    1 Nucamp Way
                    Seattle, WA 98001
                    U.S.A.
                    Phone: 1-206-555-1234
                    Email: campsites@nucamp.co
                    </Text>
                </Card>          
            </ScrollView>
        )
    }
}

export default Contact;