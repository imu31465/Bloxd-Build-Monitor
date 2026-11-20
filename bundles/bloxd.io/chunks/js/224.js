export const id = 224;
export const ids = [224, 230, 233];
export const modules = {
  39535: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => gv,
      e: () => pv
    });
    var hv = Pv(38209),
      Sv = Pv(39312),
      ev = Pv(39515),
      gv = {};
    class pv {
      constructor(vv) {
        this.attachedToElement = !1, this.attached = {}, this.camera = vv, this.checkInputs = () => {}
      }
      add(vv) {
        const zv = vv.getSimpleName();
        this.attached[zv] ? hv.d.Warn("camera input of type " + zv + " already exists on camera") : (this.attached[zv] = vv, vv.camera = this.camera, vv.checkInputs && (this.checkInputs = this._addCheckInputs(vv.checkInputs.bind(vv))), this.attachedToElement && vv.attachControl(this.noPreventDefault))
      }
      remove(vv) {
        for (const zv in this.attached) {
          const Pv = this.attached[zv];
          if (Pv === vv) return Pv.detachControl(), Pv.camera = null, delete this.attached[zv], void this.rebuildInputCheck()
        }
      }
      removeByType(vv) {
        for (const zv in this.attached) {
          const Pv = this.attached[zv];
          Pv.getClassName() === vv && (Pv.detachControl(), Pv.camera = null, delete this.attached[zv], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(vv) {
        const zv = this.checkInputs;
        return () => {
          zv(), vv()
        }
      }
      attachInput(vv) {
        this.attachedToElement && vv.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          vv = !ev.c.ForceAttachControlToAlwaysPreventDefault && vv, this.attachedToElement = !0, this.noPreventDefault = vv;
          for (const zv in this.attached) this.attached[zv].attachControl(vv)
        }
      }
      detachElement() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const zv in this.attached) this.attached[zv].detachControl(), vv && (this.attached[zv].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const vv in this.attached) {
          const zv = this.attached[vv];
          zv.checkInputs && (this.checkInputs = this._addCheckInputs(zv.checkInputs.bind(zv)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(vv) {
        const zv = {};
        for (const Pv in this.attached) {
          const vv = this.attached[Pv],
            hv = Sv.c.Serialize(vv);
          zv[vv.getClassName()] = hv
        }
        vv.inputsmgr = zv
      }
      parse(vv) {
        const zv = vv.inputsmgr;
        if (zv) {
          this.clear();
          for (const vv in zv) {
            const Pv = gv[vv];
            if (Pv) {
              const hv = zv[vv],
                ev = Sv.c.Parse((() => new Pv), hv, null);
              this.add(ev)
            }
          }
        } else
          for (const Pv in this.attached) {
            const zv = gv[this.attached[Pv].getClassName()];
            if (zv) {
              const hv = Sv.c.Parse((() => new zv), vv, null);
              this.remove(this.attached[Pv]), this.add(hv)
            }
          }
      }
    }
  },
  39537: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => hv.b
    });
    var hv = Pv(39544);
    (0, hv.c)()
  },
  39544: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => lv,
      c: () => Wv
    });
    var hv = Pv(39295),
      Sv = Pv(39300),
      ev = Pv(36594),
      gv = Pv(36751),
      pv = Pv(39553),
      dv = Pv(39518),
      Nv = Pv(36631);
    let lv = (() => {
        var vv;
        let zv, Pv, dv = pv.c,
          Nv = [],
          lv = [],
          Tv = [],
          Wv = [];
        return vv = class extends dv {
          constructor(vv, zv, Pv, Sv) {
            super(vv, Pv, Sv), this.groundColor = (0, hv.f)(this, Nv, new gv.b(0, 0, 0)), this.direction = ((0, hv.f)(this, lv), (0, hv.f)(this, Tv, void 0)), (0, hv.f)(this, Wv), this.direction = zv || ev.l.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(vv) {
            return this.direction = ev.l.Normalize(vv.subtract(ev.l.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(vv, zv) {
            const Pv = ev.l.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", Pv.x, Pv.y, Pv.z, 0, zv), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), zv), this
          }
          transferToNodeMaterialEffect(vv, zv) {
            const Pv = ev.l.Normalize(this.direction);
            return vv.setFloat3(zv, Pv.x, Pv.y, Pv.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = ev.c.Identity()), this._worldMatrix
          }
          getTypeID() {
            return pv.c.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(vv, zv) {
            vv["HEMILIGHT" + zv] = !0
          }
        }, (() => {
          const ev = "function" === typeof Symbol && Symbol.metadata ? Object.create(dv[Symbol.metadata] ?? null) : void 0;
          zv = [(0, Sv.n)()], Pv = [(0, Sv.I)()], (0, hv.e)(null, null, zv, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: vv => "groundColor" in vv,
              get: vv => vv.groundColor,
              set: (vv, zv) => {
                vv.groundColor = zv
              }
            },
            metadata: ev
          }, Nv, lv), (0, hv.e)(null, null, Pv, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: vv => "direction" in vv,
              get: vv => vv.direction,
              set: (vv, zv) => {
                vv.direction = zv
              }
            },
            metadata: ev
          }, Tv, Wv), ev && Object.defineProperty(vv, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ev
          })
        })(), vv
      })(),
      Tv = !1;

    function Wv() {
      Tv || (Tv = !0, dv.c.AddNodeConstructor("Light_Type_3", ((vv, zv) => () => new lv(vv, ev.l.Zero(), zv))), (0, Nv.c)("BABYLON.HemisphericLight", lv))
    }
  },
  36745: (vv, zv, Pv) => {
    Pv.d(zv, {
      Color3: () => hv.b,
      d: () => hv.e
    });
    var hv = Pv(36751);
    (0, hv.h)()
  },
  37290: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Sv
    });
    var hv = Pv(37293);
    class Sv {
      static GetPlanes(vv) {
        const zv = [];
        for (let Pv = 0; Pv < 6; Pv++) zv.push(new hv.b(0, 0, 0, 0));
        return Sv.GetPlanesToRef(vv, zv), zv
      }
      static GetNearPlaneToRef(vv, zv) {
        const Pv = vv.m;
        zv.normal.x = Pv[3] + Pv[2], zv.normal.y = Pv[7] + Pv[6], zv.normal.z = Pv[11] + Pv[10], zv.d = Pv[15] + Pv[14], zv.normalize()
      }
      static GetFarPlaneToRef(vv, zv) {
        const Pv = vv.m;
        zv.normal.x = Pv[3] - Pv[2], zv.normal.y = Pv[7] - Pv[6], zv.normal.z = Pv[11] - Pv[10], zv.d = Pv[15] - Pv[14], zv.normalize()
      }
      static GetLeftPlaneToRef(vv, zv) {
        const Pv = vv.m;
        zv.normal.x = Pv[3] + Pv[0], zv.normal.y = Pv[7] + Pv[4], zv.normal.z = Pv[11] + Pv[8], zv.d = Pv[15] + Pv[12], zv.normalize()
      }
      static GetRightPlaneToRef(vv, zv) {
        const Pv = vv.m;
        zv.normal.x = Pv[3] - Pv[0], zv.normal.y = Pv[7] - Pv[4], zv.normal.z = Pv[11] - Pv[8], zv.d = Pv[15] - Pv[12], zv.normalize()
      }
      static GetTopPlaneToRef(vv, zv) {
        const Pv = vv.m;
        zv.normal.x = Pv[3] - Pv[1], zv.normal.y = Pv[7] - Pv[5], zv.normal.z = Pv[11] - Pv[9], zv.d = Pv[15] - Pv[13], zv.normalize()
      }
      static GetBottomPlaneToRef(vv, zv) {
        const Pv = vv.m;
        zv.normal.x = Pv[3] + Pv[1], zv.normal.y = Pv[7] + Pv[5], zv.normal.z = Pv[11] + Pv[9], zv.d = Pv[15] + Pv[13], zv.normalize()
      }
      static GetPlanesToRef(vv, zv) {
        Sv.GetNearPlaneToRef(vv, zv[0]), Sv.GetFarPlaneToRef(vv, zv[1]), Sv.GetLeftPlaneToRef(vv, zv[2]), Sv.GetRightPlaneToRef(vv, zv[3]), Sv.GetTopPlaneToRef(vv, zv[4]), Sv.GetBottomPlaneToRef(vv, zv[5])
      }
      static IsPointInFrustum(vv, zv) {
        for (let Pv = 0; Pv < 6; Pv++)
          if (zv[Pv].dotCoordinate(vv) < 0) return !1;
        return !0
      }
    }
  },
  37293: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Sv
    });
    var hv = Pv(36594);
    class Sv {
      constructor(vv, zv, Pv, Sv) {
        this.normal = new hv.l(vv, zv, Pv), this.d = Sv
      }
      pPv() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Sv(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let vv = this.normal.getHashCode();
        return vv = 397 * vv ^ this.d, vv
      }
      normalize() {
        const vv = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let zv = 0;
        return 0 !== vv && (zv = 1 / vv), this.normal.x *= zv, this.normal.y *= zv, this.normal.z *= zv, this.d *= zv, this
      }
      transform(vv) {
        const zv = Sv._TmpMatrix;
        vv.invertToRef(zv);
        const Pv = zv.m,
          hv = this.normal.x,
          ev = this.normal.y,
          gv = this.normal.z,
          pv = this.d,
          dv = hv * Pv[0] + ev * Pv[1] + gv * Pv[2] + pv * Pv[3],
          Nv = hv * Pv[4] + ev * Pv[5] + gv * Pv[6] + pv * Pv[7],
          lv = hv * Pv[8] + ev * Pv[9] + gv * Pv[10] + pv * Pv[11],
          Tv = hv * Pv[12] + ev * Pv[13] + gv * Pv[14] + pv * Pv[15];
        return new Sv(dv, Nv, lv, Tv)
      }
      dotCoordinate(vv) {
        return this.normal.x * vv.x + this.normal.y * vv.y + this.normal.z * vv.z + this.d
      }
      copyFromPoints(vv, zv, Pv) {
        const hv = zv.x - vv.x,
          Sv = zv.y - vv.y,
          ev = zv.z - vv.z,
          gv = Pv.x - vv.x,
          pv = Pv.y - vv.y,
          dv = Pv.z - vv.z,
          Nv = Sv * dv - ev * pv,
          lv = ev * gv - hv * dv,
          Tv = hv * pv - Sv * gv,
          Wv = Math.sqrt(Nv * Nv + lv * lv + Tv * Tv);
        let wv;
        return wv = 0 !== Wv ? 1 / Wv : 0, this.normal.x = Nv * wv, this.normal.y = lv * wv, this.normal.z = Tv * wv, this.d = -(this.normal.x * vv.x + this.normal.y * vv.y + this.normal.z * vv.z), this
      }
      isFrontFacingTo(vv, zv) {
        return hv.l.Dot(this.normal, vv) <= zv
      }
      signedDistanceTo(vv) {
        return hv.l.Dot(vv, this.normal) + this.d
      }
      static FromArray(vv) {
        return new Sv(vv[0], vv[1], vv[2], vv[3])
      }
      static FromPoints(vv, zv, Pv) {
        const hv = new Sv(0, 0, 0, 0);
        return hv.copyFromPoints(vv, zv, Pv), hv
      }
      static FromPositionAndNormal(vv, zv) {
        const Pv = new Sv(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(vv, zv, Pv)
      }
      static FromPositionAndNormalToRef(vv, zv, Pv) {
        return Pv.normal.Vzv(zv), Pv.normal.normalize(), Pv.d = -vv.dot(Pv.normal), Pv
      }
      static SignedDistanceToPlaneFromPositionAndNormal(vv, zv, Pv) {
        const Sv = -(zv.x * vv.x + zv.y * vv.y + zv.z * vv.z);
        return hv.l.Dot(Pv, zv) + Sv
      }
    }
    Sv._TmpMatrix = hv.c.Identity()
  },
  36591: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      Matrix: () => hv.c,
      Quaternion: () => hv.d,
      RegisterMathVector: () => hv.e,
      TmpVectors: () => hv.i,
      Vector2: () => hv.j,
      fa: () => hv.l,
      Vector4: () => hv.m
    });
    var hv = Pv(36594);
    (0, hv.e)()
  },
  37633: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv
    });
    class hv {
      constructor(vv, zv, Pv, hv) {
        this.x = vv, this.y = zv, this.width = Pv, this.height = hv
      }
      toGlobal(vv, zv) {
        return new hv(this.x * vv, this.y * zv, this.width * vv, this.height * zv)
      }
      toGlobalToRef(vv, zv, Pv) {
        return Pv.x = this.x * vv, Pv.y = this.y * zv, Pv.width = this.width * vv, Pv.height = this.height * zv, this
      }
      clone() {
        return new hv(this.x, this.y, this.width, this.height)
      }
    }
  },
  39710: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Nv
    });
    var hv = Pv(36594),
      Sv = Pv(36751),
      ev = Pv(39712),
      gv = Pv(39720),
      pv = Pv(39745);

    function dv(vv) {
      let zv = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const Pv = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        ev = [],
        dv = vv.width || vv.size || 1,
        Nv = vv.height || vv.size || 1,
        lv = vv.depth || vv.size || 1,
        Tv = vv.wrap || !1;
      let Wv = void 0 === vv.topBaseAt ? 1 : vv.topBaseAt,
        wv = void 0 === vv.bottomBaseAt ? 0 : vv.bottomBaseAt;
      Wv = (Wv + 4) % 4, wv = (wv + 4) % 4;
      let av = [2, 0, 3, 1][Wv],
        sv = [2, 0, 1, 3][wv],
        Cv = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (Tv) {
        zv = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], Cv = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let vv = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          Pv = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const hv = [17, 18, 19, 16],
          Sv = [22, 23, 20, 21];
        for (; av > 0;) vv.unshift(vv.pop()), hv.unshift(hv.pop()), av--;
        for (; sv > 0;) Pv.unshift(Pv.pop()), Sv.unshift(Sv.pop()), sv--;
        vv = vv.flat(), Pv = Pv.flat(), Cv = Cv.concat(vv).concat(Pv), zv.push(hv[0], hv[2], hv[3], hv[0], hv[1], hv[2]), zv.push(Sv[0], Sv[2], Sv[3], Sv[0], Sv[1], Sv[2])
      }
      const iv = [dv / 2, Nv / 2, lv / 2],
        cv = Cv.reduce(((vv, zv, Pv) => vv.concat(zv * iv[Pv % 3])), []),
        Gv = 0 === vv.sideOrientation ? 0 : vv.sideOrientation || gv.d.DEFAULTSIDE,
        mv = vv.faceUV || new Array(6),
        jv = vv.faceColors,
        fv = [];
      for (let gv = 0; gv < 6; gv++) void 0 === mv[gv] && (mv[gv] = new hv.m(0, 0, 1, 1)), jv && void 0 === jv[gv] && (jv[gv] = new Sv.e(1, 1, 1, 1));
      for (let hv = 0; hv < 6; hv++)
        if (ev.push(mv[hv].z, pv.b ? 1 - mv[hv].w : mv[hv].w), ev.push(mv[hv].x, pv.b ? 1 - mv[hv].w : mv[hv].w), ev.push(mv[hv].x, pv.b ? 1 - mv[hv].y : mv[hv].y), ev.push(mv[hv].z, pv.b ? 1 - mv[hv].y : mv[hv].y), jv)
          for (let vv = 0; vv < 4; vv++) fv.push(jv[hv].r, jv[hv].g, jv[hv].b, jv[hv].a);
      gv.d._ComputeSides(Gv, cv, zv, Pv, ev, vv.frontUVs, vv.backUVs);
      const Fv = new gv.d;
      if (Fv.indices = zv, Fv.positions = cv, Fv.normals = Pv, Fv.uvs = ev, jv) {
        const vv = Gv === gv.d.DOUBLESIDE ? fv.concat(fv) : fv;
        Fv.colors = vv
      }
      return Fv
    }

    function Nv(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const hv = new ev.c(vv, Pv);
      zv.sideOrientation = ev.c._GetDefaultSideOrientation(zv.sideOrientation), hv._originalBuilderSideOrientation = zv.sideOrientation;
      return dv(zv).applyToMesh(hv, zv.updatable), hv
    }
    let lv = !1;
    lv || (lv = !0, gv.d.CreateBox = dv, ev.c.CreateBox = function(vv, zv) {
      return Nv(vv, {
        size: zv,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  39774: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Tv
    });
    var hv = Pv(36594),
      Sv = Pv(39712),
      ev = Pv(39720),
      gv = Pv(39778),
      pv = Pv(39441),
      dv = Pv(38209);

    function Nv(vv) {
      const zv = [],
        Pv = [],
        hv = vv.lines,
        Sv = vv.colors,
        gv = [];
      let pv = 0;
      for (let ev = 0; ev < hv.length; ev++) {
        const vv = hv[ev];
        for (let hv = 0; hv < vv.length; hv++) {
          const {
            x: dv,
            y: Nv,
            z: lv
          } = vv[hv];
          if (Pv.push(dv, Nv, lv), Sv) {
            const vv = Sv[ev],
              {
                r: zv,
                g: Pv,
                b: pv,
                a: dv
              } = vv[hv];
            gv.push(zv, Pv, pv, dv)
          }
          hv > 0 && (zv.push(pv - 1), zv.push(pv)), pv++
        }
      }
      const dv = new ev.d;
      return dv.indices = zv, dv.positions = Pv, Sv && (dv.colors = gv), dv
    }

    function lv(vv) {
      const zv = vv.dashSize || 3,
        Pv = vv.gapSize || 1,
        Sv = vv.dashNb || 200,
        gv = vv.points,
        pv = [],
        dv = [],
        Nv = hv.l.Zero();
      let lv, Tv, Wv, wv = 0,
        av = 0;
      for (Wv = 0; Wv < gv.length - 1; Wv++) gv[Wv + 1].subtractToRef(gv[Wv], Nv), wv += Nv.length();
      const sv = wv / Sv,
        Cv = zv * sv / (zv + Pv);
      for (Wv = 0; Wv < gv.length - 1; Wv++) {
        gv[Wv + 1].subtractToRef(gv[Wv], Nv), lv = Math.floor(Nv.length() / sv), Nv.normalize();
        for (let vv = 0; vv < lv; vv++) Tv = sv * vv, pv.push(gv[Wv].x + Tv * Nv.x, gv[Wv].y + Tv * Nv.y, gv[Wv].z + Tv * Nv.z), pv.push(gv[Wv].x + (Tv + Cv) * Nv.x, gv[Wv].y + (Tv + Cv) * Nv.y, gv[Wv].z + (Tv + Cv) * Nv.z), dv.push(av, av + 1), av += 2
      }
      const iv = new ev.d;
      return iv.positions = pv, iv.indices = dv, iv
    }

    function Tv(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const hv = zv.instance,
        Sv = zv.lines,
        ev = zv.colors;
      if (hv) {
        const vv = hv.getVerticesData(pv.k.PositionKind);
        let zv, Pv;
        ev && (zv = hv.getVerticesData(pv.k.ColorKind));
        let gv = 0,
          dv = 0;
        for (let hv = 0; hv < Sv.length; hv++) {
          const pv = Sv[hv];
          for (let Sv = 0; Sv < pv.length; Sv++) vv[gv] = pv[Sv].x, vv[gv + 1] = pv[Sv].y, vv[gv + 2] = pv[Sv].z, ev && zv && (Pv = ev[hv], zv[dv] = Pv[Sv].r, zv[dv + 1] = Pv[Sv].g, zv[dv + 2] = Pv[Sv].b, zv[dv + 3] = Pv[Sv].a, dv += 4), gv += 3
        }
        return hv.updateVerticesData(pv.k.PositionKind, vv, !1, !1), ev && zv && hv.updateVerticesData(pv.k.ColorKind, zv, !1, !1), hv.refreshBoundingInfo(), hv
      }
      const dv = !!ev,
        lv = new gv.b(vv, Pv, null, void 0, void 0, dv, zv.useVertexAlpha, zv.material);
      return Nv(zv).applyToMesh(lv, zv.updatable), lv
    }

    function Wv(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const hv = zv.colors ? [zv.colors] : null;
      return Tv(vv, {
        lines: [zv.points],
        updatable: zv.updatable,
        instance: zv.instance,
        colors: hv,
        useVertexAlpha: zv.useVertexAlpha,
        material: zv.material
      }, Pv)
    }

    function wv(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const ev = zv.points,
        pv = zv.instance,
        Nv = zv.gapSize || 1,
        Tv = zv.dashSize || 3;
      if (pv) {
        const vv = vv => {
          const zv = hv.l.Zero(),
            Pv = vv.length / 6;
          let Sv, gv, dv, Nv, lv = 0,
            Tv = 0;
          for (dv = 0; dv < ev.length - 1; dv++) ev[dv + 1].subtractToRef(ev[dv], zv), lv += zv.length();
          const Wv = lv / Pv,
            wv = pv._creationDataStorage.dashSize,
            av = wv * Wv / (wv + pv._creationDataStorage.gapSize);
          for (dv = 0; dv < ev.length - 1; dv++)
            for (ev[dv + 1].subtractToRef(ev[dv], zv), Sv = Math.floor(zv.length() / Wv), zv.normalize(), Nv = 0; Nv < Sv && Tv < vv.length;) gv = Wv * Nv, vv[Tv] = ev[dv].x + gv * zv.x, vv[Tv + 1] = ev[dv].y + gv * zv.y, vv[Tv + 2] = ev[dv].z + gv * zv.z, vv[Tv + 3] = ev[dv].x + (gv + av) * zv.x, vv[Tv + 4] = ev[dv].y + (gv + av) * zv.y, vv[Tv + 5] = ev[dv].z + (gv + av) * zv.z, Tv += 6, Nv++;
          for (; Tv < vv.length;) vv[Tv] = ev[dv].x, vv[Tv + 1] = ev[dv].y, vv[Tv + 2] = ev[dv].z, Tv += 3
        };
        return (zv.dashNb || zv.dashSize || zv.gapSize || zv.useVertexAlpha || zv.material) && dv.d.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), pv.updateMeshPositions(vv, !1), pv
      }
      const Wv = new gv.b(vv, Pv, null, void 0, void 0, void 0, zv.useVertexAlpha, zv.material);
      return lv(zv).applyToMesh(Wv, zv.updatable), Wv._creationDataStorage = new Sv.i, Wv._creationDataStorage.dashSize = Tv, Wv._creationDataStorage.gapSize = Nv, Wv
    }
    let av = !1;
    av || (av = !0, ev.d.CreateLineSystem = Nv, ev.d.CreateDashedLines = lv, Sv.c.CreateLines = function(vv, zv) {
      return Wv(vv, {
        points: zv,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, Sv.c.CreateDashedLines = function(vv, zv, Pv, hv, Sv) {
      return wv(vv, {
        points: zv,
        dashSize: Pv,
        gapSize: hv,
        dashNb: Sv,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  39778: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Wv,
      e: () => sv
    });
    var hv, Sv, ev = Pv(36751),
      gv = Pv(39441),
      pv = Pv(39712),
      dv = Pv(39782),
      Nv = Pv(39593),
      lv = Pv(39790),
      Tv = Pv(39190);
    class Wv extends pv.c {
      _isShaderMaterial(vv) {
        return !!vv && "ShaderMaterial" === vv.getClassName()
      }
      constructor(vv) {
        let zv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          hv = arguments.length > 5 ? arguments[5] : void 0,
          Sv = arguments.length > 6 ? arguments[6] : void 0,
          pv = arguments.length > 7 ? arguments[7] : void 0;
        super(vv, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, zv, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = hv, this.useVertexAlpha = Sv, this.color = new ev.b(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, zv && (this.color = zv.color.clone(), this.alpha = zv.alpha, this.useVertexColor = zv.useVertexColor, this.useVertexAlpha = zv.useVertexAlpha), this.intersectionThreshold = .1;
        const dv = {
          attributes: [gv.k.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? dv.defines.push("#define VERTEXALPHA") : dv.needAlphaBlending = !1, this.useVertexColor ? (dv.defines.push("#define VERTEXCOLOR"), dv.attributes.push(gv.k.ColorKind)) : (dv.uniforms.push("color"), this._color4 = new ev.e), pv) this.material = pv;
        else {
          this.rD().ma().isWebGPU && !Wv.ForceGLSL && (this._shaderLanguage = 1), dv.shaderLanguage = this._shaderLanguage, dv.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([Pv.e(335).then((() => Pv(41863))), Pv.e(341).then((() => Pv(41872)))]) : await Promise.all([Pv.e(317).then((() => Pv(41880))), Pv.e(323).then((() => Pv(41887)))])
          };
          const vv = new lv.o("colorShader", this.rD(), "color", dv, !1);
          vv.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(vv)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(vv) {
        const zv = this.material;
        if (zv === vv) return;
        const Pv = zv && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(vv), Pv && zv?.dispose()
      }
      _setInternalMaterial(vv) {
        this._setMaterial(vv), this.material && (this.material.fillMode = Nv.b.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(vv) {}
      _bind(vv, zv) {
        if (!this._geometry) return this;
        const Pv = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(zv, Pv) : this._geometry._bind(zv, Pv, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: vv,
            g: zv,
            b: Pv
          } = this.color;
          this._color4.set(vv, zv, Pv, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(vv, zv, Pv) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const hv = this.rD().ma();
        return this._unIndexed ? hv.drawArraysType(Nv.b.LineListDrawMode, vv.verticesStart, vv.verticesCount, Pv) : hv.drawElementsType(Nv.b.LineListDrawMode, vv.indexStart, vv.indexCount, Pv), this
      }
      dispose(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || zv) && this.material?.dispose(!1, !1, !0), super.dispose(vv)
      }
      clone(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Pv = arguments.length > 2 ? arguments[2] : void 0;
        if (zv && void 0 === zv._addToSceneRootNodes) {
          const Pv = zv;
          return Pv.source = this, new Wv(vv, this.rD(), Pv.parent, Pv.source, Pv.doNotCloneChildren)
        }
        return new Wv(vv, this.rD(), zv, this, Pv)
      }
      createInstance(vv) {
        const zv = new wv(vv, this);
        if (this.lV) {
          zv.lV = {};
          for (const vv in this.lV) zv.lV[vv] = this.lV[vv]
        }
        return zv
      }
      serialize(vv) {
        super.serialize(vv), vv.color = this.color.pPv(), vv.alpha = this.alpha
      }
      static Parse(vv, zv) {
        const Pv = new Wv(vv.name, zv);
        return Pv.color = ev.b.FromArray(vv.color), Pv.alpha = vv.alpha, Pv
      }
    }
    Wv.ForceGLSL = !1;
    class wv extends dv.b {
      constructor(vv, zv) {
        super(vv, zv), this.intersectionThreshold = zv.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let av = !1;

    function sv() {
      av || (av = !0, pv.c._LinesMeshParser = (vv, zv) => Wv.Parse(vv, zv))
    }(hv = Wv.prototype).enableEdgesRendering ?? (hv.enableEdgesRendering = (0, Tv.j)("LinesMesh", "enableEdgesRendering")), (Sv = wv.prototype).enableEdgesRendering ?? (Sv.enableEdgesRendering = (0, Tv.j)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  38207: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev
    });
    var hv = Pv(38209);
    const Sv = (vv, zv, Pv) => vv ? vv.getClassName && "Mesh" === vv.getClassName() ? null : !vv.getClassName || "SubMesh" !== vv.getClassName() && "PhysicsBody" !== vv.getClassName() ? vv.clone ? vv.clone() : Array.isArray(vv) ? vv.slice() : Pv && "object" === typeof vv ? {
      ...vv
    } : null : vv.clone(zv) : null;
    class ev {
      static DeepCopy(vv, zv, Pv, ev) {
        let gv = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const pv = function(vv) {
          const zv = [];
          do {
            const Pv = Object.getOwnPropertyNames(vv);
            for (const vv of Pv) - 1 === zv.indexOf(vv) && zv.push(vv)
          } while (vv = Object.getPrototypeOf(vv));
          return zv
        }(vv);
        for (const Nv of pv) {
          if ("_" === Nv[0] && (!ev || -1 === ev.indexOf(Nv))) continue;
          if (Nv.endsWith("Observable")) continue;
          if (Pv && -1 !== Pv.indexOf(Nv)) continue;
          const pv = vv[Nv],
            lv = typeof pv;
          if ("function" !== lv) try {
            if ("object" === lv)
              if (pv instanceof Uint8Array) zv[Nv] = Uint8Array.from(pv);
              else if (pv instanceof Array) {
              if (zv[Nv] = [], pv.length > 0)
                if ("object" == typeof pv[0])
                  for (let vv = 0; vv < pv.length; vv++) {
                    const Pv = Sv(pv[vv], zv, gv); - 1 === zv[Nv].indexOf(Pv) && zv[Nv].push(Pv)
                  } else zv[Nv] = pv.slice(0)
            } else zv[Nv] = Sv(pv, zv, gv);
            else zv[Nv] = pv
          } catch (dv) {
            hv.d.Warn(dv.message)
          }
        }
      }
    }
  },
  37431: (vv, zv, Pv) => {
    function hv() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (vv => {
        const zv = 16 * Math.random() | 0;
        return ("x" === vv ? zv : 3 & zv | 8).toString(16)
      }))
    }
    Pv.d(zv, {
      b: () => hv
    })
  },
  38209: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv
    });
    class hv {
      static _CheckLimit(vv, zv) {
        let Pv = hv._LogLimitOutputs[vv];
        return Pv ? Pv.current++ : (Pv = {
          limit: zv,
          current: 1
        }, hv._LogLimitOutputs[vv] = Pv), Pv.current <= Pv.limit
      }
      static _GenerateLimitMessage(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Pv = hv._LogLimitOutputs[vv];
        if (!Pv || !hv.MessageLimitReached) return;
        const Sv = this._Levels[zv];
        Pv.current === Pv.limit && hv[Sv.name](hv.MessageLimitReached.replace(/%LIMIT%/g, "" + Pv.limit).replace(/%TYPE%/g, Sv.name ?? ""))
      }
      static _AddLogEntry(vv) {
        hv._LogCache = vv + hv._LogCache, hv.OnNewCacheEntry && hv.OnNewCacheEntry(vv)
      }
      static _FormatMessage(vv) {
        const zv = vv => vv < 10 ? "0" + vv : "" + vv,
          Pv = new Date;
        return "[" + zv(Pv.getHours()) + ":" + zv(Pv.getMinutes()) + ":" + zv(Pv.getSeconds()) + "]: " + vv
      }
      static _LogDisabled(vv, zv) {}
      static _LogEnabled() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zv = arguments.length > 1 ? arguments[1] : void 0,
          Pv = arguments.length > 2 ? arguments[2] : void 0;
        const Sv = Array.isArray(zv) ? zv[0] : zv;
        if (void 0 !== Pv && !hv._CheckLimit(Sv, Pv)) return;
        const ev = hv._FormatMessage(Sv),
          gv = this._Levels[vv],
          pv = Array.isArray(zv) ? zv.slice(1) : [];
        gv.logFunc && gv.logFunc("BJS - " + ev, ...pv);
        const dv = `<div style='color:${gv.color}'>${ev}</div><br>`;
        hv._AddLogEntry(dv), hv._GenerateLimitMessage(Sv, vv)
      }
      static get LogCache() {
        return hv._LogCache
      }
      static ClearLogCache() {
        hv._LogCache = "", hv._LogLimitOutputs = {}, hv.errorsCount = 0
      }
      static set LogLevels(vv) {
        hv.Log = hv._LogDisabled, hv.Warn = hv._LogDisabled, hv.Error = hv._LogDisabled;
        const zv = [hv.MessageLogLevel, hv.WarningLogLevel, hv.ErrorLogLevel];
        for (const Pv of zv)
          if ((vv & Pv) === Pv) {
            const vv = this._Levels[Pv];
            hv[vv.name] = hv._LogEnabled.bind(hv, Pv)
          }
      }
    }
    hv.NoneLogLevel = 0, hv.MessageLogLevel = 1, hv.WarningLogLevel = 2, hv.ErrorLogLevel = 4, hv.AllLogLevel = 7, hv.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", hv._LogCache = "", hv._LogLimitOutputs = {}, hv._Levels = [{}, {
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
    }], hv.errorsCount = 0, hv.Log = hv._LogEnabled.bind(hv, hv.MessageLogLevel), hv.Warn = hv._LogEnabled.bind(hv, hv.WarningLogLevel), hv.Error = hv._LogEnabled.bind(hv, hv.ErrorLogLevel)
  },
  39387: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => hv.g
    });
    var hv = Pv(39395);
    (0, hv.d)()
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);