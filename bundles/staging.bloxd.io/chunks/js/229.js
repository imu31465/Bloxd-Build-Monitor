export const id = 229;
export const ids = [229, 235, 238];
export const modules = {
  40278: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => xS,
      f: () => NS
    });
    var tS = gS(38687),
      bS = gS(40068),
      XS = gS(40248),
      xS = {};
    class NS {
      constructor(SS) {
        this.attachedToElement = !1, this.attached = {}, this.camera = SS, this.checkInputs = () => {}
      }
      add(SS) {
        const HS = SS.getSimpleName();
        this.attached[HS] ? tS.b.Warn("camera input of type " + HS + " already exists on camera") : (this.attached[HS] = SS, SS.camera = this.camera, SS.checkInputs && (this.checkInputs = this._addCheckInputs(SS.checkInputs.bind(SS))), this.attachedToElement && SS.attachControl(this.noPreventDefault))
      }
      remove(SS) {
        for (const HS in this.attached) {
          const gS = this.attached[HS];
          if (gS === SS) return gS.detachControl(), gS.camera = null, delete this.attached[HS], void this.rebuildInputCheck()
        }
      }
      removeByType(SS) {
        for (const HS in this.attached) {
          const gS = this.attached[HS];
          gS.getClassName() === SS && (gS.detachControl(), gS.camera = null, delete this.attached[HS], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(SS) {
        const HS = this.checkInputs;
        return () => {
          HS(), SS()
        }
      }
      attachInput(SS) {
        this.attachedToElement && SS.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          SS = !XS.b.ForceAttachControlToAlwaysPreventDefault && SS, this.attachedToElement = !0, this.noPreventDefault = SS;
          for (const HS in this.attached) this.attached[HS].attachControl(SS)
        }
      }
      detachElement() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const HS in this.attached) this.attached[HS].detachControl(), SS && (this.attached[HS].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const SS in this.attached) {
          const HS = this.attached[SS];
          HS.checkInputs && (this.checkInputs = this._addCheckInputs(HS.checkInputs.bind(HS)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(SS) {
        const HS = {};
        for (const gS in this.attached) {
          const SS = this.attached[gS],
            tS = bS.b.Serialize(SS);
          HS[SS.getClassName()] = tS
        }
        SS.inputsmgr = HS
      }
      parse(SS) {
        const HS = SS.inputsmgr;
        if (HS) {
          this.clear();
          for (const SS in HS) {
            const gS = xS[SS];
            if (gS) {
              const tS = HS[SS],
                XS = bS.b.Parse((() => new gS), tS, null);
              this.add(XS)
            }
          }
        } else
          for (const gS in this.attached) {
            const HS = xS[this.attached[gS].getClassName()];
            if (HS) {
              const tS = bS.b.Parse((() => new HS), SS, null);
              this.remove(this.attached[gS]), this.add(tS)
            }
          }
      }
    }
  },
  40286: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => tS.d
    });
    var tS = gS(40295);
    (0, tS.h)()
  },
  40295: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => IS,
      h: () => kS
    });
    var tS = gS(40041),
      bS = gS(40048),
      XS = gS(37117),
      xS = gS(37300),
      NS = gS(40304),
      qS = gS(40256),
      uS = gS(37164);
    let IS = (() => {
        var SS;
        let HS, gS, qS = NS.e,
          uS = [],
          IS = [],
          fS = [],
          kS = [];
        return SS = class extends qS {
          constructor(SS, HS, gS, bS) {
            super(SS, gS, bS), this.groundColor = (0, tS.k)(this, uS, new xS.b(0, 0, 0)), this.direction = ((0, tS.k)(this, IS), (0, tS.k)(this, fS, void 0)), (0, tS.k)(this, kS), this.direction = HS || XS.n.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(SS) {
            return this.direction = XS.n.Normalize(SS.subtract(XS.n.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(SS, HS) {
            const gS = XS.n.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", gS.x, gS.y, gS.z, 0, HS), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), HS), this
          }
          transferToNodeMaterialEffect(SS, HS) {
            const gS = XS.n.Normalize(this.direction);
            return SS.setFloat3(HS, gS.x, gS.y, gS.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = XS.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return NS.e.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(SS, HS) {
            SS["HEMILIGHT" + HS] = !0
          }
        }, (() => {
          const XS = "function" === typeof Symbol && Symbol.metadata ? Object.create(qS[Symbol.metadata] ?? null) : void 0;
          HS = [(0, bS.k)()], gS = [(0, bS.I)()], (0, tS.j)(null, null, HS, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: SS => "groundColor" in SS,
              get: SS => SS.groundColor,
              set: (SS, HS) => {
                SS.groundColor = HS
              }
            },
            metadata: XS
          }, uS, IS), (0, tS.j)(null, null, gS, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: SS => "direction" in SS,
              get: SS => SS.direction,
              set: (SS, HS) => {
                SS.direction = HS
              }
            },
            metadata: XS
          }, fS, kS), XS && Object.defineProperty(SS, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: XS
          })
        })(), SS
      })(),
      fS = !1;

    function kS() {
      fS || (fS = !0, qS.e.AddNodeConstructor("Light_Type_3", ((SS, HS) => () => new IS(SS, XS.n.Zero(), HS))), (0, uS.f)("BABYLON.HemisphericLight", IS))
    }
  },
  37294: (SS, HS, gS) => {
    gS.d(HS, {
      Color3: () => tS.b,
      b: () => tS.c
    });
    var tS = gS(37300);
    (0, tS.e)()
  },
  37783: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => bS
    });
    var tS = gS(37791);
    class bS {
      static GetPlanes(SS) {
        const HS = [];
        for (let gS = 0; gS < 6; gS++) HS.push(new tS.e(0, 0, 0, 0));
        return bS.GetPlanesToRef(SS, HS), HS
      }
      static GetNearPlaneToRef(SS, HS) {
        const gS = SS.m;
        HS.normal.x = gS[3] + gS[2], HS.normal.y = gS[7] + gS[6], HS.normal.z = gS[11] + gS[10], HS.d = gS[15] + gS[14], HS.normalize()
      }
      static GetFarPlaneToRef(SS, HS) {
        const gS = SS.m;
        HS.normal.x = gS[3] - gS[2], HS.normal.y = gS[7] - gS[6], HS.normal.z = gS[11] - gS[10], HS.d = gS[15] - gS[14], HS.normalize()
      }
      static GetLeftPlaneToRef(SS, HS) {
        const gS = SS.m;
        HS.normal.x = gS[3] + gS[0], HS.normal.y = gS[7] + gS[4], HS.normal.z = gS[11] + gS[8], HS.d = gS[15] + gS[12], HS.normalize()
      }
      static GetRightPlaneToRef(SS, HS) {
        const gS = SS.m;
        HS.normal.x = gS[3] - gS[0], HS.normal.y = gS[7] - gS[4], HS.normal.z = gS[11] - gS[8], HS.d = gS[15] - gS[12], HS.normalize()
      }
      static GetTopPlaneToRef(SS, HS) {
        const gS = SS.m;
        HS.normal.x = gS[3] - gS[1], HS.normal.y = gS[7] - gS[5], HS.normal.z = gS[11] - gS[9], HS.d = gS[15] - gS[13], HS.normalize()
      }
      static GetBottomPlaneToRef(SS, HS) {
        const gS = SS.m;
        HS.normal.x = gS[3] + gS[1], HS.normal.y = gS[7] + gS[5], HS.normal.z = gS[11] + gS[9], HS.d = gS[15] + gS[13], HS.normalize()
      }
      static GetPlanesToRef(SS, HS) {
        bS.GetNearPlaneToRef(SS, HS[0]), bS.GetFarPlaneToRef(SS, HS[1]), bS.GetLeftPlaneToRef(SS, HS[2]), bS.GetRightPlaneToRef(SS, HS[3]), bS.GetTopPlaneToRef(SS, HS[4]), bS.GetBottomPlaneToRef(SS, HS[5])
      }
      static IsPointInFrustum(SS, HS) {
        for (let gS = 0; gS < 6; gS++)
          if (HS[gS].dotCoordinate(SS) < 0) return !1;
        return !0
      }
    }
  },
  37791: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => bS
    });
    var tS = gS(37117);
    class bS {
      constructor(SS, HS, gS, bS) {
        this.normal = new tS.n(SS, HS, gS), this.d = bS
      }
      lgS() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new bS(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let SS = this.normal.getHashCode();
        return SS = 397 * SS ^ this.d, SS
      }
      normalize() {
        const SS = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let HS = 0;
        return 0 !== SS && (HS = 1 / SS), this.normal.x *= HS, this.normal.y *= HS, this.normal.z *= HS, this.d *= HS, this
      }
      transform(SS) {
        const HS = bS._TmpMatrix;
        SS.invertToRef(HS);
        const gS = HS.m,
          tS = this.normal.x,
          XS = this.normal.y,
          xS = this.normal.z,
          NS = this.d,
          qS = tS * gS[0] + XS * gS[1] + xS * gS[2] + NS * gS[3],
          uS = tS * gS[4] + XS * gS[5] + xS * gS[6] + NS * gS[7],
          IS = tS * gS[8] + XS * gS[9] + xS * gS[10] + NS * gS[11],
          fS = tS * gS[12] + XS * gS[13] + xS * gS[14] + NS * gS[15];
        return new bS(qS, uS, IS, fS)
      }
      dotCoordinate(SS) {
        return this.normal.x * SS.x + this.normal.y * SS.y + this.normal.z * SS.z + this.d
      }
      copyFromPoints(SS, HS, gS) {
        const tS = HS.x - SS.x,
          bS = HS.y - SS.y,
          XS = HS.z - SS.z,
          xS = gS.x - SS.x,
          NS = gS.y - SS.y,
          qS = gS.z - SS.z,
          uS = bS * qS - XS * NS,
          IS = XS * xS - tS * qS,
          fS = tS * NS - bS * xS,
          kS = Math.sqrt(uS * uS + IS * IS + fS * fS);
        let aS;
        return aS = 0 !== kS ? 1 / kS : 0, this.normal.x = uS * aS, this.normal.y = IS * aS, this.normal.z = fS * aS, this.d = -(this.normal.x * SS.x + this.normal.y * SS.y + this.normal.z * SS.z), this
      }
      isFrontFacingTo(SS, HS) {
        return tS.n.Dot(this.normal, SS) <= HS
      }
      signedDistanceTo(SS) {
        return tS.n.Dot(SS, this.normal) + this.d
      }
      static FromArray(SS) {
        return new bS(SS[0], SS[1], SS[2], SS[3])
      }
      static FromPoints(SS, HS, gS) {
        const tS = new bS(0, 0, 0, 0);
        return tS.copyFromPoints(SS, HS, gS), tS
      }
      static FromPositionAndNormal(SS, HS) {
        const gS = new bS(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(SS, HS, gS)
      }
      static FromPositionAndNormalToRef(SS, HS, gS) {
        return gS.normal.dJ(HS), gS.normal.normalize(), gS.d = -SS.dot(gS.normal), gS
      }
      static SignedDistanceToPlaneFromPositionAndNormal(SS, HS, gS) {
        const bS = -(HS.x * SS.x + HS.y * SS.y + HS.z * SS.z);
        return tS.n.Dot(gS, HS) + bS
      }
    }
    bS._TmpMatrix = tS.e.Identity()
  },
  37113: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      Matrix: () => tS.e,
      Quaternion: () => tS.i,
      RegisterMathVector: () => tS.k,
      TmpVectors: () => tS.l,
      Vector2: () => tS.m,
      VK: () => tS.n,
      Vector4: () => tS.r
    });
    var tS = gS(37117);
    (0, tS.k)()
  },
  38134: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => tS
    });
    class tS {
      constructor(SS, HS, gS, tS) {
        this.x = SS, this.y = HS, this.width = gS, this.height = tS
      }
      toGlobal(SS, HS) {
        return new tS(this.x * SS, this.y * HS, this.width * SS, this.height * HS)
      }
      toGlobalToRef(SS, HS, gS) {
        return gS.x = this.x * SS, gS.y = this.y * HS, gS.width = this.width * SS, gS.height = this.height * HS, this
      }
      clone() {
        return new tS(this.x, this.y, this.width, this.height)
      }
    }
  },
  40432: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => uS
    });
    var tS = gS(37117),
      bS = gS(37300),
      XS = gS(40439),
      xS = gS(40449),
      NS = gS(40465);

    function qS(SS) {
      let HS = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const gS = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        XS = [],
        qS = SS.width || SS.size || 1,
        uS = SS.height || SS.size || 1,
        IS = SS.depth || SS.size || 1,
        fS = SS.wrap || !1;
      let kS = void 0 === SS.topBaseAt ? 1 : SS.topBaseAt,
        aS = void 0 === SS.bottomBaseAt ? 0 : SS.bottomBaseAt;
      kS = (kS + 4) % 4, aS = (aS + 4) % 4;
      let KS = [2, 0, 3, 1][kS],
        jS = [2, 0, 1, 3][aS],
        GS = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (fS) {
        HS = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], GS = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let SS = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          gS = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const tS = [17, 18, 19, 16],
          bS = [22, 23, 20, 21];
        for (; KS > 0;) SS.unshift(SS.pop()), tS.unshift(tS.pop()), KS--;
        for (; jS > 0;) gS.unshift(gS.pop()), bS.unshift(bS.pop()), jS--;
        SS = SS.flat(), gS = gS.flat(), GS = GS.concat(SS).concat(gS), HS.push(tS[0], tS[2], tS[3], tS[0], tS[1], tS[2]), HS.push(bS[0], bS[2], bS[3], bS[0], bS[1], bS[2])
      }
      const CS = [qS / 2, uS / 2, IS / 2],
        nS = GS.reduce(((SS, HS, gS) => SS.concat(HS * CS[gS % 3])), []),
        PS = 0 === SS.sideOrientation ? 0 : SS.sideOrientation || xS.e.DEFAULTSIDE,
        QS = SS.faceUV || new Array(6),
        DS = SS.faceColors,
        wS = [];
      for (let xS = 0; xS < 6; xS++) void 0 === QS[xS] && (QS[xS] = new tS.r(0, 0, 1, 1)), DS && void 0 === DS[xS] && (DS[xS] = new bS.c(1, 1, 1, 1));
      for (let tS = 0; tS < 6; tS++)
        if (XS.push(QS[tS].z, NS.c ? 1 - QS[tS].w : QS[tS].w), XS.push(QS[tS].x, NS.c ? 1 - QS[tS].w : QS[tS].w), XS.push(QS[tS].x, NS.c ? 1 - QS[tS].y : QS[tS].y), XS.push(QS[tS].z, NS.c ? 1 - QS[tS].y : QS[tS].y), DS)
          for (let SS = 0; SS < 4; SS++) wS.push(DS[tS].r, DS[tS].g, DS[tS].b, DS[tS].a);
      xS.e._ComputeSides(PS, nS, HS, gS, XS, SS.frontUVs, SS.backUVs);
      const hS = new xS.e;
      if (hS.indices = HS, hS.positions = nS, hS.normals = gS, hS.uvs = XS, DS) {
        const SS = PS === xS.e.DOUBLESIDE ? wS.concat(wS) : wS;
        hS.colors = SS
      }
      return hS
    }

    function uS(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const tS = new XS.e(SS, gS);
      HS.sideOrientation = XS.e._GetDefaultSideOrientation(HS.sideOrientation), tS._originalBuilderSideOrientation = HS.sideOrientation;
      return qS(HS).applyToMesh(tS, HS.updatable), tS
    }
    let IS = !1;
    IS || (IS = !0, xS.e.CreateBox = qS, XS.e.CreateBox = function(SS, HS) {
      return uS(SS, {
        size: HS,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  40484: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => fS
    });
    var tS = gS(37117),
      bS = gS(40439),
      XS = gS(40449),
      xS = gS(40491),
      NS = gS(40183),
      qS = gS(38687);

    function uS(SS) {
      const HS = [],
        gS = [],
        tS = SS.lines,
        bS = SS.colors,
        xS = [];
      let NS = 0;
      for (let XS = 0; XS < tS.length; XS++) {
        const SS = tS[XS];
        for (let tS = 0; tS < SS.length; tS++) {
          const {
            x: qS,
            y: uS,
            z: IS
          } = SS[tS];
          if (gS.push(qS, uS, IS), bS) {
            const SS = bS[XS],
              {
                r: HS,
                g: gS,
                b: NS,
                a: qS
              } = SS[tS];
            xS.push(HS, gS, NS, qS)
          }
          tS > 0 && (HS.push(NS - 1), HS.push(NS)), NS++
        }
      }
      const qS = new XS.e;
      return qS.indices = HS, qS.positions = gS, bS && (qS.colors = xS), qS
    }

    function IS(SS) {
      const HS = SS.dashSize || 3,
        gS = SS.gapSize || 1,
        bS = SS.dashNb || 200,
        xS = SS.points,
        NS = [],
        qS = [],
        uS = tS.n.Zero();
      let IS, fS, kS, aS = 0,
        KS = 0;
      for (kS = 0; kS < xS.length - 1; kS++) xS[kS + 1].subtractToRef(xS[kS], uS), aS += uS.length();
      const jS = aS / bS,
        GS = HS * jS / (HS + gS);
      for (kS = 0; kS < xS.length - 1; kS++) {
        xS[kS + 1].subtractToRef(xS[kS], uS), IS = Math.floor(uS.length() / jS), uS.normalize();
        for (let SS = 0; SS < IS; SS++) fS = jS * SS, NS.push(xS[kS].x + fS * uS.x, xS[kS].y + fS * uS.y, xS[kS].z + fS * uS.z), NS.push(xS[kS].x + (fS + GS) * uS.x, xS[kS].y + (fS + GS) * uS.y, xS[kS].z + (fS + GS) * uS.z), qS.push(KS, KS + 1), KS += 2
      }
      const CS = new XS.e;
      return CS.positions = NS, CS.indices = qS, CS
    }

    function fS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const tS = HS.instance,
        bS = HS.lines,
        XS = HS.colors;
      if (tS) {
        const SS = tS.getVerticesData(NS.h.PositionKind);
        let HS, gS;
        XS && (HS = tS.getVerticesData(NS.h.ColorKind));
        let xS = 0,
          qS = 0;
        for (let tS = 0; tS < bS.length; tS++) {
          const NS = bS[tS];
          for (let bS = 0; bS < NS.length; bS++) SS[xS] = NS[bS].x, SS[xS + 1] = NS[bS].y, SS[xS + 2] = NS[bS].z, XS && HS && (gS = XS[tS], HS[qS] = gS[bS].r, HS[qS + 1] = gS[bS].g, HS[qS + 2] = gS[bS].b, HS[qS + 3] = gS[bS].a, qS += 4), xS += 3
        }
        return tS.updateVerticesData(NS.h.PositionKind, SS, !1, !1), XS && HS && tS.updateVerticesData(NS.h.ColorKind, HS, !1, !1), tS.refreshBoundingInfo(), tS
      }
      const qS = !!XS,
        IS = new xS.e(SS, gS, null, void 0, void 0, qS, HS.useVertexAlpha, HS.material);
      return uS(HS).applyToMesh(IS, HS.updatable), IS
    }

    function kS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const tS = HS.colors ? [HS.colors] : null;
      return fS(SS, {
        lines: [HS.points],
        updatable: HS.updatable,
        instance: HS.instance,
        colors: tS,
        useVertexAlpha: HS.useVertexAlpha,
        material: HS.material
      }, gS)
    }

    function aS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const XS = HS.points,
        NS = HS.instance,
        uS = HS.gapSize || 1,
        fS = HS.dashSize || 3;
      if (NS) {
        const SS = SS => {
          const HS = tS.n.Zero(),
            gS = SS.length / 6;
          let bS, xS, qS, uS, IS = 0,
            fS = 0;
          for (qS = 0; qS < XS.length - 1; qS++) XS[qS + 1].subtractToRef(XS[qS], HS), IS += HS.length();
          const kS = IS / gS,
            aS = NS._creationDataStorage.dashSize,
            KS = aS * kS / (aS + NS._creationDataStorage.gapSize);
          for (qS = 0; qS < XS.length - 1; qS++)
            for (XS[qS + 1].subtractToRef(XS[qS], HS), bS = Math.floor(HS.length() / kS), HS.normalize(), uS = 0; uS < bS && fS < SS.length;) xS = kS * uS, SS[fS] = XS[qS].x + xS * HS.x, SS[fS + 1] = XS[qS].y + xS * HS.y, SS[fS + 2] = XS[qS].z + xS * HS.z, SS[fS + 3] = XS[qS].x + (xS + KS) * HS.x, SS[fS + 4] = XS[qS].y + (xS + KS) * HS.y, SS[fS + 5] = XS[qS].z + (xS + KS) * HS.z, fS += 6, uS++;
          for (; fS < SS.length;) SS[fS] = XS[qS].x, SS[fS + 1] = XS[qS].y, SS[fS + 2] = XS[qS].z, fS += 3
        };
        return (HS.dashNb || HS.dashSize || HS.gapSize || HS.useVertexAlpha || HS.material) && qS.b.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), NS.updateMeshPositions(SS, !1), NS
      }
      const kS = new xS.e(SS, gS, null, void 0, void 0, void 0, HS.useVertexAlpha, HS.material);
      return IS(HS).applyToMesh(kS, HS.updatable), kS._creationDataStorage = new bS.l, kS._creationDataStorage.dashSize = fS, kS._creationDataStorage.gapSize = uS, kS
    }
    let KS = !1;
    KS || (KS = !0, XS.e.CreateLineSystem = uS, XS.e.CreateDashedLines = IS, bS.e.CreateLines = function(SS, HS) {
      return kS(SS, {
        points: HS,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, bS.e.CreateDashedLines = function(SS, HS, gS, tS, bS) {
      return aS(SS, {
        points: HS,
        dashSize: gS,
        gapSize: tS,
        dashNb: bS,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  40491: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => kS,
      g: () => jS
    });
    var tS, bS, XS = gS(37300),
      xS = gS(40183),
      NS = gS(40439),
      qS = gS(40495),
      uS = gS(40331),
      IS = gS(40504),
      fS = gS(39926);
    class kS extends NS.e {
      _isShaderMaterial(SS) {
        return !!SS && "ShaderMaterial" === SS.getClassName()
      }
      constructor(SS) {
        let HS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          tS = arguments.length > 5 ? arguments[5] : void 0,
          bS = arguments.length > 6 ? arguments[6] : void 0,
          NS = arguments.length > 7 ? arguments[7] : void 0;
        super(SS, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, HS, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = tS, this.useVertexAlpha = bS, this.color = new XS.b(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, HS && (this.color = HS.color.clone(), this.alpha = HS.alpha, this.useVertexColor = HS.useVertexColor, this.useVertexAlpha = HS.useVertexAlpha), this.intersectionThreshold = .1;
        const qS = {
          attributes: [xS.h.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? qS.defines.push("#define VERTEXALPHA") : qS.needAlphaBlending = !1, this.useVertexColor ? (qS.defines.push("#define VERTEXCOLOR"), qS.attributes.push(xS.h.ColorKind)) : (qS.uniforms.push("color"), this._color4 = new XS.c), NS) this.material = NS;
        else {
          this.lL().AK().isWebGPU && !kS.ForceGLSL && (this._shaderLanguage = 1), qS.shaderLanguage = this._shaderLanguage, qS.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([gS.e(344).then((() => gS(42568))), gS.e(350).then((() => gS(42570)))]) : await Promise.all([gS.e(326).then((() => gS(42577))), gS.e(332).then((() => gS(42584)))])
          };
          const SS = new IS.o("colorShader", this.lL(), "color", qS, !1);
          SS.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(SS)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(SS) {
        const HS = this.material;
        if (HS === SS) return;
        const gS = HS && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(SS), gS && HS?.dispose()
      }
      _setInternalMaterial(SS) {
        this._setMaterial(SS), this.material && (this.material.fillMode = uS.d.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(SS) {}
      _bind(SS, HS) {
        if (!this._geometry) return this;
        const gS = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(HS, gS) : this._geometry._bind(HS, gS, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: SS,
            g: HS,
            b: gS
          } = this.color;
          this._color4.set(SS, HS, gS, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(SS, HS, gS) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const tS = this.lL().AK();
        return this._unIndexed ? tS.drawArraysType(uS.d.LineListDrawMode, SS.verticesStart, SS.verticesCount, gS) : tS.drawElementsType(uS.d.LineListDrawMode, SS.indexStart, SS.indexCount, gS), this
      }
      dispose(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || HS) && this.material?.dispose(!1, !1, !0), super.dispose(SS)
      }
      clone(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gS = arguments.length > 2 ? arguments[2] : void 0;
        if (HS && void 0 === HS._addToSceneRootNodes) {
          const gS = HS;
          return gS.source = this, new kS(SS, this.lL(), gS.parent, gS.source, gS.doNotCloneChildren)
        }
        return new kS(SS, this.lL(), HS, this, gS)
      }
      createInstance(SS) {
        const HS = new aS(SS, this);
        if (this.mY) {
          HS.mY = {};
          for (const SS in this.mY) HS.mY[SS] = this.mY[SS]
        }
        return HS
      }
      serialize(SS) {
        super.serialize(SS), SS.color = this.color.lgS(), SS.alpha = this.alpha
      }
      static Parse(SS, HS) {
        const gS = new kS(SS.name, HS);
        return gS.color = XS.b.FromArray(SS.color), gS.alpha = SS.alpha, gS
      }
    }
    kS.ForceGLSL = !1;
    class aS extends qS.c {
      constructor(SS, HS) {
        super(SS, HS), this.intersectionThreshold = HS.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let KS = !1;

    function jS() {
      KS || (KS = !0, NS.e._LinesMeshParser = (SS, HS) => kS.Parse(SS, HS))
    }(tS = kS.prototype).enableEdgesRendering ?? (tS.enableEdgesRendering = (0, fS.i)("LinesMesh", "enableEdgesRendering")), (bS = aS.prototype).enableEdgesRendering ?? (bS.enableEdgesRendering = (0, fS.i)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  38683: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => XS
    });
    var tS = gS(38687);
    const bS = (SS, HS, gS) => SS ? SS.getClassName && "Mesh" === SS.getClassName() ? null : !SS.getClassName || "SubMesh" !== SS.getClassName() && "PhysicsBody" !== SS.getClassName() ? SS.clone ? SS.clone() : Array.isArray(SS) ? SS.slice() : gS && "object" === typeof SS ? {
      ...SS
    } : null : SS.clone(HS) : null;
    class XS {
      static DeepCopy(SS, HS, gS, XS) {
        let xS = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const NS = function(SS) {
          const HS = [];
          do {
            const gS = Object.getOwnPropertyNames(SS);
            for (const SS of gS) - 1 === HS.indexOf(SS) && HS.push(SS)
          } while (SS = Object.getPrototypeOf(SS));
          return HS
        }(SS);
        for (const uS of NS) {
          if ("_" === uS[0] && (!XS || -1 === XS.indexOf(uS))) continue;
          if (uS.endsWith("Observable")) continue;
          if (gS && -1 !== gS.indexOf(uS)) continue;
          const NS = SS[uS],
            IS = typeof NS;
          if ("function" !== IS) try {
            if ("object" === IS)
              if (NS instanceof Uint8Array) HS[uS] = Uint8Array.from(NS);
              else if (NS instanceof Array) {
              if (HS[uS] = [], NS.length > 0)
                if ("object" == typeof NS[0])
                  for (let SS = 0; SS < NS.length; SS++) {
                    const gS = bS(NS[SS], HS, xS); - 1 === HS[uS].indexOf(gS) && HS[uS].push(gS)
                  } else HS[uS] = NS.slice(0)
            } else HS[uS] = bS(NS, HS, xS);
            else HS[uS] = NS
          } catch (qS) {
            tS.b.Warn(qS.message)
          }
        }
      }
    }
  },
  37933: (SS, HS, gS) => {
    function tS() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (SS => {
        const HS = 16 * Math.random() | 0;
        return ("x" === SS ? HS : 3 & HS | 8).toString(16)
      }))
    }
    gS.d(HS, {
      c: () => tS
    })
  },
  38687: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => tS
    });
    class tS {
      static _CheckLimit(SS, HS) {
        let gS = tS._LogLimitOutputs[SS];
        return gS ? gS.current++ : (gS = {
          limit: HS,
          current: 1
        }, tS._LogLimitOutputs[SS] = gS), gS.current <= gS.limit
      }
      static _GenerateLimitMessage(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const gS = tS._LogLimitOutputs[SS];
        if (!gS || !tS.MessageLimitReached) return;
        const bS = this._Levels[HS];
        gS.current === gS.limit && tS[bS.name](tS.MessageLimitReached.replace(/%LIMIT%/g, "" + gS.limit).replace(/%TYPE%/g, bS.name ?? ""))
      }
      static _AddLogEntry(SS) {
        tS._LogCache = SS + tS._LogCache, tS.OnNewCacheEntry && tS.OnNewCacheEntry(SS)
      }
      static _FormatMessage(SS) {
        const HS = SS => SS < 10 ? "0" + SS : "" + SS,
          gS = new Date;
        return "[" + HS(gS.getHours()) + ":" + HS(gS.getMinutes()) + ":" + HS(gS.getSeconds()) + "]: " + SS
      }
      static _LogDisabled(SS, HS) {}
      static _LogEnabled() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          HS = arguments.length > 1 ? arguments[1] : void 0,
          gS = arguments.length > 2 ? arguments[2] : void 0;
        const bS = Array.isArray(HS) ? HS[0] : HS;
        if (void 0 !== gS && !tS._CheckLimit(bS, gS)) return;
        const XS = tS._FormatMessage(bS),
          xS = this._Levels[SS],
          NS = Array.isArray(HS) ? HS.slice(1) : [];
        xS.logFunc && xS.logFunc("BJS - " + XS, ...NS);
        const qS = `<div style='color:${xS.color}'>${XS}</div><br>`;
        tS._AddLogEntry(qS), tS._GenerateLimitMessage(bS, SS)
      }
      static get LogCache() {
        return tS._LogCache
      }
      static ClearLogCache() {
        tS._LogCache = "", tS._LogLimitOutputs = {}, tS.errorsCount = 0
      }
      static set LogLevels(SS) {
        tS.Log = tS._LogDisabled, tS.Warn = tS._LogDisabled, tS.Error = tS._LogDisabled;
        const HS = [tS.MessageLogLevel, tS.WarningLogLevel, tS.ErrorLogLevel];
        for (const gS of HS)
          if ((SS & gS) === gS) {
            const SS = this._Levels[gS];
            tS[SS.name] = tS._LogEnabled.bind(tS, gS)
          }
      }
    }
    tS.NoneLogLevel = 0, tS.MessageLogLevel = 1, tS.WarningLogLevel = 2, tS.ErrorLogLevel = 4, tS.AllLogLevel = 7, tS.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", tS._LogCache = "", tS._LogLimitOutputs = {}, tS._Levels = [{}, {
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
    }], tS.errorsCount = 0, tS.Log = tS._LogEnabled.bind(tS, tS.MessageLogLevel), tS.Warn = tS._LogEnabled.bind(tS, tS.WarningLogLevel), tS.Error = tS._LogEnabled.bind(tS, tS.ErrorLogLevel)
  },
  40129: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => tS.i
    });
    var tS = gS(40131);
    (0, tS.e)()
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);