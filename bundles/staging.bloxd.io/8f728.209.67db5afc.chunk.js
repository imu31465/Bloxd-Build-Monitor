export const id = 209;
export const ids = [209, 214, 217];
export const modules = {
  38278: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => uc,
      f: () => sc
    });
    var Vc = nc(37191),
      Ic = nc(38068),
      rB = nc(38251),
      uc = {};
    class sc {
      constructor(cB) {
        this.attachedToElement = !1, this.attached = {}, this.camera = cB, this.checkInputs = () => {}
      }
      add(cB) {
        const Bc = cB.getSimpleName();
        this.attached[Bc] ? Vc.c.Warn("camera input of type " + Bc + " already exists on camera") : (this.attached[Bc] = cB, cB.camera = this.camera, cB.checkInputs && (this.checkInputs = this._addCheckInputs(cB.checkInputs.bind(cB))), this.attachedToElement && cB.attachControl(this.noPreventDefault))
      }
      remove(cB) {
        for (const Bc in this.attached) {
          const nc = this.attached[Bc];
          if (nc === cB) return nc.detachControl(), nc.camera = null, delete this.attached[Bc], void this.rebuildInputCheck()
        }
      }
      removeByType(cB) {
        for (const Bc in this.attached) {
          const nc = this.attached[Bc];
          nc.getClassName() === cB && (nc.detachControl(), nc.camera = null, delete this.attached[Bc], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(cB) {
        const Bc = this.checkInputs;
        return () => {
          Bc(), cB()
        }
      }
      attachInput(cB) {
        this.attachedToElement && cB.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          cB = !rB.e.ForceAttachControlToAlwaysPreventDefault && cB, this.attachedToElement = !0, this.noPreventDefault = cB;
          for (const Bc in this.attached) this.attached[Bc].attachControl(cB)
        }
      }
      detachElement() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const Bc in this.attached) this.attached[Bc].detachControl(), cB && (this.attached[Bc].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const cB in this.attached) {
          const Bc = this.attached[cB];
          Bc.checkInputs && (this.checkInputs = this._addCheckInputs(Bc.checkInputs.bind(Bc)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(cB) {
        const Bc = {};
        for (const nc in this.attached) {
          const cB = this.attached[nc],
            Vc = Ic.e.Serialize(cB);
          Bc[cB.getClassName()] = Vc
        }
        cB.inputsmgr = Bc
      }
      parse(cB) {
        const Bc = cB.inputsmgr;
        if (Bc) {
          this.clear();
          for (const cB in Bc) {
            const nc = uc[cB];
            if (nc) {
              const Vc = Bc[cB],
                rB = Ic.e.Parse((() => new nc), Vc, null);
              this.add(rB)
            }
          }
        } else
          for (const nc in this.attached) {
            const Bc = uc[this.attached[nc].getClassName()];
            if (Bc) {
              const Vc = Ic.e.Parse((() => new Bc), cB, null);
              this.remove(this.attached[nc]), this.add(Vc)
            }
          }
      }
    }
  },
  38282: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Vc.d
    });
    var Vc = nc(38286);
    (0, Vc.f)()
  },
  38286: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => qB,
      f: () => Tc
    });
    var Vc = nc(38035),
      Ic = nc(38043),
      rB = nc(35756),
      uc = nc(35815),
      sc = nc(38291),
      Mc = nc(38255),
      Pc = nc(35799);
    let qB = (() => {
        var cB;
        let Bc, nc, Mc = sc.b,
          Pc = [],
          qB = [],
          Oc = [],
          Tc = [];
        return cB = class extends Mc {
          constructor(cB, Bc, nc, Ic) {
            super(cB, nc, Ic), this.groundColor = (0, Vc.k)(this, Pc, new uc.e(0, 0, 0)), this.direction = ((0, Vc.k)(this, qB), (0, Vc.k)(this, Oc, void 0)), (0, Vc.k)(this, Tc), this.direction = Bc || rB.p.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(cB) {
            return this.direction = rB.p.Normalize(cB.subtract(rB.p.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(cB, Bc) {
            const nc = rB.p.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", nc.x, nc.y, nc.z, 0, Bc), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), Bc), this
          }
          transferToNodeMaterialEffect(cB, Bc) {
            const nc = rB.p.Normalize(this.direction);
            return cB.setFloat3(Bc, nc.x, nc.y, nc.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = rB.d.Identity()), this._worldMatrix
          }
          getTypeID() {
            return sc.b.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(cB, Bc) {
            cB["HEMILIGHT" + Bc] = !0
          }
        }, (() => {
          const rB = "function" === typeof Symbol && Symbol.metadata ? Object.create(Mc[Symbol.metadata] ?? null) : void 0;
          Bc = [(0, Ic.o)()], nc = [(0, Ic.L)()], (0, Vc.g)(null, null, Bc, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: cB => "groundColor" in cB,
              get: cB => cB.groundColor,
              set: (cB, Bc) => {
                cB.groundColor = Bc
              }
            },
            metadata: rB
          }, Pc, qB), (0, Vc.g)(null, null, nc, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: cB => "direction" in cB,
              get: cB => cB.direction,
              set: (cB, Bc) => {
                cB.direction = Bc
              }
            },
            metadata: rB
          }, Oc, Tc), rB && Object.defineProperty(cB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: rB
          })
        })(), cB
      })(),
      Oc = !1;

    function Tc() {
      Oc || (Oc = !0, Mc.c.AddNodeConstructor("Light_Type_3", ((cB, Bc) => () => new qB(cB, rB.p.Zero(), Bc))), (0, Pc.d)("BABYLON.HemisphericLight", qB))
    }
  },
  35808: (cB, Bc, nc) => {
    nc.d(Bc, {
      Color3: () => Vc.e,
      c: () => Vc.g
    });
    var Vc = nc(35815);
    (0, Vc.i)()
  },
  36327: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Ic
    });
    var Vc = nc(36329);
    class Ic {
      static GetPlanes(cB) {
        const Bc = [];
        for (let nc = 0; nc < 6; nc++) Bc.push(new Vc.d(0, 0, 0, 0));
        return Ic.GetPlanesToRef(cB, Bc), Bc
      }
      static GetNearPlaneToRef(cB, Bc) {
        const nc = cB.m;
        Bc.normal.x = nc[3] + nc[2], Bc.normal.y = nc[7] + nc[6], Bc.normal.z = nc[11] + nc[10], Bc.d = nc[15] + nc[14], Bc.normalize()
      }
      static GetFarPlaneToRef(cB, Bc) {
        const nc = cB.m;
        Bc.normal.x = nc[3] - nc[2], Bc.normal.y = nc[7] - nc[6], Bc.normal.z = nc[11] - nc[10], Bc.d = nc[15] - nc[14], Bc.normalize()
      }
      static GetLeftPlaneToRef(cB, Bc) {
        const nc = cB.m;
        Bc.normal.x = nc[3] + nc[0], Bc.normal.y = nc[7] + nc[4], Bc.normal.z = nc[11] + nc[8], Bc.d = nc[15] + nc[12], Bc.normalize()
      }
      static GetRightPlaneToRef(cB, Bc) {
        const nc = cB.m;
        Bc.normal.x = nc[3] - nc[0], Bc.normal.y = nc[7] - nc[4], Bc.normal.z = nc[11] - nc[8], Bc.d = nc[15] - nc[12], Bc.normalize()
      }
      static GetTopPlaneToRef(cB, Bc) {
        const nc = cB.m;
        Bc.normal.x = nc[3] - nc[1], Bc.normal.y = nc[7] - nc[5], Bc.normal.z = nc[11] - nc[9], Bc.d = nc[15] - nc[13], Bc.normalize()
      }
      static GetBottomPlaneToRef(cB, Bc) {
        const nc = cB.m;
        Bc.normal.x = nc[3] + nc[1], Bc.normal.y = nc[7] + nc[5], Bc.normal.z = nc[11] + nc[9], Bc.d = nc[15] + nc[13], Bc.normalize()
      }
      static GetPlanesToRef(cB, Bc) {
        Ic.GetNearPlaneToRef(cB, Bc[0]), Ic.GetFarPlaneToRef(cB, Bc[1]), Ic.GetLeftPlaneToRef(cB, Bc[2]), Ic.GetRightPlaneToRef(cB, Bc[3]), Ic.GetTopPlaneToRef(cB, Bc[4]), Ic.GetBottomPlaneToRef(cB, Bc[5])
      }
      static IsPointInFrustum(cB, Bc) {
        for (let nc = 0; nc < 6; nc++)
          if (Bc[nc].dotCoordinate(cB) < 0) return !1;
        return !0
      }
    }
  },
  36329: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Ic
    });
    var Vc = nc(35756);
    class Ic {
      constructor(cB, Bc, nc, Ic) {
        this.normal = new Vc.p(cB, Bc, nc), this.d = Ic
      }
      KPc() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Ic(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let cB = this.normal.getHashCode();
        return cB = 397 * cB ^ this.d, cB
      }
      normalize() {
        const cB = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let Bc = 0;
        return 0 !== cB && (Bc = 1 / cB), this.normal.x *= Bc, this.normal.y *= Bc, this.normal.z *= Bc, this.d *= Bc, this
      }
      transform(cB) {
        const Bc = Ic._TmpMatrix;
        cB.invertToRef(Bc);
        const nc = Bc.m,
          Vc = this.normal.x,
          rB = this.normal.y,
          uc = this.normal.z,
          sc = this.d,
          Mc = Vc * nc[0] + rB * nc[1] + uc * nc[2] + sc * nc[3],
          Pc = Vc * nc[4] + rB * nc[5] + uc * nc[6] + sc * nc[7],
          qB = Vc * nc[8] + rB * nc[9] + uc * nc[10] + sc * nc[11],
          Oc = Vc * nc[12] + rB * nc[13] + uc * nc[14] + sc * nc[15];
        return new Ic(Mc, Pc, qB, Oc)
      }
      dotCoordinate(cB) {
        return this.normal.x * cB.x + this.normal.y * cB.y + this.normal.z * cB.z + this.d
      }
      copyFromPoints(cB, Bc, nc) {
        const Vc = Bc.x - cB.x,
          Ic = Bc.y - cB.y,
          rB = Bc.z - cB.z,
          uc = nc.x - cB.x,
          sc = nc.y - cB.y,
          Mc = nc.z - cB.z,
          Pc = Ic * Mc - rB * sc,
          qB = rB * uc - Vc * Mc,
          Oc = Vc * sc - Ic * uc,
          Tc = Math.sqrt(Pc * Pc + qB * qB + Oc * Oc);
        let fc;
        return fc = 0 !== Tc ? 1 / Tc : 0, this.normal.x = Pc * fc, this.normal.y = qB * fc, this.normal.z = Oc * fc, this.d = -(this.normal.x * cB.x + this.normal.y * cB.y + this.normal.z * cB.z), this
      }
      isFrontFacingTo(cB, Bc) {
        return Vc.p.Dot(this.normal, cB) <= Bc
      }
      signedDistanceTo(cB) {
        return Vc.p.Dot(cB, this.normal) + this.d
      }
      static FromArray(cB) {
        return new Ic(cB[0], cB[1], cB[2], cB[3])
      }
      static FromPoints(cB, Bc, nc) {
        const Vc = new Ic(0, 0, 0, 0);
        return Vc.copyFromPoints(cB, Bc, nc), Vc
      }
      static FromPositionAndNormal(cB, Bc) {
        const nc = new Ic(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(cB, Bc, nc)
      }
      static FromPositionAndNormalToRef(cB, Bc, nc) {
        return nc.normal.qqc(Bc), nc.normal.normalize(), nc.d = -cB.dot(nc.normal), nc
      }
      static SignedDistanceToPlaneFromPositionAndNormal(cB, Bc, nc) {
        const Ic = -(Bc.x * cB.x + Bc.y * cB.y + Bc.z * cB.z);
        return Vc.p.Dot(nc, Bc) + Ic
      }
    }
    Ic._TmpMatrix = Vc.d.Identity()
  },
  35753: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      Matrix: () => Vc.d,
      Quaternion: () => Vc.f,
      RegisterMathVector: () => Vc.h,
      TmpVectors: () => Vc.i,
      Vector2: () => Vc.m,
      KV: () => Vc.p,
      Vector4: () => Vc.t
    });
    var Vc = nc(35756);
    (0, Vc.h)()
  },
  36675: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Vc
    });
    class Vc {
      constructor(cB, Bc, nc, Vc) {
        this.x = cB, this.y = Bc, this.width = nc, this.height = Vc
      }
      toGlobal(cB, Bc) {
        return new Vc(this.x * cB, this.y * Bc, this.width * cB, this.height * Bc)
      }
      toGlobalToRef(cB, Bc, nc) {
        return nc.x = this.x * cB, nc.y = this.y * Bc, nc.width = this.width * cB, nc.height = this.height * Bc, this
      }
      clone() {
        return new Vc(this.x, this.y, this.width, this.height)
      }
    }
  },
  38418: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Pc
    });
    var Vc = nc(35756),
      Ic = nc(35815),
      rB = nc(38425),
      uc = nc(38430),
      sc = nc(38448);

    function Mc(cB) {
      let Bc = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const nc = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        rB = [],
        Mc = cB.width || cB.size || 1,
        Pc = cB.height || cB.size || 1,
        qB = cB.depth || cB.size || 1,
        Oc = cB.wrap || !1;
      let Tc = void 0 === cB.topBaseAt ? 1 : cB.topBaseAt,
        fc = void 0 === cB.bottomBaseAt ? 0 : cB.bottomBaseAt;
      Tc = (Tc + 4) % 4, fc = (fc + 4) % 4;
      let mB = [2, 0, 3, 1][Tc],
        ec = [2, 0, 1, 3][fc],
        tB = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (Oc) {
        Bc = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], tB = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let cB = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          nc = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const Vc = [17, 18, 19, 16],
          Ic = [22, 23, 20, 21];
        for (; mB > 0;) cB.unshift(cB.pop()), Vc.unshift(Vc.pop()), mB--;
        for (; ec > 0;) nc.unshift(nc.pop()), Ic.unshift(Ic.pop()), ec--;
        cB = cB.flat(), nc = nc.flat(), tB = tB.concat(cB).concat(nc), Bc.push(Vc[0], Vc[2], Vc[3], Vc[0], Vc[1], Vc[2]), Bc.push(Ic[0], Ic[2], Ic[3], Ic[0], Ic[1], Ic[2])
      }
      const Sc = [Mc / 2, Pc / 2, qB / 2],
        yB = tB.reduce(((cB, Bc, nc) => cB.concat(Bc * Sc[nc % 3])), []),
        zB = 0 === cB.sideOrientation ? 0 : cB.sideOrientation || uc.b.DEFAULTSIDE,
        pc = cB.faceUV || new Array(6),
        hc = cB.faceColors,
        aB = [];
      for (let uc = 0; uc < 6; uc++) void 0 === pc[uc] && (pc[uc] = new Vc.t(0, 0, 1, 1)), hc && void 0 === hc[uc] && (hc[uc] = new Ic.g(1, 1, 1, 1));
      for (let Vc = 0; Vc < 6; Vc++)
        if (rB.push(pc[Vc].z, sc.e ? 1 - pc[Vc].w : pc[Vc].w), rB.push(pc[Vc].x, sc.e ? 1 - pc[Vc].w : pc[Vc].w), rB.push(pc[Vc].x, sc.e ? 1 - pc[Vc].y : pc[Vc].y), rB.push(pc[Vc].z, sc.e ? 1 - pc[Vc].y : pc[Vc].y), hc)
          for (let cB = 0; cB < 4; cB++) aB.push(hc[Vc].r, hc[Vc].g, hc[Vc].b, hc[Vc].a);
      uc.b._ComputeSides(zB, yB, Bc, nc, rB, cB.frontUVs, cB.backUVs);
      const lc = new uc.b;
      if (lc.indices = Bc, lc.positions = yB, lc.normals = nc, lc.uvs = rB, hc) {
        const cB = zB === uc.b.DOUBLESIDE ? aB.concat(aB) : aB;
        lc.colors = cB
      }
      return lc
    }

    function Pc(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Vc = new rB.b(cB, nc);
      Bc.sideOrientation = rB.b._GetDefaultSideOrientation(Bc.sideOrientation), Vc._originalBuilderSideOrientation = Bc.sideOrientation;
      return Mc(Bc).applyToMesh(Vc, Bc.updatable), Vc
    }
    let qB = !1;
    qB || (qB = !0, uc.b.CreateBox = Mc, rB.b.CreateBox = function(cB, Bc) {
      return Pc(cB, {
        size: Bc,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  38467: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Oc
    });
    var Vc = nc(35756),
      Ic = nc(38425),
      rB = nc(38430),
      uc = nc(38471),
      sc = nc(38194),
      Mc = nc(37191);

    function Pc(cB) {
      const Bc = [],
        nc = [],
        Vc = cB.lines,
        Ic = cB.colors,
        uc = [];
      let sc = 0;
      for (let rB = 0; rB < Vc.length; rB++) {
        const cB = Vc[rB];
        for (let Vc = 0; Vc < cB.length; Vc++) {
          const {
            x: Mc,
            y: Pc,
            z: qB
          } = cB[Vc];
          if (nc.push(Mc, Pc, qB), Ic) {
            const cB = Ic[rB],
              {
                r: Bc,
                g: nc,
                b: sc,
                a: Mc
              } = cB[Vc];
            uc.push(Bc, nc, sc, Mc)
          }
          Vc > 0 && (Bc.push(sc - 1), Bc.push(sc)), sc++
        }
      }
      const Mc = new rB.b;
      return Mc.indices = Bc, Mc.positions = nc, Ic && (Mc.colors = uc), Mc
    }

    function qB(cB) {
      const Bc = cB.dashSize || 3,
        nc = cB.gapSize || 1,
        Ic = cB.dashNb || 200,
        uc = cB.points,
        sc = [],
        Mc = [],
        Pc = Vc.p.Zero();
      let qB, Oc, Tc, fc = 0,
        mB = 0;
      for (Tc = 0; Tc < uc.length - 1; Tc++) uc[Tc + 1].subtractToRef(uc[Tc], Pc), fc += Pc.length();
      const ec = fc / Ic,
        tB = Bc * ec / (Bc + nc);
      for (Tc = 0; Tc < uc.length - 1; Tc++) {
        uc[Tc + 1].subtractToRef(uc[Tc], Pc), qB = Math.floor(Pc.length() / ec), Pc.normalize();
        for (let cB = 0; cB < qB; cB++) Oc = ec * cB, sc.push(uc[Tc].x + Oc * Pc.x, uc[Tc].y + Oc * Pc.y, uc[Tc].z + Oc * Pc.z), sc.push(uc[Tc].x + (Oc + tB) * Pc.x, uc[Tc].y + (Oc + tB) * Pc.y, uc[Tc].z + (Oc + tB) * Pc.z), Mc.push(mB, mB + 1), mB += 2
      }
      const Sc = new rB.b;
      return Sc.positions = sc, Sc.indices = Mc, Sc
    }

    function Oc(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Vc = Bc.instance,
        Ic = Bc.lines,
        rB = Bc.colors;
      if (Vc) {
        const cB = Vc.getVerticesData(sc.i.PositionKind);
        let Bc, nc;
        rB && (Bc = Vc.getVerticesData(sc.i.ColorKind));
        let uc = 0,
          Mc = 0;
        for (let Vc = 0; Vc < Ic.length; Vc++) {
          const sc = Ic[Vc];
          for (let Ic = 0; Ic < sc.length; Ic++) cB[uc] = sc[Ic].x, cB[uc + 1] = sc[Ic].y, cB[uc + 2] = sc[Ic].z, rB && Bc && (nc = rB[Vc], Bc[Mc] = nc[Ic].r, Bc[Mc + 1] = nc[Ic].g, Bc[Mc + 2] = nc[Ic].b, Bc[Mc + 3] = nc[Ic].a, Mc += 4), uc += 3
        }
        return Vc.updateVerticesData(sc.i.PositionKind, cB, !1, !1), rB && Bc && Vc.updateVerticesData(sc.i.ColorKind, Bc, !1, !1), Vc.refreshBoundingInfo(), Vc
      }
      const Mc = !!rB,
        qB = new uc.b(cB, nc, null, void 0, void 0, Mc, Bc.useVertexAlpha, Bc.material);
      return Pc(Bc).applyToMesh(qB, Bc.updatable), qB
    }

    function Tc(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Vc = Bc.colors ? [Bc.colors] : null;
      return Oc(cB, {
        lines: [Bc.points],
        updatable: Bc.updatable,
        instance: Bc.instance,
        colors: Vc,
        useVertexAlpha: Bc.useVertexAlpha,
        material: Bc.material
      }, nc)
    }

    function fc(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const rB = Bc.points,
        sc = Bc.instance,
        Pc = Bc.gapSize || 1,
        Oc = Bc.dashSize || 3;
      if (sc) {
        const cB = cB => {
          const Bc = Vc.p.Zero(),
            nc = cB.length / 6;
          let Ic, uc, Mc, Pc, qB = 0,
            Oc = 0;
          for (Mc = 0; Mc < rB.length - 1; Mc++) rB[Mc + 1].subtractToRef(rB[Mc], Bc), qB += Bc.length();
          const Tc = qB / nc,
            fc = sc._creationDataStorage.dashSize,
            mB = fc * Tc / (fc + sc._creationDataStorage.gapSize);
          for (Mc = 0; Mc < rB.length - 1; Mc++)
            for (rB[Mc + 1].subtractToRef(rB[Mc], Bc), Ic = Math.floor(Bc.length() / Tc), Bc.normalize(), Pc = 0; Pc < Ic && Oc < cB.length;) uc = Tc * Pc, cB[Oc] = rB[Mc].x + uc * Bc.x, cB[Oc + 1] = rB[Mc].y + uc * Bc.y, cB[Oc + 2] = rB[Mc].z + uc * Bc.z, cB[Oc + 3] = rB[Mc].x + (uc + mB) * Bc.x, cB[Oc + 4] = rB[Mc].y + (uc + mB) * Bc.y, cB[Oc + 5] = rB[Mc].z + (uc + mB) * Bc.z, Oc += 6, Pc++;
          for (; Oc < cB.length;) cB[Oc] = rB[Mc].x, cB[Oc + 1] = rB[Mc].y, cB[Oc + 2] = rB[Mc].z, Oc += 3
        };
        return (Bc.dashNb || Bc.dashSize || Bc.gapSize || Bc.useVertexAlpha || Bc.material) && Mc.c.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), sc.updateMeshPositions(cB, !1), sc
      }
      const Tc = new uc.b(cB, nc, null, void 0, void 0, void 0, Bc.useVertexAlpha, Bc.material);
      return qB(Bc).applyToMesh(Tc, Bc.updatable), Tc._creationDataStorage = new Ic.f, Tc._creationDataStorage.dashSize = Oc, Tc._creationDataStorage.gapSize = Pc, Tc
    }
    let mB = !1;
    mB || (mB = !0, rB.b.CreateLineSystem = Pc, rB.b.CreateDashedLines = qB, Ic.b.CreateLines = function(cB, Bc) {
      return Tc(cB, {
        points: Bc,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, Ic.b.CreateDashedLines = function(cB, Bc, nc, Vc, Ic) {
      return fc(cB, {
        points: Bc,
        dashSize: nc,
        gapSize: Vc,
        dashNb: Ic,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  38471: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Tc,
      c: () => ec
    });
    var Vc, Ic, rB = nc(35815),
      uc = nc(38194),
      sc = nc(38425),
      Mc = nc(38479),
      Pc = nc(38326),
      qB = nc(38485),
      Oc = nc(37953);
    class Tc extends sc.b {
      _isShaderMaterial(cB) {
        return !!cB && "ShaderMaterial" === cB.getClassName()
      }
      constructor(cB) {
        let Bc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Vc = arguments.length > 5 ? arguments[5] : void 0,
          Ic = arguments.length > 6 ? arguments[6] : void 0,
          sc = arguments.length > 7 ? arguments[7] : void 0;
        super(cB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, Bc, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = Vc, this.useVertexAlpha = Ic, this.color = new rB.e(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, Bc && (this.color = Bc.color.clone(), this.alpha = Bc.alpha, this.useVertexColor = Bc.useVertexColor, this.useVertexAlpha = Bc.useVertexAlpha), this.intersectionThreshold = .1;
        const Mc = {
          attributes: [uc.i.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? Mc.defines.push("#define VERTEXALPHA") : Mc.needAlphaBlending = !1, this.useVertexColor ? (Mc.defines.push("#define VERTEXCOLOR"), Mc.attributes.push(uc.i.ColorKind)) : (Mc.uniforms.push("color"), this._color4 = new rB.g), sc) this.material = sc;
        else {
          this.knc().RV().isWebGPU && !Tc.ForceGLSL && (this._shaderLanguage = 1), Mc.shaderLanguage = this._shaderLanguage, Mc.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([nc.e(319).then((() => nc(40501))), nc.e(325).then((() => nc(40507)))]) : await Promise.all([nc.e(301).then((() => nc(40510))), nc.e(307).then((() => nc(40518)))])
          };
          const cB = new qB.t("colorShader", this.knc(), "color", Mc, !1);
          cB.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(cB)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(cB) {
        const Bc = this.material;
        if (Bc === cB) return;
        const nc = Bc && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(cB), nc && Bc?.dispose()
      }
      _setInternalMaterial(cB) {
        this._setMaterial(cB), this.material && (this.material.fillMode = Pc.c.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(cB) {}
      _bind(cB, Bc) {
        if (!this._geometry) return this;
        const nc = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(Bc, nc) : this._geometry._bind(Bc, nc, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: cB,
            g: Bc,
            b: nc
          } = this.color;
          this._color4.set(cB, Bc, nc, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(cB, Bc, nc) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const Vc = this.knc().RV();
        return this._unIndexed ? Vc.drawArraysType(Pc.c.LineListDrawMode, cB.verticesStart, cB.verticesCount, nc) : Vc.drawElementsType(Pc.c.LineListDrawMode, cB.indexStart, cB.indexCount, nc), this
      }
      dispose(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || Bc) && this.material?.dispose(!1, !1, !0), super.dispose(cB)
      }
      clone(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          nc = arguments.length > 2 ? arguments[2] : void 0;
        if (Bc && void 0 === Bc._addToSceneRootNodes) {
          const nc = Bc;
          return nc.source = this, new Tc(cB, this.knc(), nc.parent, nc.source, nc.doNotCloneChildren)
        }
        return new Tc(cB, this.knc(), Bc, this, nc)
      }
      createInstance(cB) {
        const Bc = new fc(cB, this);
        if (this.snc) {
          Bc.snc = {};
          for (const cB in this.snc) Bc.snc[cB] = this.snc[cB]
        }
        return Bc
      }
      serialize(cB) {
        super.serialize(cB), cB.color = this.color.KPc(), cB.alpha = this.alpha
      }
      static Parse(cB, Bc) {
        const nc = new Tc(cB.name, Bc);
        return nc.color = rB.e.FromArray(cB.color), nc.alpha = cB.alpha, nc
      }
    }
    Tc.ForceGLSL = !1;
    class fc extends Mc.c {
      constructor(cB, Bc) {
        super(cB, Bc), this.intersectionThreshold = Bc.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let mB = !1;

    function ec() {
      mB || (mB = !0, sc.b._LinesMeshParser = (cB, Bc) => Tc.Parse(cB, Bc))
    }(Vc = Tc.prototype).enableEdgesRendering ?? (Vc.enableEdgesRendering = (0, Oc.h)("LinesMesh", "enableEdgesRendering")), (Ic = fc.prototype).enableEdgesRendering ?? (Ic.enableEdgesRendering = (0, Oc.h)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  37185: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => rB
    });
    var Vc = nc(37191);
    const Ic = (cB, Bc, nc) => cB ? cB.getClassName && "Mesh" === cB.getClassName() ? null : !cB.getClassName || "SubMesh" !== cB.getClassName() && "PhysicsBody" !== cB.getClassName() ? cB.clone ? cB.clone() : Array.isArray(cB) ? cB.slice() : nc && "object" === typeof cB ? {
      ...cB
    } : null : cB.clone(Bc) : null;
    class rB {
      static DeepCopy(cB, Bc, nc, rB) {
        let uc = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const sc = function(cB) {
          const Bc = [];
          do {
            const nc = Object.getOwnPropertyNames(cB);
            for (const cB of nc) - 1 === Bc.indexOf(cB) && Bc.push(cB)
          } while (cB = Object.getPrototypeOf(cB));
          return Bc
        }(cB);
        for (const Pc of sc) {
          if ("_" === Pc[0] && (!rB || -1 === rB.indexOf(Pc))) continue;
          if (Pc.endsWith("Observable")) continue;
          if (nc && -1 !== nc.indexOf(Pc)) continue;
          const sc = cB[Pc],
            qB = typeof sc;
          if ("function" !== qB) try {
            if ("object" === qB)
              if (sc instanceof Uint8Array) Bc[Pc] = Uint8Array.from(sc);
              else if (sc instanceof Array) {
              if (Bc[Pc] = [], sc.length > 0)
                if ("object" == typeof sc[0])
                  for (let cB = 0; cB < sc.length; cB++) {
                    const nc = Ic(sc[cB], Bc, uc); - 1 === Bc[Pc].indexOf(nc) && Bc[Pc].push(nc)
                  } else Bc[Pc] = sc.slice(0)
            } else Bc[Pc] = Ic(sc, Bc, uc);
            else Bc[Pc] = sc
          } catch (Mc) {
            Vc.c.Warn(Mc.message)
          }
        }
      }
    }
  },
  36472: (cB, Bc, nc) => {
    function Vc() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (cB => {
        const Bc = 16 * Math.random() | 0;
        return ("x" === cB ? Bc : 3 & Bc | 8).toString(16)
      }))
    }
    nc.d(Bc, {
      d: () => Vc
    })
  },
  37191: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Vc
    });
    class Vc {
      static _CheckLimit(cB, Bc) {
        let nc = Vc._LogLimitOutputs[cB];
        return nc ? nc.current++ : (nc = {
          limit: Bc,
          current: 1
        }, Vc._LogLimitOutputs[cB] = nc), nc.current <= nc.limit
      }
      static _GenerateLimitMessage(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const nc = Vc._LogLimitOutputs[cB];
        if (!nc || !Vc.MessageLimitReached) return;
        const Ic = this._Levels[Bc];
        nc.current === nc.limit && Vc[Ic.name](Vc.MessageLimitReached.replace(/%LIMIT%/g, "" + nc.limit).replace(/%TYPE%/g, Ic.name ?? ""))
      }
      static _AddLogEntry(cB) {
        Vc._LogCache = cB + Vc._LogCache, Vc.OnNewCacheEntry && Vc.OnNewCacheEntry(cB)
      }
      static _FormatMessage(cB) {
        const Bc = cB => cB < 10 ? "0" + cB : "" + cB,
          nc = new Date;
        return "[" + Bc(nc.getHours()) + ":" + Bc(nc.getMinutes()) + ":" + Bc(nc.getSeconds()) + "]: " + cB
      }
      static _LogDisabled(cB, Bc) {}
      static _LogEnabled() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Bc = arguments.length > 1 ? arguments[1] : void 0,
          nc = arguments.length > 2 ? arguments[2] : void 0;
        const Ic = Array.isArray(Bc) ? Bc[0] : Bc;
        if (void 0 !== nc && !Vc._CheckLimit(Ic, nc)) return;
        const rB = Vc._FormatMessage(Ic),
          uc = this._Levels[cB],
          sc = Array.isArray(Bc) ? Bc.slice(1) : [];
        uc.logFunc && uc.logFunc("BJS - " + rB, ...sc);
        const Mc = `<div style='color:${uc.color}'>${rB}</div><br>`;
        Vc._AddLogEntry(Mc), Vc._GenerateLimitMessage(Ic, cB)
      }
      static get LogCache() {
        return Vc._LogCache
      }
      static ClearLogCache() {
        Vc._LogCache = "", Vc._LogLimitOutputs = {}, Vc.errorsCount = 0
      }
      static set LogLevels(cB) {
        Vc.Log = Vc._LogDisabled, Vc.Warn = Vc._LogDisabled, Vc.Error = Vc._LogDisabled;
        const Bc = [Vc.MessageLogLevel, Vc.WarningLogLevel, Vc.ErrorLogLevel];
        for (const nc of Bc)
          if ((cB & nc) === nc) {
            const cB = this._Levels[nc];
            Vc[cB.name] = Vc._LogEnabled.bind(Vc, nc)
          }
      }
    }
    Vc.NoneLogLevel = 0, Vc.MessageLogLevel = 1, Vc.WarningLogLevel = 2, Vc.ErrorLogLevel = 4, Vc.AllLogLevel = 7, Vc.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Vc._LogCache = "", Vc._LogLimitOutputs = {}, Vc._Levels = [{}, {
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
    }], Vc.errorsCount = 0, Vc.Log = Vc._LogEnabled.bind(Vc, Vc.MessageLogLevel), Vc.Warn = Vc._LogEnabled.bind(Vc, Vc.WarningLogLevel), Vc.Error = Vc._LogEnabled.bind(Vc, Vc.ErrorLogLevel)
  },
  38137: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Vc.h
    });
    var Vc = nc(38141);
    (0, Vc.d)()
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);