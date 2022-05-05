import React from "react"
import BusinessCardHeader from "./BusinessCardHeader"
import BusinessCardContent from "./BusinessCardContent"
import BusinessCardFooter from "./BusinessCardFooter"

export default function BusinessCard() {
    return (
        <section className="business-card">
            <BusinessCardHeader />
            <BusinessCardContent />
            <BusinessCardFooter />
        </section>
    )
}
