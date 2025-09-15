import styles from "@/components/CodeInput/CodeInput.module.css";

export default function CodeInput({ ...props }) {
    return (
        <input className={styles.trackingOtp} {...props} />
    );
}
