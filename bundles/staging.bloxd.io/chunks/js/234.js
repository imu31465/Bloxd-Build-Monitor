export const id = 234;
export const ids = [234, 241, 244];
export const modules = {
  40291: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => GB,
      f: () => vB
    });
    var TB = ZB(38718),
      JB = ZB(40085),
      oB = ZB(40269),
      GB = {};
    class vB {
      constructor(BB) {
        this.attachedToElement = !1, this.attached = {}, this.camera = BB, this.checkInputs = () => {}
      }
      add(BB) {
        const IB = BB.getSimpleName();
        this.attached[IB] ? TB.d.Warn("camera input of type " + IB + " already exists on camera") : (this.attached[IB] = BB, BB.camera = this.camera, BB.checkInputs && (this.checkInputs = this._addCheckInputs(BB.checkInputs.bind(BB))), this.attachedToElement && BB.attachControl(this.noPreventDefault))
      }
      remove(BB) {
        for (const IB in this.attached) {
          const ZB = this.attached[IB];
          if (ZB === BB) return ZB.detachControl(), ZB.camera = null, delete this.attached[IB], void this.rebuildInputCheck()
        }
      }
      removeByType(BB) {
        for (const IB in this.attached) {
          const ZB = this.attached[IB];
          ZB.getClassName() === BB && (ZB.detachControl(), ZB.camera = null, delete this.attached[IB], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(BB) {
        const IB = this.checkInputs;
        return () => {
          IB(), BB()
        }
      }
      attachInput(BB) {
        this.attachedToElement && BB.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          BB = !oB.c.ForceAttachControlToAlwaysPreventDefault && BB, this.attachedToElement = !0, this.noPreventDefault = BB;
          for (const IB in this.attached) this.attached[IB].attachControl(BB)
        }
      }
      detachElement() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const IB in this.attached) this.attached[IB].detachControl(), BB && (this.attached[IB].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const BB in this.attached) {
          const IB = this.attached[BB];
          IB.checkInputs && (this.checkInputs = this._addCheckInputs(IB.checkInputs.bind(IB)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(BB) {
        const IB = {};
        for (const ZB in this.attached) {
          const BB = this.attached[ZB],
            TB = JB.b.Serialize(BB);
          IB[BB.getClassName()] = TB
        }
        BB.inputsmgr = IB
      }
      parse(BB) {
        const IB = BB.inputsmgr;
        if (IB) {
          this.clear();
          for (const BB in IB) {
            const ZB = GB[BB];
            if (ZB) {
              const TB = IB[BB],
                oB = JB.b.Parse((() => new ZB), TB, null);
              this.add(oB)
            }
          }
        } else
          for (const ZB in this.attached) {
            const IB = GB[this.attached[ZB].getClassName()];
            if (IB) {
              const TB = JB.b.Parse((() => new IB), BB, null);
              this.remove(this.attached[ZB]), this.add(TB)
            }
          }
      }
    }
  },
  40297: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => TB.e
    });
    var TB = ZB(40305);
    (0, TB.h)()
  },
  40305: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => nB,
      h: () => zB
    });
    var TB = ZB(40061),
      JB = ZB(40065),
      oB = ZB(37120),
      GB = ZB(37311),
      vB = ZB(40310),
      kB = ZB(40272),
      cB = ZB(37170);
    let nB = (() => {
        var BB;
        let IB, ZB, kB = vB.b,
          cB = [],
          nB = [],
          hB = [],
          zB = [];
        return BB = class extends kB {
          constructor(BB, IB, ZB, JB) {
            super(BB, ZB, JB), this.groundColor = (0, TB.l)(this, cB, new GB.c(0, 0, 0)), this.direction = ((0, TB.l)(this, nB), (0, TB.l)(this, hB, void 0)), (0, TB.l)(this, zB), this.direction = IB || oB.s.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(BB) {
            return this.direction = oB.s.Normalize(BB.subtract(oB.s.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(BB, IB) {
            const ZB = oB.s.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", ZB.x, ZB.y, ZB.z, 0, IB), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), IB), this
          }
          transferToNodeMaterialEffect(BB, IB) {
            const ZB = oB.s.Normalize(this.direction);
            return BB.setFloat3(IB, ZB.x, ZB.y, ZB.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = oB.b.Identity()), this._worldMatrix
          }
          getTypeID() {
            return vB.b.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(BB, IB) {
            BB["HEMILIGHT" + IB] = !0
          }
        }, (() => {
          const oB = "function" === typeof Symbol && Symbol.metadata ? Object.create(kB[Symbol.metadata] ?? null) : void 0;
          IB = [(0, JB.l)()], ZB = [(0, JB.A)()], (0, TB.j)(null, null, IB, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "groundColor" in BB,
              get: BB => BB.groundColor,
              set: (BB, IB) => {
                BB.groundColor = IB
              }
            },
            metadata: oB
          }, cB, nB), (0, TB.j)(null, null, ZB, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: BB => "direction" in BB,
              get: BB => BB.direction,
              set: (BB, IB) => {
                BB.direction = IB
              }
            },
            metadata: oB
          }, hB, zB), oB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: oB
          })
        })(), BB
      })(),
      hB = !1;

    function zB() {
      hB || (hB = !0, kB.e.AddNodeConstructor("Light_Type_3", ((BB, IB) => () => new nB(BB, oB.s.Zero(), IB))), (0, cB.i)("BABYLON.HemisphericLight", nB))
    }
  },
  37304: (BB, IB, ZB) => {
    ZB.d(IB, {
      Color3: () => TB.c,
      e: () => TB.g
    });
    var TB = ZB(37311);
    (0, TB.j)()
  },
  37819: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => JB
    });
    var TB = ZB(37824);
    class JB {
      static GetPlanes(BB) {
        const IB = [];
        for (let ZB = 0; ZB < 6; ZB++) IB.push(new TB.c(0, 0, 0, 0));
        return JB.GetPlanesToRef(BB, IB), IB
      }
      static GetNearPlaneToRef(BB, IB) {
        const ZB = BB.m;
        IB.normal.x = ZB[3] + ZB[2], IB.normal.y = ZB[7] + ZB[6], IB.normal.z = ZB[11] + ZB[10], IB.d = ZB[15] + ZB[14], IB.normalize()
      }
      static GetFarPlaneToRef(BB, IB) {
        const ZB = BB.m;
        IB.normal.x = ZB[3] - ZB[2], IB.normal.y = ZB[7] - ZB[6], IB.normal.z = ZB[11] - ZB[10], IB.d = ZB[15] - ZB[14], IB.normalize()
      }
      static GetLeftPlaneToRef(BB, IB) {
        const ZB = BB.m;
        IB.normal.x = ZB[3] + ZB[0], IB.normal.y = ZB[7] + ZB[4], IB.normal.z = ZB[11] + ZB[8], IB.d = ZB[15] + ZB[12], IB.normalize()
      }
      static GetRightPlaneToRef(BB, IB) {
        const ZB = BB.m;
        IB.normal.x = ZB[3] - ZB[0], IB.normal.y = ZB[7] - ZB[4], IB.normal.z = ZB[11] - ZB[8], IB.d = ZB[15] - ZB[12], IB.normalize()
      }
      static GetTopPlaneToRef(BB, IB) {
        const ZB = BB.m;
        IB.normal.x = ZB[3] - ZB[1], IB.normal.y = ZB[7] - ZB[5], IB.normal.z = ZB[11] - ZB[9], IB.d = ZB[15] - ZB[13], IB.normalize()
      }
      static GetBottomPlaneToRef(BB, IB) {
        const ZB = BB.m;
        IB.normal.x = ZB[3] + ZB[1], IB.normal.y = ZB[7] + ZB[5], IB.normal.z = ZB[11] + ZB[9], IB.d = ZB[15] + ZB[13], IB.normalize()
      }
      static GetPlanesToRef(BB, IB) {
        JB.GetNearPlaneToRef(BB, IB[0]), JB.GetFarPlaneToRef(BB, IB[1]), JB.GetLeftPlaneToRef(BB, IB[2]), JB.GetRightPlaneToRef(BB, IB[3]), JB.GetTopPlaneToRef(BB, IB[4]), JB.GetBottomPlaneToRef(BB, IB[5])
      }
      static IsPointInFrustum(BB, IB) {
        for (let ZB = 0; ZB < 6; ZB++)
          if (IB[ZB].dotCoordinate(BB) < 0) return !1;
        return !0
      }
    }
  },
  37824: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => JB
    });
    var TB = ZB(37120);
    class JB {
      constructor(BB, IB, ZB, JB) {
        this.normal = new TB.s(BB, IB, ZB), this.d = JB
      }
      HTB() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new JB(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let IB = 0;
        return 0 !== BB && (IB = 1 / BB), this.normal.x *= IB, this.normal.y *= IB, this.normal.z *= IB, this.d *= IB, this
      }
      transform(BB) {
        const IB = JB._TmpMatrix;
        BB.invertToRef(IB);
        const ZB = IB.m,
          TB = this.normal.x,
          oB = this.normal.y,
          GB = this.normal.z,
          vB = this.d,
          kB = TB * ZB[0] + oB * ZB[1] + GB * ZB[2] + vB * ZB[3],
          cB = TB * ZB[4] + oB * ZB[5] + GB * ZB[6] + vB * ZB[7],
          nB = TB * ZB[8] + oB * ZB[9] + GB * ZB[10] + vB * ZB[11],
          hB = TB * ZB[12] + oB * ZB[13] + GB * ZB[14] + vB * ZB[15];
        return new JB(kB, cB, nB, hB)
      }
      dotCoordinate(BB) {
        return this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z + this.d
      }
      copyFromPoints(BB, IB, ZB) {
        const TB = IB.x - BB.x,
          JB = IB.y - BB.y,
          oB = IB.z - BB.z,
          GB = ZB.x - BB.x,
          vB = ZB.y - BB.y,
          kB = ZB.z - BB.z,
          cB = JB * kB - oB * vB,
          nB = oB * GB - TB * kB,
          hB = TB * vB - JB * GB,
          zB = Math.sqrt(cB * cB + nB * nB + hB * hB);
        let FB;
        return FB = 0 !== zB ? 1 / zB : 0, this.normal.x = cB * FB, this.normal.y = nB * FB, this.normal.z = hB * FB, this.d = -(this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z), this
      }
      isFrontFacingTo(BB, IB) {
        return TB.s.Dot(this.normal, BB) <= IB
      }
      signedDistanceTo(BB) {
        return TB.s.Dot(BB, this.normal) + this.d
      }
      static FromArray(BB) {
        return new JB(BB[0], BB[1], BB[2], BB[3])
      }
      static FromPoints(BB, IB, ZB) {
        const TB = new JB(0, 0, 0, 0);
        return TB.copyFromPoints(BB, IB, ZB), TB
      }
      static FromPositionAndNormal(BB, IB) {
        const ZB = new JB(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(BB, IB, ZB)
      }
      static FromPositionAndNormalToRef(BB, IB, ZB) {
        return ZB.normal.TY(IB), ZB.normal.normalize(), ZB.d = -BB.dot(ZB.normal), ZB
      }
      static SignedDistanceToPlaneFromPositionAndNormal(BB, IB, ZB) {
        const JB = -(IB.x * BB.x + IB.y * BB.y + IB.z * BB.z);
        return TB.s.Dot(ZB, IB) + JB
      }
    }
    JB._TmpMatrix = TB.b.Identity()
  },
  37113: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      Matrix: () => TB.b,
      Quaternion: () => TB.f,
      RegisterMathVector: () => TB.j,
      TmpVectors: () => TB.m,
      Vector2: () => TB.p,
      rN: () => TB.s,
      Vector4: () => TB.t
    });
    var TB = ZB(37120);
    (0, TB.j)()
  },
  38151: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => TB
    });
    class TB {
      constructor(BB, IB, ZB, TB) {
        this.x = BB, this.y = IB, this.width = ZB, this.height = TB
      }
      toGlobal(BB, IB) {
        return new TB(this.x * BB, this.y * IB, this.width * BB, this.height * IB)
      }
      toGlobalToRef(BB, IB, ZB) {
        return ZB.x = this.x * BB, ZB.y = this.y * IB, ZB.width = this.width * BB, ZB.height = this.height * IB, this
      }
      clone() {
        return new TB(this.x, this.y, this.width, this.height)
      }
    }
  },
  40446: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => cB
    });
    var TB = ZB(37120),
      JB = ZB(37311),
      oB = ZB(40448),
      GB = ZB(40463),
      vB = ZB(40480);

    function kB(BB) {
      let IB = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const ZB = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        oB = [],
        kB = BB.width || BB.size || 1,
        cB = BB.height || BB.size || 1,
        nB = BB.depth || BB.size || 1,
        hB = BB.wrap || !1;
      let zB = void 0 === BB.topBaseAt ? 1 : BB.topBaseAt,
        FB = void 0 === BB.bottomBaseAt ? 0 : BB.bottomBaseAt;
      zB = (zB + 4) % 4, FB = (FB + 4) % 4;
      let NB = [2, 0, 3, 1][zB],
        gB = [2, 0, 1, 3][FB],
        qB = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (hB) {
        IB = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], qB = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let BB = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          ZB = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const TB = [17, 18, 19, 16],
          JB = [22, 23, 20, 21];
        for (; NB > 0;) BB.unshift(BB.pop()), TB.unshift(TB.pop()), NB--;
        for (; gB > 0;) ZB.unshift(ZB.pop()), JB.unshift(JB.pop()), gB--;
        BB = BB.flat(), ZB = ZB.flat(), qB = qB.concat(BB).concat(ZB), IB.push(TB[0], TB[2], TB[3], TB[0], TB[1], TB[2]), IB.push(JB[0], JB[2], JB[3], JB[0], JB[1], JB[2])
      }
      const yB = [kB / 2, cB / 2, nB / 2],
        UB = qB.reduce(((BB, IB, ZB) => BB.concat(IB * yB[ZB % 3])), []),
        WB = 0 === BB.sideOrientation ? 0 : BB.sideOrientation || GB.c.DEFAULTSIDE,
        dB = BB.faceUV || new Array(6),
        CB = BB.faceColors,
        QB = [];
      for (let GB = 0; GB < 6; GB++) void 0 === dB[GB] && (dB[GB] = new TB.t(0, 0, 1, 1)), CB && void 0 === CB[GB] && (CB[GB] = new JB.g(1, 1, 1, 1));
      for (let TB = 0; TB < 6; TB++)
        if (oB.push(dB[TB].z, vB.e ? 1 - dB[TB].w : dB[TB].w), oB.push(dB[TB].x, vB.e ? 1 - dB[TB].w : dB[TB].w), oB.push(dB[TB].x, vB.e ? 1 - dB[TB].y : dB[TB].y), oB.push(dB[TB].z, vB.e ? 1 - dB[TB].y : dB[TB].y), CB)
          for (let BB = 0; BB < 4; BB++) QB.push(CB[TB].r, CB[TB].g, CB[TB].b, CB[TB].a);
      GB.c._ComputeSides(WB, UB, IB, ZB, oB, BB.frontUVs, BB.backUVs);
      const sB = new GB.c;
      if (sB.indices = IB, sB.positions = UB, sB.normals = ZB, sB.uvs = oB, CB) {
        const BB = WB === GB.c.DOUBLESIDE ? QB.concat(QB) : QB;
        sB.colors = BB
      }
      return sB
    }

    function cB(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const TB = new oB.c(BB, ZB);
      IB.sideOrientation = oB.c._GetDefaultSideOrientation(IB.sideOrientation), TB._originalBuilderSideOrientation = IB.sideOrientation;
      return kB(IB).applyToMesh(TB, IB.updatable), TB
    }
    let nB = !1;
    nB || (nB = !0, GB.c.CreateBox = kB, oB.c.CreateBox = function(BB, IB) {
      return cB(BB, {
        size: IB,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  40501: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => hB
    });
    var TB = ZB(37120),
      JB = ZB(40448),
      oB = ZB(40463),
      GB = ZB(40503),
      vB = ZB(40188),
      kB = ZB(38718);

    function cB(BB) {
      const IB = [],
        ZB = [],
        TB = BB.lines,
        JB = BB.colors,
        GB = [];
      let vB = 0;
      for (let oB = 0; oB < TB.length; oB++) {
        const BB = TB[oB];
        for (let TB = 0; TB < BB.length; TB++) {
          const {
            x: kB,
            y: cB,
            z: nB
          } = BB[TB];
          if (ZB.push(kB, cB, nB), JB) {
            const BB = JB[oB],
              {
                r: IB,
                g: ZB,
                b: vB,
                a: kB
              } = BB[TB];
            GB.push(IB, ZB, vB, kB)
          }
          TB > 0 && (IB.push(vB - 1), IB.push(vB)), vB++
        }
      }
      const kB = new oB.c;
      return kB.indices = IB, kB.positions = ZB, JB && (kB.colors = GB), kB
    }

    function nB(BB) {
      const IB = BB.dashSize || 3,
        ZB = BB.gapSize || 1,
        JB = BB.dashNb || 200,
        GB = BB.points,
        vB = [],
        kB = [],
        cB = TB.s.Zero();
      let nB, hB, zB, FB = 0,
        NB = 0;
      for (zB = 0; zB < GB.length - 1; zB++) GB[zB + 1].subtractToRef(GB[zB], cB), FB += cB.length();
      const gB = FB / JB,
        qB = IB * gB / (IB + ZB);
      for (zB = 0; zB < GB.length - 1; zB++) {
        GB[zB + 1].subtractToRef(GB[zB], cB), nB = Math.floor(cB.length() / gB), cB.normalize();
        for (let BB = 0; BB < nB; BB++) hB = gB * BB, vB.push(GB[zB].x + hB * cB.x, GB[zB].y + hB * cB.y, GB[zB].z + hB * cB.z), vB.push(GB[zB].x + (hB + qB) * cB.x, GB[zB].y + (hB + qB) * cB.y, GB[zB].z + (hB + qB) * cB.z), kB.push(NB, NB + 1), NB += 2
      }
      const yB = new oB.c;
      return yB.positions = vB, yB.indices = kB, yB
    }

    function hB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const TB = IB.instance,
        JB = IB.lines,
        oB = IB.colors;
      if (TB) {
        const BB = TB.getVerticesData(vB.i.PositionKind);
        let IB, ZB;
        oB && (IB = TB.getVerticesData(vB.i.ColorKind));
        let GB = 0,
          kB = 0;
        for (let TB = 0; TB < JB.length; TB++) {
          const vB = JB[TB];
          for (let JB = 0; JB < vB.length; JB++) BB[GB] = vB[JB].x, BB[GB + 1] = vB[JB].y, BB[GB + 2] = vB[JB].z, oB && IB && (ZB = oB[TB], IB[kB] = ZB[JB].r, IB[kB + 1] = ZB[JB].g, IB[kB + 2] = ZB[JB].b, IB[kB + 3] = ZB[JB].a, kB += 4), GB += 3
        }
        return TB.updateVerticesData(vB.i.PositionKind, BB, !1, !1), oB && IB && TB.updateVerticesData(vB.i.ColorKind, IB, !1, !1), TB.refreshBoundingInfo(), TB
      }
      const kB = !!oB,
        nB = new GB.e(BB, ZB, null, void 0, void 0, kB, IB.useVertexAlpha, IB.material);
      return cB(IB).applyToMesh(nB, IB.updatable), nB
    }

    function zB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const TB = IB.colors ? [IB.colors] : null;
      return hB(BB, {
        lines: [IB.points],
        updatable: IB.updatable,
        instance: IB.instance,
        colors: TB,
        useVertexAlpha: IB.useVertexAlpha,
        material: IB.material
      }, ZB)
    }

    function FB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const oB = IB.points,
        vB = IB.instance,
        cB = IB.gapSize || 1,
        hB = IB.dashSize || 3;
      if (vB) {
        const BB = BB => {
          const IB = TB.s.Zero(),
            ZB = BB.length / 6;
          let JB, GB, kB, cB, nB = 0,
            hB = 0;
          for (kB = 0; kB < oB.length - 1; kB++) oB[kB + 1].subtractToRef(oB[kB], IB), nB += IB.length();
          const zB = nB / ZB,
            FB = vB._creationDataStorage.dashSize,
            NB = FB * zB / (FB + vB._creationDataStorage.gapSize);
          for (kB = 0; kB < oB.length - 1; kB++)
            for (oB[kB + 1].subtractToRef(oB[kB], IB), JB = Math.floor(IB.length() / zB), IB.normalize(), cB = 0; cB < JB && hB < BB.length;) GB = zB * cB, BB[hB] = oB[kB].x + GB * IB.x, BB[hB + 1] = oB[kB].y + GB * IB.y, BB[hB + 2] = oB[kB].z + GB * IB.z, BB[hB + 3] = oB[kB].x + (GB + NB) * IB.x, BB[hB + 4] = oB[kB].y + (GB + NB) * IB.y, BB[hB + 5] = oB[kB].z + (GB + NB) * IB.z, hB += 6, cB++;
          for (; hB < BB.length;) BB[hB] = oB[kB].x, BB[hB + 1] = oB[kB].y, BB[hB + 2] = oB[kB].z, hB += 3
        };
        return (IB.dashNb || IB.dashSize || IB.gapSize || IB.useVertexAlpha || IB.material) && kB.d.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), vB.updateMeshPositions(BB, !1), vB
      }
      const zB = new GB.e(BB, ZB, null, void 0, void 0, void 0, IB.useVertexAlpha, IB.material);
      return nB(IB).applyToMesh(zB, IB.updatable), zB._creationDataStorage = new JB.f, zB._creationDataStorage.dashSize = hB, zB._creationDataStorage.gapSize = cB, zB
    }
    let NB = !1;
    NB || (NB = !0, oB.c.CreateLineSystem = cB, oB.c.CreateDashedLines = nB, JB.c.CreateLines = function(BB, IB) {
      return zB(BB, {
        points: IB,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, JB.c.CreateDashedLines = function(BB, IB, ZB, TB, JB) {
      return FB(BB, {
        points: IB,
        dashSize: ZB,
        gapSize: TB,
        dashNb: JB,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  40503: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => zB,
      f: () => gB
    });
    var TB, JB, oB = ZB(37311),
      GB = ZB(40188),
      vB = ZB(40448),
      kB = ZB(40510),
      cB = ZB(40339),
      nB = ZB(40514),
      hB = ZB(39931);
    class zB extends vB.c {
      _isShaderMaterial(BB) {
        return !!BB && "ShaderMaterial" === BB.getClassName()
      }
      constructor(BB) {
        let IB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          TB = arguments.length > 5 ? arguments[5] : void 0,
          JB = arguments.length > 6 ? arguments[6] : void 0,
          vB = arguments.length > 7 ? arguments[7] : void 0;
        super(BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, IB, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = TB, this.useVertexAlpha = JB, this.color = new oB.c(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, IB && (this.color = IB.color.clone(), this.alpha = IB.alpha, this.useVertexColor = IB.useVertexColor, this.useVertexAlpha = IB.useVertexAlpha), this.intersectionThreshold = .1;
        const kB = {
          attributes: [GB.i.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? kB.defines.push("#define VERTEXALPHA") : kB.needAlphaBlending = !1, this.useVertexColor ? (kB.defines.push("#define VERTEXCOLOR"), kB.attributes.push(GB.i.ColorKind)) : (kB.uniforms.push("color"), this._color4 = new oB.g), vB) this.material = vB;
        else {
          this.JR().PN().isWebGPU && !zB.ForceGLSL && (this._shaderLanguage = 1), kB.shaderLanguage = this._shaderLanguage, kB.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([ZB.e(349).then((() => ZB(42557))), ZB.e(355).then((() => ZB(42563)))]) : await Promise.all([ZB.e(331).then((() => ZB(42572))), ZB.e(337).then((() => ZB(42575)))])
          };
          const BB = new nB.n("colorShader", this.JR(), "color", kB, !1);
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
        const IB = this.material;
        if (IB === BB) return;
        const ZB = IB && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(BB), ZB && IB?.dispose()
      }
      _setInternalMaterial(BB) {
        this._setMaterial(BB), this.material && (this.material.fillMode = cB.e.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(BB) {}
      _bind(BB, IB) {
        if (!this._geometry) return this;
        const ZB = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(IB, ZB) : this._geometry._bind(IB, ZB, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: BB,
            g: IB,
            b: ZB
          } = this.color;
          this._color4.set(BB, IB, ZB, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(BB, IB, ZB) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const TB = this.JR().PN();
        return this._unIndexed ? TB.drawArraysType(cB.e.LineListDrawMode, BB.verticesStart, BB.verticesCount, ZB) : TB.drawElementsType(cB.e.LineListDrawMode, BB.indexStart, BB.indexCount, ZB), this
      }
      dispose(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || IB) && this.material?.dispose(!1, !1, !0), super.dispose(BB)
      }
      clone(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZB = arguments.length > 2 ? arguments[2] : void 0;
        if (IB && void 0 === IB._addToSceneRootNodes) {
          const ZB = IB;
          return ZB.source = this, new zB(BB, this.JR(), ZB.parent, ZB.source, ZB.doNotCloneChildren)
        }
        return new zB(BB, this.JR(), IB, this, ZB)
      }
      createInstance(BB) {
        const IB = new FB(BB, this);
        if (this.Zm) {
          IB.Zm = {};
          for (const BB in this.Zm) IB.Zm[BB] = this.Zm[BB]
        }
        return IB
      }
      serialize(BB) {
        super.serialize(BB), BB.color = this.color.HTB(), BB.alpha = this.alpha
      }
      static Parse(BB, IB) {
        const ZB = new zB(BB.name, IB);
        return ZB.color = oB.c.FromArray(BB.color), ZB.alpha = BB.alpha, ZB
      }
    }
    zB.ForceGLSL = !1;
    class FB extends kB.b {
      constructor(BB, IB) {
        super(BB, IB), this.intersectionThreshold = IB.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let NB = !1;

    function gB() {
      NB || (NB = !0, vB.c._LinesMeshParser = (BB, IB) => zB.Parse(BB, IB))
    }(TB = zB.prototype).enableEdgesRendering ?? (TB.enableEdgesRendering = (0, hB.j)("LinesMesh", "enableEdgesRendering")), (JB = FB.prototype).enableEdgesRendering ?? (JB.enableEdgesRendering = (0, hB.j)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  38714: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => oB
    });
    var TB = ZB(38718);
    const JB = (BB, IB, ZB) => BB ? BB.getClassName && "Mesh" === BB.getClassName() ? null : !BB.getClassName || "SubMesh" !== BB.getClassName() && "PhysicsBody" !== BB.getClassName() ? BB.clone ? BB.clone() : Array.isArray(BB) ? BB.slice() : ZB && "object" === typeof BB ? {
      ...BB
    } : null : BB.clone(IB) : null;
    class oB {
      static DeepCopy(BB, IB, ZB, oB) {
        let GB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const vB = function(BB) {
          const IB = [];
          do {
            const ZB = Object.getOwnPropertyNames(BB);
            for (const BB of ZB) - 1 === IB.indexOf(BB) && IB.push(BB)
          } while (BB = Object.getPrototypeOf(BB));
          return IB
        }(BB);
        for (const cB of vB) {
          if ("_" === cB[0] && (!oB || -1 === oB.indexOf(cB))) continue;
          if (cB.endsWith("Observable")) continue;
          if (ZB && -1 !== ZB.indexOf(cB)) continue;
          const vB = BB[cB],
            nB = typeof vB;
          if ("function" !== nB) try {
            if ("object" === nB)
              if (vB instanceof Uint8Array) IB[cB] = Uint8Array.from(vB);
              else if (vB instanceof Array) {
              if (IB[cB] = [], vB.length > 0)
                if ("object" == typeof vB[0])
                  for (let BB = 0; BB < vB.length; BB++) {
                    const ZB = JB(vB[BB], IB, GB); - 1 === IB[cB].indexOf(ZB) && IB[cB].push(ZB)
                  } else IB[cB] = vB.slice(0)
            } else IB[cB] = JB(vB, IB, GB);
            else IB[cB] = vB
          } catch (kB) {
            TB.d.Warn(kB.message)
          }
        }
      }
    }
  },
  37964: (BB, IB, ZB) => {
    function TB() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (BB => {
        const IB = 16 * Math.random() | 0;
        return ("x" === BB ? IB : 3 & IB | 8).toString(16)
      }))
    }
    ZB.d(IB, {
      d: () => TB
    })
  },
  38718: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => TB
    });
    class TB {
      static _CheckLimit(BB, IB) {
        let ZB = TB._LogLimitOutputs[BB];
        return ZB ? ZB.current++ : (ZB = {
          limit: IB,
          current: 1
        }, TB._LogLimitOutputs[BB] = ZB), ZB.current <= ZB.limit
      }
      static _GenerateLimitMessage(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const ZB = TB._LogLimitOutputs[BB];
        if (!ZB || !TB.MessageLimitReached) return;
        const JB = this._Levels[IB];
        ZB.current === ZB.limit && TB[JB.name](TB.MessageLimitReached.replace(/%LIMIT%/g, "" + ZB.limit).replace(/%TYPE%/g, JB.name ?? ""))
      }
      static _AddLogEntry(BB) {
        TB._LogCache = BB + TB._LogCache, TB.OnNewCacheEntry && TB.OnNewCacheEntry(BB)
      }
      static _FormatMessage(BB) {
        const IB = BB => BB < 10 ? "0" + BB : "" + BB,
          ZB = new Date;
        return "[" + IB(ZB.getHours()) + ":" + IB(ZB.getMinutes()) + ":" + IB(ZB.getSeconds()) + "]: " + BB
      }
      static _LogDisabled(BB, IB) {}
      static _LogEnabled() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          IB = arguments.length > 1 ? arguments[1] : void 0,
          ZB = arguments.length > 2 ? arguments[2] : void 0;
        const JB = Array.isArray(IB) ? IB[0] : IB;
        if (void 0 !== ZB && !TB._CheckLimit(JB, ZB)) return;
        const oB = TB._FormatMessage(JB),
          GB = this._Levels[BB],
          vB = Array.isArray(IB) ? IB.slice(1) : [];
        GB.logFunc && GB.logFunc("BJS - " + oB, ...vB);
        const kB = `<div style='color:${GB.color}'>${oB}</div><br>`;
        TB._AddLogEntry(kB), TB._GenerateLimitMessage(JB, BB)
      }
      static get LogCache() {
        return TB._LogCache
      }
      static ClearLogCache() {
        TB._LogCache = "", TB._LogLimitOutputs = {}, TB.errorsCount = 0
      }
      static set LogLevels(BB) {
        TB.Log = TB._LogDisabled, TB.Warn = TB._LogDisabled, TB.Error = TB._LogDisabled;
        const IB = [TB.MessageLogLevel, TB.WarningLogLevel, TB.ErrorLogLevel];
        for (const ZB of IB)
          if ((BB & ZB) === ZB) {
            const BB = this._Levels[ZB];
            TB[BB.name] = TB._LogEnabled.bind(TB, ZB)
          }
      }
    }
    TB.NoneLogLevel = 0, TB.MessageLogLevel = 1, TB.WarningLogLevel = 2, TB.ErrorLogLevel = 4, TB.AllLogLevel = 7, TB.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", TB._LogCache = "", TB._LogLimitOutputs = {}, TB._Levels = [{}, {
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
    }], TB.errorsCount = 0, TB.Log = TB._LogEnabled.bind(TB, TB.MessageLogLevel), TB.Warn = TB._LogEnabled.bind(TB, TB.WarningLogLevel), TB.Error = TB._LogEnabled.bind(TB, TB.ErrorLogLevel)
  },
  40143: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => TB.e
    });
    var TB = ZB(40148);
    (0, TB.b)()
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);