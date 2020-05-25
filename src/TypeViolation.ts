export abstract class TypeViolation {

    /**
     *
     * @param n
     */
    protected numberTypeViolationError(n: number): void {
        if (typeof (n) !== "number") {
            throw new Error(`"${n}" is not a number`)
        }
    }

}