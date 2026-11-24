export const id = 213;
export const ids = [213];
export const modules = {
  36469: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      CAPPED_COUNTS_VISIT_CAP: () => Ip,
      reportCappedWasmFailure: () => Lp,
      reportUncappedWasmFailure: () => xp,
      reportWasmCrash: () => op,
      reportWasmFailure: () => Sp
    });
    var Op = cp(3025);

    function op(pp) {
      (0, Op.reportClientError)("wasm_load", pp.message, pp.code)
    }
    const Ip = Op.b - 4;

    function Sp(pp, ip, cp) {
      (0, Op.reportClientError)(pp, ip, cp, !1)
    }

    function xp(pp, ip, cp) {
      (0, Op.reportClientError)(pp, ip, cp, !1, 1 / 0)
    }

    function Lp(pp, ip, cp) {
      (0, Op.reportClientError)(pp, ip, cp, !1, Ip)
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);