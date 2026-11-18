export const id = 212;
export const ids = [212, 217, 220];
export const modules = {
  38992: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => lB,
      g: () => JB
    });
    var VB = dB(37651),
      yB = dB(38772),
      pB = dB(38974),
      lB = {};
    class JB {
      constructor(BB) {
        this.attachedToElement = !1, this.attached = {}, this.camera = BB, this.checkInputs = () => {}
      }
      add(BB) {
        const TB = BB.getSimpleName();
        this.attached[TB] ? VB.b.Warn("camera input of type " + TB + " already exists on camera") : (this.attached[TB] = BB, BB.camera = this.camera, BB.checkInputs && (this.checkInputs = this._addCheckInputs(BB.checkInputs.bind(BB))), this.attachedToElement && BB.attachControl(this.noPreventDefault))
      }
      remove(BB) {
        for (const TB in this.attached) {
          const dB = this.attached[TB];
          if (dB === BB) return dB.detachControl(), dB.camera = null, delete this.attached[TB], void this.rebuildInputCheck()
        }
      }
      removeByType(BB) {
        for (const TB in this.attached) {
          const dB = this.attached[TB];
          dB.getClassName() === BB && (dB.detachControl(), dB.camera = null, delete this.attached[TB], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(BB) {
        const TB = this.checkInputs;
        return () => {
          TB(), BB()
        }
      }
      attachInput(BB) {
        this.attachedToElement && BB.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          BB = !pB.b.ForceAttachControlToAlwaysPreventDefault && BB, this.attachedToElement = !0, this.noPreventDefault = BB;
          for (const TB in this.attached) this.attached[TB].attachControl(BB)
        }
      }
      detachElement() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const TB in this.attached) this.attached[TB].detachControl(), BB && (this.attached[TB].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const BB in this.attached) {
          const TB = this.attached[BB];
          TB.checkInputs && (this.checkInputs = this._addCheckInputs(TB.checkInputs.bind(TB)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(BB) {
        const TB = {};
        for (const dB in this.attached) {
          const BB = this.attached[dB],
            VB = yB.c.Serialize(BB);
          TB[BB.getClassName()] = VB
        }
        BB.inputsmgr = TB
      }
      parse(BB) {
        const TB = BB.inputsmgr;
        if (TB) {
          this.clear();
          for (const BB in TB) {
            const dB = lB[BB];
            if (dB) {
              const VB = TB[BB],
                pB = yB.c.Parse((() => new dB), VB, null);
              this.add(pB)
            }
          }
        } else
          for (const dB in this.attached) {
            const TB = lB[this.attached[dB].getClassName()];
            if (TB) {
              const VB = yB.c.Parse((() => new TB), BB, null);
              this.remove(this.attached[dB]), this.add(VB)
            }
          }
      }
    }
  },
  39001: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => VB.d
    });
    var VB = dB(39007);
    (0, VB.h)()
  },
  39007: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => oB,
      h: () => LB
    });
    var VB = dB(38745),
      yB = dB(38750),
      pB = dB(36126),
      lB = dB(36183),
      JB = dB(39016),
      YB = dB(38980),
      gB = dB(36166);
    let oB = (() => {
        var BB;
        let TB, dB, YB = JB.c,
          gB = [],
          oB = [],
          kB = [],
          LB = [];
        return BB = class extends YB {
          constructor(BB, TB, dB, yB) {
            super(BB, dB, yB), this.groundColor = (0, VB.h)(this, gB, new lB.c(0, 0, 0)), this.direction = ((0, VB.h)(this, oB), (0, VB.h)(this, kB, void 0)), (0, VB.h)(this, LB), this.direction = TB || pB.p.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(BB) {
            return this.direction = pB.p.Normalize(BB.subtract(pB.p.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(BB, TB) {
            const dB = pB.p.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", dB.x, dB.y, dB.z, 0, TB), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), TB), this
          }
          transferToNodeMaterialEffect(BB, TB) {
            const dB = pB.p.Normalize(this.direction);
            return BB.setFloat3(TB, dB.x, dB.y, dB.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = pB.b.Identity()), this._worldMatrix
          }
          getTypeID() {
            return JB.c.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(BB, TB) {
            BB["HEMILIGHT" + TB] = !0
          }
        }, (() => {
          const pB = "function" === typeof Symbol && Symbol.metadata ? Object.create(YB[Symbol.metadata] ?? null) : void 0;
          TB = [(0, yB.s)()], dB = [(0, yB.T)()], (0, VB.g)(null, null, TB, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "groundColor" in BB,
              get: BB => BB.groundColor,
              set: (BB, TB) => {
                BB.groundColor = TB
              }
            },
            metadata: pB
          }, gB, oB), (0, VB.g)(null, null, dB, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: BB => "direction" in BB,
              get: BB => BB.direction,
              set: (BB, TB) => {
                BB.direction = TB
              }
            },
            metadata: pB
          }, kB, LB), pB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pB
          })
        })(), BB
      })(),
      kB = !1;

    function LB() {
      kB || (kB = !0, YB.e.AddNodeConstructor("Light_Type_3", ((BB, TB) => () => new oB(BB, pB.p.Zero(), TB))), (0, gB.g)("BABYLON.HemisphericLight", oB))
    }
  },
  36180: (BB, TB, dB) => {
    dB.d(TB, {
      Color3: () => VB.c,
      d: () => VB.d
    });
    var VB = dB(36183);
    (0, VB.f)()
  },
  36688: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => yB
    });
    var VB = dB(36690);
    class yB {
      static GetPlanes(BB) {
        const TB = [];
        for (let dB = 0; dB < 6; dB++) TB.push(new VB.d(0, 0, 0, 0));
        return yB.GetPlanesToRef(BB, TB), TB
      }
      static GetNearPlaneToRef(BB, TB) {
        const dB = BB.m;
        TB.normal.x = dB[3] + dB[2], TB.normal.y = dB[7] + dB[6], TB.normal.z = dB[11] + dB[10], TB.d = dB[15] + dB[14], TB.normalize()
      }
      static GetFarPlaneToRef(BB, TB) {
        const dB = BB.m;
        TB.normal.x = dB[3] - dB[2], TB.normal.y = dB[7] - dB[6], TB.normal.z = dB[11] - dB[10], TB.d = dB[15] - dB[14], TB.normalize()
      }
      static GetLeftPlaneToRef(BB, TB) {
        const dB = BB.m;
        TB.normal.x = dB[3] + dB[0], TB.normal.y = dB[7] + dB[4], TB.normal.z = dB[11] + dB[8], TB.d = dB[15] + dB[12], TB.normalize()
      }
      static GetRightPlaneToRef(BB, TB) {
        const dB = BB.m;
        TB.normal.x = dB[3] - dB[0], TB.normal.y = dB[7] - dB[4], TB.normal.z = dB[11] - dB[8], TB.d = dB[15] - dB[12], TB.normalize()
      }
      static GetTopPlaneToRef(BB, TB) {
        const dB = BB.m;
        TB.normal.x = dB[3] - dB[1], TB.normal.y = dB[7] - dB[5], TB.normal.z = dB[11] - dB[9], TB.d = dB[15] - dB[13], TB.normalize()
      }
      static GetBottomPlaneToRef(BB, TB) {
        const dB = BB.m;
        TB.normal.x = dB[3] + dB[1], TB.normal.y = dB[7] + dB[5], TB.normal.z = dB[11] + dB[9], TB.d = dB[15] + dB[13], TB.normalize()
      }
      static GetPlanesToRef(BB, TB) {
        yB.GetNearPlaneToRef(BB, TB[0]), yB.GetFarPlaneToRef(BB, TB[1]), yB.GetLeftPlaneToRef(BB, TB[2]), yB.GetRightPlaneToRef(BB, TB[3]), yB.GetTopPlaneToRef(BB, TB[4]), yB.GetBottomPlaneToRef(BB, TB[5])
      }
      static IsPointInFrustum(BB, TB) {
        for (let dB = 0; dB < 6; dB++)
          if (TB[dB].dotCoordinate(BB) < 0) return !1;
        return !0
      }
    }
  },
  36690: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => yB
    });
    var VB = dB(36126);
    class yB {
      constructor(BB, TB, dB, yB) {
        this.normal = new VB.p(BB, TB, dB), this.d = yB
      }
      FVB() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new yB(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let BB = this.normal.getHashCode();
        return BB = 397 * BB ^ this.d, BB
      }
      normalize() {
        const BB = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let TB = 0;
        return 0 !== BB && (TB = 1 / BB), this.normal.x *= TB, this.normal.y *= TB, this.normal.z *= TB, this.d *= TB, this
      }
      transform(BB) {
        const TB = yB._TmpMatrix;
        BB.invertToRef(TB);
        const dB = TB.m,
          VB = this.normal.x,
          pB = this.normal.y,
          lB = this.normal.z,
          JB = this.d,
          YB = VB * dB[0] + pB * dB[1] + lB * dB[2] + JB * dB[3],
          gB = VB * dB[4] + pB * dB[5] + lB * dB[6] + JB * dB[7],
          oB = VB * dB[8] + pB * dB[9] + lB * dB[10] + JB * dB[11],
          kB = VB * dB[12] + pB * dB[13] + lB * dB[14] + JB * dB[15];
        return new yB(YB, gB, oB, kB)
      }
      dotCoordinate(BB) {
        return this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z + this.d
      }
      copyFromPoints(BB, TB, dB) {
        const VB = TB.x - BB.x,
          yB = TB.y - BB.y,
          pB = TB.z - BB.z,
          lB = dB.x - BB.x,
          JB = dB.y - BB.y,
          YB = dB.z - BB.z,
          gB = yB * YB - pB * JB,
          oB = pB * lB - VB * YB,
          kB = VB * JB - yB * lB,
          LB = Math.sqrt(gB * gB + oB * oB + kB * kB);
        let OB;
        return OB = 0 !== LB ? 1 / LB : 0, this.normal.x = gB * OB, this.normal.y = oB * OB, this.normal.z = kB * OB, this.d = -(this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z), this
      }
      isFrontFacingTo(BB, TB) {
        return VB.p.Dot(this.normal, BB) <= TB
      }
      signedDistanceTo(BB) {
        return VB.p.Dot(BB, this.normal) + this.d
      }
      static FromArray(BB) {
        return new yB(BB[0], BB[1], BB[2], BB[3])
      }
      static FromPoints(BB, TB, dB) {
        const VB = new yB(0, 0, 0, 0);
        return VB.copyFromPoints(BB, TB, dB), VB
      }
      static FromPositionAndNormal(BB, TB) {
        const dB = new yB(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(BB, TB, dB)
      }
      static FromPositionAndNormalToRef(BB, TB, dB) {
        return dB.normal.bdB(TB), dB.normal.normalize(), dB.d = -BB.dot(dB.normal), dB
      }
      static SignedDistanceToPlaneFromPositionAndNormal(BB, TB, dB) {
        const yB = -(TB.x * BB.x + TB.y * BB.y + TB.z * BB.z);
        return VB.p.Dot(dB, TB) + yB
      }
    }
    yB._TmpMatrix = VB.b.Identity()
  },
  36119: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      Matrix: () => VB.b,
      Quaternion: () => VB.f,
      RegisterMathVector: () => VB.i,
      TmpVectors: () => VB.j,
      Vector2: () => VB.l,
      RD: () => VB.p,
      Vector4: () => VB.r
    });
    var VB = dB(36126);
    (0, VB.i)()
  },
  37029: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => VB
    });
    class VB {
      constructor(BB, TB, dB, VB) {
        this.x = BB, this.y = TB, this.width = dB, this.height = VB
      }
      toGlobal(BB, TB) {
        return new VB(this.x * BB, this.y * TB, this.width * BB, this.height * TB)
      }
      toGlobalToRef(BB, TB, dB) {
        return dB.x = this.x * BB, dB.y = this.y * TB, dB.width = this.width * BB, dB.height = this.height * TB, this
      }
      clone() {
        return new VB(this.x, this.y, this.width, this.height)
      }
    }
  },
  39135: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => gB
    });
    var VB = dB(36126),
      yB = dB(36183),
      pB = dB(39143),
      lB = dB(39156),
      JB = dB(39172);

    function YB(BB) {
      let TB = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const dB = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        pB = [],
        YB = BB.width || BB.size || 1,
        gB = BB.height || BB.size || 1,
        oB = BB.depth || BB.size || 1,
        kB = BB.wrap || !1;
      let LB = void 0 === BB.topBaseAt ? 1 : BB.topBaseAt,
        OB = void 0 === BB.bottomBaseAt ? 0 : BB.bottomBaseAt;
      LB = (LB + 4) % 4, OB = (OB + 4) % 4;
      let DB = [2, 0, 3, 1][LB],
        uB = [2, 0, 1, 3][OB],
        HB = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (kB) {
        TB = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], HB = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let BB = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          dB = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const VB = [17, 18, 19, 16],
          yB = [22, 23, 20, 21];
        for (; DB > 0;) BB.unshift(BB.pop()), VB.unshift(VB.pop()), DB--;
        for (; uB > 0;) dB.unshift(dB.pop()), yB.unshift(yB.pop()), uB--;
        BB = BB.flat(), dB = dB.flat(), HB = HB.concat(BB).concat(dB), TB.push(VB[0], VB[2], VB[3], VB[0], VB[1], VB[2]), TB.push(yB[0], yB[2], yB[3], yB[0], yB[1], yB[2])
      }
      const EB = [YB / 2, gB / 2, oB / 2],
        vB = HB.reduce(((BB, TB, dB) => BB.concat(TB * EB[dB % 3])), []),
        mB = 0 === BB.sideOrientation ? 0 : BB.sideOrientation || lB.d.DEFAULTSIDE,
        iB = BB.faceUV || new Array(6),
        NB = BB.faceColors,
        tB = [];
      for (let lB = 0; lB < 6; lB++) void 0 === iB[lB] && (iB[lB] = new VB.r(0, 0, 1, 1)), NB && void 0 === NB[lB] && (NB[lB] = new yB.d(1, 1, 1, 1));
      for (let VB = 0; VB < 6; VB++)
        if (pB.push(iB[VB].z, JB.c ? 1 - iB[VB].w : iB[VB].w), pB.push(iB[VB].x, JB.c ? 1 - iB[VB].w : iB[VB].w), pB.push(iB[VB].x, JB.c ? 1 - iB[VB].y : iB[VB].y), pB.push(iB[VB].z, JB.c ? 1 - iB[VB].y : iB[VB].y), NB)
          for (let BB = 0; BB < 4; BB++) tB.push(NB[VB].r, NB[VB].g, NB[VB].b, NB[VB].a);
      lB.d._ComputeSides(mB, vB, TB, dB, pB, BB.frontUVs, BB.backUVs);
      const fB = new lB.d;
      if (fB.indices = TB, fB.positions = vB, fB.normals = dB, fB.uvs = pB, NB) {
        const BB = mB === lB.d.DOUBLESIDE ? tB.concat(tB) : tB;
        fB.colors = BB
      }
      return fB
    }

    function gB(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const VB = new pB.e(BB, dB);
      TB.sideOrientation = pB.e._GetDefaultSideOrientation(TB.sideOrientation), VB._originalBuilderSideOrientation = TB.sideOrientation;
      return YB(TB).applyToMesh(VB, TB.updatable), VB
    }
    let oB = !1;
    oB || (oB = !0, lB.d.CreateBox = YB, pB.e.CreateBox = function(BB, TB) {
      return gB(BB, {
        size: TB,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  39196: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => kB
    });
    var VB = dB(36126),
      yB = dB(39143),
      pB = dB(39156),
      lB = dB(39205),
      JB = dB(38897),
      YB = dB(37651);

    function gB(BB) {
      const TB = [],
        dB = [],
        VB = BB.lines,
        yB = BB.colors,
        lB = [];
      let JB = 0;
      for (let pB = 0; pB < VB.length; pB++) {
        const BB = VB[pB];
        for (let VB = 0; VB < BB.length; VB++) {
          const {
            x: YB,
            y: gB,
            z: oB
          } = BB[VB];
          if (dB.push(YB, gB, oB), yB) {
            const BB = yB[pB],
              {
                r: TB,
                g: dB,
                b: JB,
                a: YB
              } = BB[VB];
            lB.push(TB, dB, JB, YB)
          }
          VB > 0 && (TB.push(JB - 1), TB.push(JB)), JB++
        }
      }
      const YB = new pB.d;
      return YB.indices = TB, YB.positions = dB, yB && (YB.colors = lB), YB
    }

    function oB(BB) {
      const TB = BB.dashSize || 3,
        dB = BB.gapSize || 1,
        yB = BB.dashNb || 200,
        lB = BB.points,
        JB = [],
        YB = [],
        gB = VB.p.Zero();
      let oB, kB, LB, OB = 0,
        DB = 0;
      for (LB = 0; LB < lB.length - 1; LB++) lB[LB + 1].subtractToRef(lB[LB], gB), OB += gB.length();
      const uB = OB / yB,
        HB = TB * uB / (TB + dB);
      for (LB = 0; LB < lB.length - 1; LB++) {
        lB[LB + 1].subtractToRef(lB[LB], gB), oB = Math.floor(gB.length() / uB), gB.normalize();
        for (let BB = 0; BB < oB; BB++) kB = uB * BB, JB.push(lB[LB].x + kB * gB.x, lB[LB].y + kB * gB.y, lB[LB].z + kB * gB.z), JB.push(lB[LB].x + (kB + HB) * gB.x, lB[LB].y + (kB + HB) * gB.y, lB[LB].z + (kB + HB) * gB.z), YB.push(DB, DB + 1), DB += 2
      }
      const EB = new pB.d;
      return EB.positions = JB, EB.indices = YB, EB
    }

    function kB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const VB = TB.instance,
        yB = TB.lines,
        pB = TB.colors;
      if (VB) {
        const BB = VB.getVerticesData(JB.m.PositionKind);
        let TB, dB;
        pB && (TB = VB.getVerticesData(JB.m.ColorKind));
        let lB = 0,
          YB = 0;
        for (let VB = 0; VB < yB.length; VB++) {
          const JB = yB[VB];
          for (let yB = 0; yB < JB.length; yB++) BB[lB] = JB[yB].x, BB[lB + 1] = JB[yB].y, BB[lB + 2] = JB[yB].z, pB && TB && (dB = pB[VB], TB[YB] = dB[yB].r, TB[YB + 1] = dB[yB].g, TB[YB + 2] = dB[yB].b, TB[YB + 3] = dB[yB].a, YB += 4), lB += 3
        }
        return VB.updateVerticesData(JB.m.PositionKind, BB, !1, !1), pB && TB && VB.updateVerticesData(JB.m.ColorKind, TB, !1, !1), VB.refreshBoundingInfo(), VB
      }
      const YB = !!pB,
        oB = new lB.b(BB, dB, null, void 0, void 0, YB, TB.useVertexAlpha, TB.material);
      return gB(TB).applyToMesh(oB, TB.updatable), oB
    }

    function LB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const VB = TB.colors ? [TB.colors] : null;
      return kB(BB, {
        lines: [TB.points],
        updatable: TB.updatable,
        instance: TB.instance,
        colors: VB,
        useVertexAlpha: TB.useVertexAlpha,
        material: TB.material
      }, dB)
    }

    function OB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const pB = TB.points,
        JB = TB.instance,
        gB = TB.gapSize || 1,
        kB = TB.dashSize || 3;
      if (JB) {
        const BB = BB => {
          const TB = VB.p.Zero(),
            dB = BB.length / 6;
          let yB, lB, YB, gB, oB = 0,
            kB = 0;
          for (YB = 0; YB < pB.length - 1; YB++) pB[YB + 1].subtractToRef(pB[YB], TB), oB += TB.length();
          const LB = oB / dB,
            OB = JB._creationDataStorage.dashSize,
            DB = OB * LB / (OB + JB._creationDataStorage.gapSize);
          for (YB = 0; YB < pB.length - 1; YB++)
            for (pB[YB + 1].subtractToRef(pB[YB], TB), yB = Math.floor(TB.length() / LB), TB.normalize(), gB = 0; gB < yB && kB < BB.length;) lB = LB * gB, BB[kB] = pB[YB].x + lB * TB.x, BB[kB + 1] = pB[YB].y + lB * TB.y, BB[kB + 2] = pB[YB].z + lB * TB.z, BB[kB + 3] = pB[YB].x + (lB + DB) * TB.x, BB[kB + 4] = pB[YB].y + (lB + DB) * TB.y, BB[kB + 5] = pB[YB].z + (lB + DB) * TB.z, kB += 6, gB++;
          for (; kB < BB.length;) BB[kB] = pB[YB].x, BB[kB + 1] = pB[YB].y, BB[kB + 2] = pB[YB].z, kB += 3
        };
        return (TB.dashNb || TB.dashSize || TB.gapSize || TB.useVertexAlpha || TB.material) && YB.b.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), JB.updateMeshPositions(BB, !1), JB
      }
      const LB = new lB.b(BB, dB, null, void 0, void 0, void 0, TB.useVertexAlpha, TB.material);
      return oB(TB).applyToMesh(LB, TB.updatable), LB._creationDataStorage = new yB.j, LB._creationDataStorage.dashSize = kB, LB._creationDataStorage.gapSize = gB, LB
    }
    let DB = !1;
    DB || (DB = !0, pB.d.CreateLineSystem = gB, pB.d.CreateDashedLines = oB, yB.e.CreateLines = function(BB, TB) {
      return LB(BB, {
        points: TB,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, yB.e.CreateDashedLines = function(BB, TB, dB, VB, yB) {
      return OB(BB, {
        points: TB,
        dashSize: dB,
        gapSize: VB,
        dashNb: yB,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  39205: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => LB,
      d: () => uB
    });
    var VB, yB, pB = dB(36183),
      lB = dB(38897),
      JB = dB(39143),
      YB = dB(39214),
      gB = dB(39040),
      oB = dB(39216),
      kB = dB(38629);
    class LB extends JB.e {
      _isShaderMaterial(BB) {
        return !!BB && "ShaderMaterial" === BB.getClassName()
      }
      constructor(BB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          VB = arguments.length > 5 ? arguments[5] : void 0,
          yB = arguments.length > 6 ? arguments[6] : void 0,
          JB = arguments.length > 7 ? arguments[7] : void 0;
        super(BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, TB, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = VB, this.useVertexAlpha = yB, this.color = new pB.c(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, TB && (this.color = TB.color.clone(), this.alpha = TB.alpha, this.useVertexColor = TB.useVertexColor, this.useVertexAlpha = TB.useVertexAlpha), this.intersectionThreshold = .1;
        const YB = {
          attributes: [lB.m.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? YB.defines.push("#define VERTEXALPHA") : YB.needAlphaBlending = !1, this.useVertexColor ? (YB.defines.push("#define VERTEXCOLOR"), YB.attributes.push(lB.m.ColorKind)) : (YB.uniforms.push("color"), this._color4 = new pB.d), JB) this.material = JB;
        else {
          this.jU().PD().isWebGPU && !LB.ForceGLSL && (this._shaderLanguage = 1), YB.shaderLanguage = this._shaderLanguage, YB.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([dB.e(324).then((() => dB(41239))), dB.e(330).then((() => dB(41248)))]) : await Promise.all([dB.e(306).then((() => dB(41252))), dB.e(312).then((() => dB(41260)))])
          };
          const BB = new oB.l("colorShader", this.jU(), "color", YB, !1);
          BB.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(BB)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(BB) {
        const TB = this.material;
        if (TB === BB) return;
        const dB = TB && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(BB), dB && TB?.dispose()
      }
      _setInternalMaterial(BB) {
        this._setMaterial(BB), this.material && (this.material.fillMode = gB.b.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(BB) {}
      _bind(BB, TB) {
        if (!this._geometry) return this;
        const dB = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(TB, dB) : this._geometry._bind(TB, dB, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: BB,
            g: TB,
            b: dB
          } = this.color;
          this._color4.set(BB, TB, dB, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(BB, TB, dB) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const VB = this.jU().PD();
        return this._unIndexed ? VB.drawArraysType(gB.b.LineListDrawMode, BB.verticesStart, BB.verticesCount, dB) : VB.drawElementsType(gB.b.LineListDrawMode, BB.indexStart, BB.indexCount, dB), this
      }
      dispose(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || TB) && this.material?.dispose(!1, !1, !0), super.dispose(BB)
      }
      clone(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          dB = arguments.length > 2 ? arguments[2] : void 0;
        if (TB && void 0 === TB._addToSceneRootNodes) {
          const dB = TB;
          return dB.source = this, new LB(BB, this.jU(), dB.parent, dB.source, dB.doNotCloneChildren)
        }
        return new LB(BB, this.jU(), TB, this, dB)
      }
      createInstance(BB) {
        const TB = new OB(BB, this);
        if (this.sK) {
          TB.sK = {};
          for (const BB in this.sK) TB.sK[BB] = this.sK[BB]
        }
        return TB
      }
      serialize(BB) {
        super.serialize(BB), BB.color = this.color.FVB(), BB.alpha = this.alpha
      }
      static Parse(BB, TB) {
        const dB = new LB(BB.name, TB);
        return dB.color = pB.c.FromArray(BB.color), dB.alpha = BB.alpha, dB
      }
    }
    LB.ForceGLSL = !1;
    class OB extends YB.d {
      constructor(BB, TB) {
        super(BB, TB), this.intersectionThreshold = TB.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let DB = !1;

    function uB() {
      DB || (DB = !0, JB.e._LinesMeshParser = (BB, TB) => LB.Parse(BB, TB))
    }(VB = LB.prototype).enableEdgesRendering ?? (VB.enableEdgesRendering = (0, kB.h)("LinesMesh", "enableEdgesRendering")), (yB = OB.prototype).enableEdgesRendering ?? (yB.enableEdgesRendering = (0, kB.h)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  37646: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => pB
    });
    var VB = dB(37651);
    const yB = (BB, TB, dB) => BB ? BB.getClassName && "Mesh" === BB.getClassName() ? null : !BB.getClassName || "SubMesh" !== BB.getClassName() && "PhysicsBody" !== BB.getClassName() ? BB.clone ? BB.clone() : Array.isArray(BB) ? BB.slice() : dB && "object" === typeof BB ? {
      ...BB
    } : null : BB.clone(TB) : null;
    class pB {
      static DeepCopy(BB, TB, dB, pB) {
        let lB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const JB = function(BB) {
          const TB = [];
          do {
            const dB = Object.getOwnPropertyNames(BB);
            for (const BB of dB) - 1 === TB.indexOf(BB) && TB.push(BB)
          } while (BB = Object.getPrototypeOf(BB));
          return TB
        }(BB);
        for (const gB of JB) {
          if ("_" === gB[0] && (!pB || -1 === pB.indexOf(gB))) continue;
          if (gB.endsWith("Observable")) continue;
          if (dB && -1 !== dB.indexOf(gB)) continue;
          const JB = BB[gB],
            oB = typeof JB;
          if ("function" !== oB) try {
            if ("object" === oB)
              if (JB instanceof Uint8Array) TB[gB] = Uint8Array.from(JB);
              else if (JB instanceof Array) {
              if (TB[gB] = [], JB.length > 0)
                if ("object" == typeof JB[0])
                  for (let BB = 0; BB < JB.length; BB++) {
                    const dB = yB(JB[BB], TB, lB); - 1 === TB[gB].indexOf(dB) && TB[gB].push(dB)
                  } else TB[gB] = JB.slice(0)
            } else TB[gB] = yB(JB, TB, lB);
            else TB[gB] = JB
          } catch (YB) {
            VB.b.Warn(YB.message)
          }
        }
      }
    }
  },
  36822: (BB, TB, dB) => {
    function VB() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (BB => {
        const TB = 16 * Math.random() | 0;
        return ("x" === BB ? TB : 3 & TB | 8).toString(16)
      }))
    }
    dB.d(TB, {
      c: () => VB
    })
  },
  37651: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => VB
    });
    class VB {
      static _CheckLimit(BB, TB) {
        let dB = VB._LogLimitOutputs[BB];
        return dB ? dB.current++ : (dB = {
          limit: TB,
          current: 1
        }, VB._LogLimitOutputs[BB] = dB), dB.current <= dB.limit
      }
      static _GenerateLimitMessage(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const dB = VB._LogLimitOutputs[BB];
        if (!dB || !VB.MessageLimitReached) return;
        const yB = this._Levels[TB];
        dB.current === dB.limit && VB[yB.name](VB.MessageLimitReached.replace(/%LIMIT%/g, "" + dB.limit).replace(/%TYPE%/g, yB.name ?? ""))
      }
      static _AddLogEntry(BB) {
        VB._LogCache = BB + VB._LogCache, VB.OnNewCacheEntry && VB.OnNewCacheEntry(BB)
      }
      static _FormatMessage(BB) {
        const TB = BB => BB < 10 ? "0" + BB : "" + BB,
          dB = new Date;
        return "[" + TB(dB.getHours()) + ":" + TB(dB.getMinutes()) + ":" + TB(dB.getSeconds()) + "]: " + BB
      }
      static _LogDisabled(BB, TB) {}
      static _LogEnabled() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          TB = arguments.length > 1 ? arguments[1] : void 0,
          dB = arguments.length > 2 ? arguments[2] : void 0;
        const yB = Array.isArray(TB) ? TB[0] : TB;
        if (void 0 !== dB && !VB._CheckLimit(yB, dB)) return;
        const pB = VB._FormatMessage(yB),
          lB = this._Levels[BB],
          JB = Array.isArray(TB) ? TB.slice(1) : [];
        lB.logFunc && lB.logFunc("BJS - " + pB, ...JB);
        const YB = `<div style='color:${lB.color}'>${pB}</div><br>`;
        VB._AddLogEntry(YB), VB._GenerateLimitMessage(yB, BB)
      }
      static get LogCache() {
        return VB._LogCache
      }
      static ClearLogCache() {
        VB._LogCache = "", VB._LogLimitOutputs = {}, VB.errorsCount = 0
      }
      static set LogLevels(BB) {
        VB.Log = VB._LogDisabled, VB.Warn = VB._LogDisabled, VB.Error = VB._LogDisabled;
        const TB = [VB.MessageLogLevel, VB.WarningLogLevel, VB.ErrorLogLevel];
        for (const dB of TB)
          if ((BB & dB) === dB) {
            const BB = this._Levels[dB];
            VB[BB.name] = VB._LogEnabled.bind(VB, dB)
          }
      }
    }
    VB.NoneLogLevel = 0, VB.MessageLogLevel = 1, VB.WarningLogLevel = 2, VB.ErrorLogLevel = 4, VB.AllLogLevel = 7, VB.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", VB._LogCache = "", VB._LogLimitOutputs = {}, VB._Levels = [{}, {
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
    }], VB.errorsCount = 0, VB.Log = VB._LogEnabled.bind(VB, VB.MessageLogLevel), VB.Warn = VB._LogEnabled.bind(VB, VB.WarningLogLevel), VB.Error = VB._LogEnabled.bind(VB, VB.ErrorLogLevel)
  },
  38840: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => VB.g
    });
    var VB = dB(38843);
    (0, VB.c)()
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);