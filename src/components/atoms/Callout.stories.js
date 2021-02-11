import React from "react";
import Callout,{CalloutBody, CalloutActions, CalloutMedia} from "./Callout";
import Button from './Button';
import Speed from '../../draws/Speed';

export default {
    title: "Components/Atoms/Callout",
    component: Callout,
    subcomponents: {
        CalloutBody,
        CalloutActions,
        CalloutMedia
    }
}

export const usage = () => (
    <Callout>
        <CalloutBody>
            <h6>Façaç sua matrícula agora mesmo</h6>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <CalloutActions>
                <Button color="primary">Matrícula</Button>
            </CalloutActions>
        </CalloutBody>
        <CalloutMedia>
            <Speed/>
        </CalloutMedia>
    </Callout>
)