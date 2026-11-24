export const id = 234;
export const ids = [234, 241, 244];
export const modules = {
  40435: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Sp,
      f: () => xp
    });
    var Op = cp(38905),
      op = cp(40233),
      Ip = cp(40411),
      Sp = {};
    class xp {
      constructor(pp) {
        this.attachedToElement = !1, this.attached = {}, this.camera = pp, this.checkInputs = () => {}
      }
      add(pp) {
        const ip = pp.getSimpleName();
        this.attached[ip] ? Op.e.Warn("camera input of type " + ip + " already exists on camera") : (this.attached[ip] = pp, pp.camera = this.camera, pp.checkInputs && (this.checkInputs = this._addCheckInputs(pp.checkInputs.bind(pp))), this.attachedToElement && pp.attachControl(this.noPreventDefault))
      }
      remove(pp) {
        for (const ip in this.attached) {
          const cp = this.attached[ip];
          if (cp === pp) return cp.detachControl(), cp.camera = null, delete this.attached[ip], void this.rebuildInputCheck()
        }
      }
      removeByType(pp) {
        for (const ip in this.attached) {
          const cp = this.attached[ip];
          cp.getClassName() === pp && (cp.detachControl(), cp.camera = null, delete this.attached[ip], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(pp) {
        const ip = this.checkInputs;
        return () => {
          ip(), pp()
        }
      }
      attachInput(pp) {
        this.attachedToElement && pp.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          pp = !Ip.d.ForceAttachControlToAlwaysPreventDefault && pp, this.attachedToElement = !0, this.noPreventDefault = pp;
          for (const ip in this.attached) this.attached[ip].attachControl(pp)
        }
      }
      detachElement() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const ip in this.attached) this.attached[ip].detachControl(), pp && (this.attached[ip].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const pp in this.attached) {
          const ip = this.attached[pp];
          ip.checkInputs && (this.checkInputs = this._addCheckInputs(ip.checkInputs.bind(ip)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(pp) {
        const ip = {};
        for (const cp in this.attached) {
          const pp = this.attached[cp],
            Op = op.c.Serialize(pp);
          ip[pp.getClassName()] = Op
        }
        pp.inputsmgr = ip
      }
      parse(pp) {
        const ip = pp.inputsmgr;
        if (ip) {
          this.clear();
          for (const pp in ip) {
            const cp = Sp[pp];
            if (cp) {
              const Op = ip[pp],
                Ip = op.c.Parse((() => new cp), Op, null);
              this.add(Ip)
            }
          }
        } else
          for (const cp in this.attached) {
            const ip = Sp[this.attached[cp].getClassName()];
            if (ip) {
              const Op = op.c.Parse((() => new ip), pp, null);
              this.remove(this.attached[cp]), this.add(Op)
            }
          }
      }
    }
  },
  40443: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Op.b
    });
    var Op = cp(40445);
    (0, Op.d)()
  },
  40445: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Dp,
      d: () => Pp
    });
    var Op = cp(40203),
      op = cp(40210),
      Ip = cp(37320),
      Sp = cp(37487),
      xp = cp(40451),
      Lp = cp(40415),
      Yp = cp(37368);
    let Dp = (() => {
        var pp;
        let ip, cp, Lp = xp.d,
          Yp = [],
          Dp = [],
          Ap = [],
          Pp = [];
        return pp = class extends Lp {
          constructor(pp, ip, cp, op) {
            super(pp, cp, op), this.groundColor = (0, Op.l)(this, Yp, new Sp.d(0, 0, 0)), this.direction = ((0, Op.l)(this, Dp), (0, Op.l)(this, Ap, void 0)), (0, Op.l)(this, Pp), this.direction = ip || Ip.o.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(pp) {
            return this.direction = Ip.o.Normalize(pp.subtract(Ip.o.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(pp, ip) {
            const cp = Ip.o.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", cp.x, cp.y, cp.z, 0, ip), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), ip), this
          }
          transferToNodeMaterialEffect(pp, ip) {
            const cp = Ip.o.Normalize(this.direction);
            return pp.setFloat3(ip, cp.x, cp.y, cp.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = Ip.b.Identity()), this._worldMatrix
          }
          getTypeID() {
            return xp.d.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(pp, ip) {
            pp["HEMILIGHT" + ip] = !0
          }
        }, (() => {
          const Ip = "function" === typeof Symbol && Symbol.metadata ? Object.create(Lp[Symbol.metadata] ?? null) : void 0;
          ip = [(0, op.n)()], cp = [(0, op.H)()], (0, Op.j)(null, null, ip, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: pp => "groundColor" in pp,
              get: pp => pp.groundColor,
              set: (pp, ip) => {
                pp.groundColor = ip
              }
            },
            metadata: Ip
          }, Yp, Dp), (0, Op.j)(null, null, cp, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: pp => "direction" in pp,
              get: pp => pp.direction,
              set: (pp, ip) => {
                pp.direction = ip
              }
            },
            metadata: Ip
          }, Ap, Pp), Ip && Object.defineProperty(pp, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ip
          })
        })(), pp
      })(),
      Ap = !1;

    function Pp() {
      Ap || (Ap = !0, Lp.b.AddNodeConstructor("Light_Type_3", ((pp, ip) => () => new Dp(pp, Ip.o.Zero(), ip))), (0, Yp.g)("BABYLON.HemisphericLight", Dp))
    }
  },
  37479: (pp, ip, cp) => {
    cp.d(ip, {
      Color3: () => Op.d,
      b: () => Op.h
    });
    var Op = cp(37487);
    (0, Op.i)()
  },
  37985: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => op
    });
    var Op = cp(37989);
    class op {
      static GetPlanes(pp) {
        const ip = [];
        for (let cp = 0; cp < 6; cp++) ip.push(new Op.e(0, 0, 0, 0));
        return op.GetPlanesToRef(pp, ip), ip
      }
      static GetNearPlaneToRef(pp, ip) {
        const cp = pp.m;
        ip.normal.x = cp[3] + cp[2], ip.normal.y = cp[7] + cp[6], ip.normal.z = cp[11] + cp[10], ip.d = cp[15] + cp[14], ip.normalize()
      }
      static GetFarPlaneToRef(pp, ip) {
        const cp = pp.m;
        ip.normal.x = cp[3] - cp[2], ip.normal.y = cp[7] - cp[6], ip.normal.z = cp[11] - cp[10], ip.d = cp[15] - cp[14], ip.normalize()
      }
      static GetLeftPlaneToRef(pp, ip) {
        const cp = pp.m;
        ip.normal.x = cp[3] + cp[0], ip.normal.y = cp[7] + cp[4], ip.normal.z = cp[11] + cp[8], ip.d = cp[15] + cp[12], ip.normalize()
      }
      static GetRightPlaneToRef(pp, ip) {
        const cp = pp.m;
        ip.normal.x = cp[3] - cp[0], ip.normal.y = cp[7] - cp[4], ip.normal.z = cp[11] - cp[8], ip.d = cp[15] - cp[12], ip.normalize()
      }
      static GetTopPlaneToRef(pp, ip) {
        const cp = pp.m;
        ip.normal.x = cp[3] - cp[1], ip.normal.y = cp[7] - cp[5], ip.normal.z = cp[11] - cp[9], ip.d = cp[15] - cp[13], ip.normalize()
      }
      static GetBottomPlaneToRef(pp, ip) {
        const cp = pp.m;
        ip.normal.x = cp[3] + cp[1], ip.normal.y = cp[7] + cp[5], ip.normal.z = cp[11] + cp[9], ip.d = cp[15] + cp[13], ip.normalize()
      }
      static GetPlanesToRef(pp, ip) {
        op.GetNearPlaneToRef(pp, ip[0]), op.GetFarPlaneToRef(pp, ip[1]), op.GetLeftPlaneToRef(pp, ip[2]), op.GetRightPlaneToRef(pp, ip[3]), op.GetTopPlaneToRef(pp, ip[4]), op.GetBottomPlaneToRef(pp, ip[5])
      }
      static IsPointInFrustum(pp, ip) {
        for (let cp = 0; cp < 6; cp++)
          if (ip[cp].dotCoordinate(pp) < 0) return !1;
        return !0
      }
    }
  },
  37989: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => op
    });
    var Op = cp(37320);
    class op {
      constructor(pp, ip, cp, op) {
        this.normal = new Op.o(pp, ip, cp), this.d = op
      }
      BOp() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new op(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let pp = this.normal.getHashCode();
        return pp = 397 * pp ^ this.d, pp
      }
      normalize() {
        const pp = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let ip = 0;
        return 0 !== pp && (ip = 1 / pp), this.normal.x *= ip, this.normal.y *= ip, this.normal.z *= ip, this.d *= ip, this
      }
      transform(pp) {
        const ip = op._TmpMatrix;
        pp.invertToRef(ip);
        const cp = ip.m,
          Op = this.normal.x,
          Ip = this.normal.y,
          Sp = this.normal.z,
          xp = this.d,
          Lp = Op * cp[0] + Ip * cp[1] + Sp * cp[2] + xp * cp[3],
          Yp = Op * cp[4] + Ip * cp[5] + Sp * cp[6] + xp * cp[7],
          Dp = Op * cp[8] + Ip * cp[9] + Sp * cp[10] + xp * cp[11],
          Ap = Op * cp[12] + Ip * cp[13] + Sp * cp[14] + xp * cp[15];
        return new op(Lp, Yp, Dp, Ap)
      }
      dotCoordinate(pp) {
        return this.normal.x * pp.x + this.normal.y * pp.y + this.normal.z * pp.z + this.d
      }
      copyFromPoints(pp, ip, cp) {
        const Op = ip.x - pp.x,
          op = ip.y - pp.y,
          Ip = ip.z - pp.z,
          Sp = cp.x - pp.x,
          xp = cp.y - pp.y,
          Lp = cp.z - pp.z,
          Yp = op * Lp - Ip * xp,
          Dp = Ip * Sp - Op * Lp,
          Ap = Op * xp - op * Sp,
          Pp = Math.sqrt(Yp * Yp + Dp * Dp + Ap * Ap);
        let Wp;
        return Wp = 0 !== Pp ? 1 / Pp : 0, this.normal.x = Yp * Wp, this.normal.y = Dp * Wp, this.normal.z = Ap * Wp, this.d = -(this.normal.x * pp.x + this.normal.y * pp.y + this.normal.z * pp.z), this
      }
      isFrontFacingTo(pp, ip) {
        return Op.o.Dot(this.normal, pp) <= ip
      }
      signedDistanceTo(pp) {
        return Op.o.Dot(pp, this.normal) + this.d
      }
      static FromArray(pp) {
        return new op(pp[0], pp[1], pp[2], pp[3])
      }
      static FromPoints(pp, ip, cp) {
        const Op = new op(0, 0, 0, 0);
        return Op.copyFromPoints(pp, ip, cp), Op
      }
      static FromPositionAndNormal(pp, ip) {
        const cp = new op(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(pp, ip, cp)
      }
      static FromPositionAndNormalToRef(pp, ip, cp) {
        return cp.normal.rM(ip), cp.normal.normalize(), cp.d = -pp.dot(cp.normal), cp
      }
      static SignedDistanceToPlaneFromPositionAndNormal(pp, ip, cp) {
        const op = -(ip.x * pp.x + ip.y * pp.y + ip.z * pp.z);
        return Op.o.Dot(cp, ip) + op
      }
    }
    op._TmpMatrix = Op.b.Identity()
  },
  37313: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      Matrix: () => Op.b,
      Quaternion: () => Op.f,
      RegisterMathVector: () => Op.h,
      TmpVectors: () => Op.i,
      Vector2: () => Op.l,
      Zy: () => Op.o,
      Vector4: () => Op.q
    });
    var Op = cp(37320);
    (0, Op.h)()
  },
  38313: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Op
    });
    class Op {
      constructor(pp, ip, cp, Op) {
        this.x = pp, this.y = ip, this.width = cp, this.height = Op
      }
      toGlobal(pp, ip) {
        return new Op(this.x * pp, this.y * ip, this.width * pp, this.height * ip)
      }
      toGlobalToRef(pp, ip, cp) {
        return cp.x = this.x * pp, cp.y = this.y * ip, cp.width = this.width * pp, cp.height = this.height * ip, this
      }
      clone() {
        return new Op(this.x, this.y, this.width, this.height)
      }
    }
  },
  40568: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Yp
    });
    var Op = cp(37320),
      op = cp(37487),
      Ip = cp(40577),
      Sp = cp(40589),
      xp = cp(40605);

    function Lp(pp) {
      let ip = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const cp = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        Ip = [],
        Lp = pp.width || pp.size || 1,
        Yp = pp.height || pp.size || 1,
        Dp = pp.depth || pp.size || 1,
        Ap = pp.wrap || !1;
      let Pp = void 0 === pp.topBaseAt ? 1 : pp.topBaseAt,
        Wp = void 0 === pp.bottomBaseAt ? 0 : pp.bottomBaseAt;
      Pp = (Pp + 4) % 4, Wp = (Wp + 4) % 4;
      let yp = [2, 0, 3, 1][Pp],
        Up = [2, 0, 1, 3][Wp],
        wp = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (Ap) {
        ip = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], wp = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let pp = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          cp = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const Op = [17, 18, 19, 16],
          op = [22, 23, 20, 21];
        for (; yp > 0;) pp.unshift(pp.pop()), Op.unshift(Op.pop()), yp--;
        for (; Up > 0;) cp.unshift(cp.pop()), op.unshift(op.pop()), Up--;
        pp = pp.flat(), cp = cp.flat(), wp = wp.concat(pp).concat(cp), ip.push(Op[0], Op[2], Op[3], Op[0], Op[1], Op[2]), ip.push(op[0], op[2], op[3], op[0], op[1], op[2])
      }
      const vp = [Lp / 2, Yp / 2, Dp / 2],
        tp = wp.reduce(((pp, ip, cp) => pp.concat(ip * vp[cp % 3])), []),
        Hp = 0 === pp.sideOrientation ? 0 : pp.sideOrientation || Sp.d.DEFAULTSIDE,
        dp = pp.faceUV || new Array(6),
        ep = pp.faceColors,
        jp = [];
      for (let Sp = 0; Sp < 6; Sp++) void 0 === dp[Sp] && (dp[Sp] = new Op.q(0, 0, 1, 1)), ep && void 0 === ep[Sp] && (ep[Sp] = new op.h(1, 1, 1, 1));
      for (let Op = 0; Op < 6; Op++)
        if (Ip.push(dp[Op].z, xp.c ? 1 - dp[Op].w : dp[Op].w), Ip.push(dp[Op].x, xp.c ? 1 - dp[Op].w : dp[Op].w), Ip.push(dp[Op].x, xp.c ? 1 - dp[Op].y : dp[Op].y), Ip.push(dp[Op].z, xp.c ? 1 - dp[Op].y : dp[Op].y), ep)
          for (let pp = 0; pp < 4; pp++) jp.push(ep[Op].r, ep[Op].g, ep[Op].b, ep[Op].a);
      Sp.d._ComputeSides(Hp, tp, ip, cp, Ip, pp.frontUVs, pp.backUVs);
      const kp = new Sp.d;
      if (kp.indices = ip, kp.positions = tp, kp.normals = cp, kp.uvs = Ip, ep) {
        const pp = Hp === Sp.d.DOUBLESIDE ? jp.concat(jp) : jp;
        kp.colors = pp
      }
      return kp
    }

    function Yp(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Op = new Ip.d(pp, cp);
      ip.sideOrientation = Ip.d._GetDefaultSideOrientation(ip.sideOrientation), Op._originalBuilderSideOrientation = ip.sideOrientation;
      return Lp(ip).applyToMesh(Op, ip.updatable), Op
    }
    let Dp = !1;
    Dp || (Dp = !0, Sp.d.CreateBox = Lp, Ip.d.CreateBox = function(pp, ip) {
      return Yp(pp, {
        size: ip,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  40626: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ap
    });
    var Op = cp(37320),
      op = cp(40577),
      Ip = cp(40589),
      Sp = cp(40631),
      xp = cp(40342),
      Lp = cp(38905);

    function Yp(pp) {
      const ip = [],
        cp = [],
        Op = pp.lines,
        op = pp.colors,
        Sp = [];
      let xp = 0;
      for (let Ip = 0; Ip < Op.length; Ip++) {
        const pp = Op[Ip];
        for (let Op = 0; Op < pp.length; Op++) {
          const {
            x: Lp,
            y: Yp,
            z: Dp
          } = pp[Op];
          if (cp.push(Lp, Yp, Dp), op) {
            const pp = op[Ip],
              {
                r: ip,
                g: cp,
                b: xp,
                a: Lp
              } = pp[Op];
            Sp.push(ip, cp, xp, Lp)
          }
          Op > 0 && (ip.push(xp - 1), ip.push(xp)), xp++
        }
      }
      const Lp = new Ip.d;
      return Lp.indices = ip, Lp.positions = cp, op && (Lp.colors = Sp), Lp
    }

    function Dp(pp) {
      const ip = pp.dashSize || 3,
        cp = pp.gapSize || 1,
        op = pp.dashNb || 200,
        Sp = pp.points,
        xp = [],
        Lp = [],
        Yp = Op.o.Zero();
      let Dp, Ap, Pp, Wp = 0,
        yp = 0;
      for (Pp = 0; Pp < Sp.length - 1; Pp++) Sp[Pp + 1].subtractToRef(Sp[Pp], Yp), Wp += Yp.length();
      const Up = Wp / op,
        wp = ip * Up / (ip + cp);
      for (Pp = 0; Pp < Sp.length - 1; Pp++) {
        Sp[Pp + 1].subtractToRef(Sp[Pp], Yp), Dp = Math.floor(Yp.length() / Up), Yp.normalize();
        for (let pp = 0; pp < Dp; pp++) Ap = Up * pp, xp.push(Sp[Pp].x + Ap * Yp.x, Sp[Pp].y + Ap * Yp.y, Sp[Pp].z + Ap * Yp.z), xp.push(Sp[Pp].x + (Ap + wp) * Yp.x, Sp[Pp].y + (Ap + wp) * Yp.y, Sp[Pp].z + (Ap + wp) * Yp.z), Lp.push(yp, yp + 1), yp += 2
      }
      const vp = new Ip.d;
      return vp.positions = xp, vp.indices = Lp, vp
    }

    function Ap(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Op = ip.instance,
        op = ip.lines,
        Ip = ip.colors;
      if (Op) {
        const pp = Op.getVerticesData(xp.j.PositionKind);
        let ip, cp;
        Ip && (ip = Op.getVerticesData(xp.j.ColorKind));
        let Sp = 0,
          Lp = 0;
        for (let Op = 0; Op < op.length; Op++) {
          const xp = op[Op];
          for (let op = 0; op < xp.length; op++) pp[Sp] = xp[op].x, pp[Sp + 1] = xp[op].y, pp[Sp + 2] = xp[op].z, Ip && ip && (cp = Ip[Op], ip[Lp] = cp[op].r, ip[Lp + 1] = cp[op].g, ip[Lp + 2] = cp[op].b, ip[Lp + 3] = cp[op].a, Lp += 4), Sp += 3
        }
        return Op.updateVerticesData(xp.j.PositionKind, pp, !1, !1), Ip && ip && Op.updateVerticesData(xp.j.ColorKind, ip, !1, !1), Op.refreshBoundingInfo(), Op
      }
      const Lp = !!Ip,
        Dp = new Sp.e(pp, cp, null, void 0, void 0, Lp, ip.useVertexAlpha, ip.material);
      return Yp(ip).applyToMesh(Dp, ip.updatable), Dp
    }

    function Pp(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Op = ip.colors ? [ip.colors] : null;
      return Ap(pp, {
        lines: [ip.points],
        updatable: ip.updatable,
        instance: ip.instance,
        colors: Op,
        useVertexAlpha: ip.useVertexAlpha,
        material: ip.material
      }, cp)
    }

    function Wp(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Ip = ip.points,
        xp = ip.instance,
        Yp = ip.gapSize || 1,
        Ap = ip.dashSize || 3;
      if (xp) {
        const pp = pp => {
          const ip = Op.o.Zero(),
            cp = pp.length / 6;
          let op, Sp, Lp, Yp, Dp = 0,
            Ap = 0;
          for (Lp = 0; Lp < Ip.length - 1; Lp++) Ip[Lp + 1].subtractToRef(Ip[Lp], ip), Dp += ip.length();
          const Pp = Dp / cp,
            Wp = xp._creationDataStorage.dashSize,
            yp = Wp * Pp / (Wp + xp._creationDataStorage.gapSize);
          for (Lp = 0; Lp < Ip.length - 1; Lp++)
            for (Ip[Lp + 1].subtractToRef(Ip[Lp], ip), op = Math.floor(ip.length() / Pp), ip.normalize(), Yp = 0; Yp < op && Ap < pp.length;) Sp = Pp * Yp, pp[Ap] = Ip[Lp].x + Sp * ip.x, pp[Ap + 1] = Ip[Lp].y + Sp * ip.y, pp[Ap + 2] = Ip[Lp].z + Sp * ip.z, pp[Ap + 3] = Ip[Lp].x + (Sp + yp) * ip.x, pp[Ap + 4] = Ip[Lp].y + (Sp + yp) * ip.y, pp[Ap + 5] = Ip[Lp].z + (Sp + yp) * ip.z, Ap += 6, Yp++;
          for (; Ap < pp.length;) pp[Ap] = Ip[Lp].x, pp[Ap + 1] = Ip[Lp].y, pp[Ap + 2] = Ip[Lp].z, Ap += 3
        };
        return (ip.dashNb || ip.dashSize || ip.gapSize || ip.useVertexAlpha || ip.material) && Lp.e.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), xp.updateMeshPositions(pp, !1), xp
      }
      const Pp = new Sp.e(pp, cp, null, void 0, void 0, void 0, ip.useVertexAlpha, ip.material);
      return Dp(ip).applyToMesh(Pp, ip.updatable), Pp._creationDataStorage = new op.h, Pp._creationDataStorage.dashSize = Ap, Pp._creationDataStorage.gapSize = Yp, Pp
    }
    let yp = !1;
    yp || (yp = !0, Ip.d.CreateLineSystem = Yp, Ip.d.CreateDashedLines = Dp, op.d.CreateLines = function(pp, ip) {
      return Pp(pp, {
        points: ip,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, op.d.CreateDashedLines = function(pp, ip, cp, Op, op) {
      return Wp(pp, {
        points: ip,
        dashSize: cp,
        gapSize: Op,
        dashNb: op,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  40631: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Pp,
      h: () => Up
    });
    var Op, op, Ip = cp(37487),
      Sp = cp(40342),
      xp = cp(40577),
      Lp = cp(40638),
      Yp = cp(40476),
      Dp = cp(40647),
      Ap = cp(40096);
    class Pp extends xp.d {
      _isShaderMaterial(pp) {
        return !!pp && "ShaderMaterial" === pp.getClassName()
      }
      constructor(pp) {
        let ip = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Op = arguments.length > 5 ? arguments[5] : void 0,
          op = arguments.length > 6 ? arguments[6] : void 0,
          xp = arguments.length > 7 ? arguments[7] : void 0;
        super(pp, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, ip, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = Op, this.useVertexAlpha = op, this.color = new Ip.d(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, ip && (this.color = ip.color.clone(), this.alpha = ip.alpha, this.useVertexColor = ip.useVertexColor, this.useVertexAlpha = ip.useVertexAlpha), this.intersectionThreshold = .1;
        const Lp = {
          attributes: [Sp.j.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? Lp.defines.push("#define VERTEXALPHA") : Lp.needAlphaBlending = !1, this.useVertexColor ? (Lp.defines.push("#define VERTEXCOLOR"), Lp.attributes.push(Sp.j.ColorKind)) : (Lp.uniforms.push("color"), this._color4 = new Ip.h), xp) this.material = xp;
        else {
          this.Gl().gy().isWebGPU && !Pp.ForceGLSL && (this._shaderLanguage = 1), Lp.shaderLanguage = this._shaderLanguage, Lp.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([cp.e(349).then((() => cp(42847))), cp.e(355).then((() => cp(42853)))]) : await Promise.all([cp.e(331).then((() => cp(42861))), cp.e(337).then((() => cp(42863)))])
          };
          const pp = new Dp.q("colorShader", this.Gl(), "color", Lp, !1);
          pp.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(pp)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(pp) {
        const ip = this.material;
        if (ip === pp) return;
        const cp = ip && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(pp), cp && ip?.dispose()
      }
      _setInternalMaterial(pp) {
        this._setMaterial(pp), this.material && (this.material.fillMode = Yp.b.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(pp) {}
      _bind(pp, ip) {
        if (!this._geometry) return this;
        const cp = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(ip, cp) : this._geometry._bind(ip, cp, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: pp,
            g: ip,
            b: cp
          } = this.color;
          this._color4.set(pp, ip, cp, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(pp, ip, cp) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const Op = this.Gl().gy();
        return this._unIndexed ? Op.drawArraysType(Yp.b.LineListDrawMode, pp.verticesStart, pp.verticesCount, cp) : Op.drawElementsType(Yp.b.LineListDrawMode, pp.indexStart, pp.indexCount, cp), this
      }
      dispose(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || ip) && this.material?.dispose(!1, !1, !0), super.dispose(pp)
      }
      clone(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cp = arguments.length > 2 ? arguments[2] : void 0;
        if (ip && void 0 === ip._addToSceneRootNodes) {
          const cp = ip;
          return cp.source = this, new Pp(pp, this.Gl(), cp.parent, cp.source, cp.doNotCloneChildren)
        }
        return new Pp(pp, this.Gl(), ip, this, cp)
      }
      createInstance(pp) {
        const ip = new Wp(pp, this);
        if (this.MJ) {
          ip.MJ = {};
          for (const pp in this.MJ) ip.MJ[pp] = this.MJ[pp]
        }
        return ip
      }
      serialize(pp) {
        super.serialize(pp), pp.color = this.color.BOp(), pp.alpha = this.alpha
      }
      static Parse(pp, ip) {
        const cp = new Pp(pp.name, ip);
        return cp.color = Ip.d.FromArray(pp.color), cp.alpha = pp.alpha, cp
      }
    }
    Pp.ForceGLSL = !1;
    class Wp extends Lp.d {
      constructor(pp, ip) {
        super(pp, ip), this.intersectionThreshold = ip.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let yp = !1;

    function Up() {
      yp || (yp = !0, xp.d._LinesMeshParser = (pp, ip) => Pp.Parse(pp, ip))
    }(Op = Pp.prototype).enableEdgesRendering ?? (Op.enableEdgesRendering = (0, Ap.k)("LinesMesh", "enableEdgesRendering")), (op = Wp.prototype).enableEdgesRendering ?? (op.enableEdgesRendering = (0, Ap.k)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  38900: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Ip
    });
    var Op = cp(38905);
    const op = (pp, ip, cp) => pp ? pp.getClassName && "Mesh" === pp.getClassName() ? null : !pp.getClassName || "SubMesh" !== pp.getClassName() && "PhysicsBody" !== pp.getClassName() ? pp.clone ? pp.clone() : Array.isArray(pp) ? pp.slice() : cp && "object" === typeof pp ? {
      ...pp
    } : null : pp.clone(ip) : null;
    class Ip {
      static DeepCopy(pp, ip, cp, Ip) {
        let Sp = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const xp = function(pp) {
          const ip = [];
          do {
            const cp = Object.getOwnPropertyNames(pp);
            for (const pp of cp) - 1 === ip.indexOf(pp) && ip.push(pp)
          } while (pp = Object.getPrototypeOf(pp));
          return ip
        }(pp);
        for (const Yp of xp) {
          if ("_" === Yp[0] && (!Ip || -1 === Ip.indexOf(Yp))) continue;
          if (Yp.endsWith("Observable")) continue;
          if (cp && -1 !== cp.indexOf(Yp)) continue;
          const xp = pp[Yp],
            Dp = typeof xp;
          if ("function" !== Dp) try {
            if ("object" === Dp)
              if (xp instanceof Uint8Array) ip[Yp] = Uint8Array.from(xp);
              else if (xp instanceof Array) {
              if (ip[Yp] = [], xp.length > 0)
                if ("object" == typeof xp[0])
                  for (let pp = 0; pp < xp.length; pp++) {
                    const cp = op(xp[pp], ip, Sp); - 1 === ip[Yp].indexOf(cp) && ip[Yp].push(cp)
                  } else ip[Yp] = xp.slice(0)
            } else ip[Yp] = op(xp, ip, Sp);
            else ip[Yp] = xp
          } catch (Lp) {
            Op.e.Warn(Lp.message)
          }
        }
      }
    }
  },
  38124: (pp, ip, cp) => {
    function Op() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (pp => {
        const ip = 16 * Math.random() | 0;
        return ("x" === pp ? ip : 3 & ip | 8).toString(16)
      }))
    }
    cp.d(ip, {
      e: () => Op
    })
  },
  38905: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Op
    });
    class Op {
      static _CheckLimit(pp, ip) {
        let cp = Op._LogLimitOutputs[pp];
        return cp ? cp.current++ : (cp = {
          limit: ip,
          current: 1
        }, Op._LogLimitOutputs[pp] = cp), cp.current <= cp.limit
      }
      static _GenerateLimitMessage(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const cp = Op._LogLimitOutputs[pp];
        if (!cp || !Op.MessageLimitReached) return;
        const op = this._Levels[ip];
        cp.current === cp.limit && Op[op.name](Op.MessageLimitReached.replace(/%LIMIT%/g, "" + cp.limit).replace(/%TYPE%/g, op.name ?? ""))
      }
      static _AddLogEntry(pp) {
        Op._LogCache = pp + Op._LogCache, Op.OnNewCacheEntry && Op.OnNewCacheEntry(pp)
      }
      static _FormatMessage(pp) {
        const ip = pp => pp < 10 ? "0" + pp : "" + pp,
          cp = new Date;
        return "[" + ip(cp.getHours()) + ":" + ip(cp.getMinutes()) + ":" + ip(cp.getSeconds()) + "]: " + pp
      }
      static _LogDisabled(pp, ip) {}
      static _LogEnabled() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ip = arguments.length > 1 ? arguments[1] : void 0,
          cp = arguments.length > 2 ? arguments[2] : void 0;
        const op = Array.isArray(ip) ? ip[0] : ip;
        if (void 0 !== cp && !Op._CheckLimit(op, cp)) return;
        const Ip = Op._FormatMessage(op),
          Sp = this._Levels[pp],
          xp = Array.isArray(ip) ? ip.slice(1) : [];
        Sp.logFunc && Sp.logFunc("BJS - " + Ip, ...xp);
        const Lp = `<div style='color:${Sp.color}'>${Ip}</div><br>`;
        Op._AddLogEntry(Lp), Op._GenerateLimitMessage(op, pp)
      }
      static get LogCache() {
        return Op._LogCache
      }
      static ClearLogCache() {
        Op._LogCache = "", Op._LogLimitOutputs = {}, Op.errorsCount = 0
      }
      static set LogLevels(pp) {
        Op.Log = Op._LogDisabled, Op.Warn = Op._LogDisabled, Op.Error = Op._LogDisabled;
        const ip = [Op.MessageLogLevel, Op.WarningLogLevel, Op.ErrorLogLevel];
        for (const cp of ip)
          if ((pp & cp) === cp) {
            const pp = this._Levels[cp];
            Op[pp.name] = Op._LogEnabled.bind(Op, cp)
          }
      }
    }
    Op.NoneLogLevel = 0, Op.MessageLogLevel = 1, Op.WarningLogLevel = 2, Op.ErrorLogLevel = 4, Op.AllLogLevel = 7, Op.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Op._LogCache = "", Op._LogLimitOutputs = {}, Op._Levels = [{}, {
      color: "white",
      logFunc: console.log,
      name: "Log"
    }, {
      color: "orange",
      logFunc: console.warn,
      name: "Warn"
    }, {}, {
      color: "red",
      logFunc: console.error,
      name: "Error"
    }], Op.errorsCount = 0, Op.Log = Op._LogEnabled.bind(Op, Op.MessageLogLevel), Op.Warn = Op._LogEnabled.bind(Op, Op.WarningLogLevel), Op.Error = Op._LogEnabled.bind(Op, Op.ErrorLogLevel)
  },
  40289: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Op.f
    });
    var Op = cp(40296);
    (0, Op.c)()
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);