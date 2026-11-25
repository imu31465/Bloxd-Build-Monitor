export const id = 256;
export const ids = [256];
export const modules = {
  40399: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => lu,
      d: () => Yu,
      f: () => fu,
      j: () => qu
    });
    var su = ju(40186),
      Uu = ju(39032),
      Zu = ju(40319),
      Xu = ju(40236);
    class lu {
      get Gw() {
        return this._isDisposed
      }
      constructor(uu, Eu, ju) {
        let Uu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Zu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          lu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          qu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          fu = arguments.length > 7 ? arguments[7] : void 0,
          Cu = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, Xu.e)(), uu && uu.hV ? this._engine = uu.hV().wO() : this._engine = uu, this._updatable = ju, this._instanced = lu, this._divisor = fu || 1, this._label = Cu, Eu instanceof su.e ? (this._data = null, this._buffer = Eu) : (this._data = Eu, this._buffer = null), this.byteStride = qu ? Uu : Uu * Float32Array.BYTES_PER_ELEMENT, Zu || this.create()
      }
      createVertexBuffer(uu, Eu, ju, su, Uu) {
        let Zu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Xu = arguments.length > 6 ? arguments[6] : void 0;
        const lu = Zu ? Eu : Eu * Float32Array.BYTES_PER_ELEMENT,
          fu = su ? Zu ? su : su * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new qu(this._engine, this, uu, this._updatable, !0, fu, void 0 === Uu ? this._instanced : Uu, lu, ju, void 0, void 0, !0, this._divisor || Xu)
      }
      isUpdatable() {
        return this._updatable
      }
      getData() {
        return this._data
      }
      getBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / Float32Array.BYTES_PER_ELEMENT
      }
      create() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        !uu && this._buffer || (uu = uu || this._data, uu && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, uu), this._data = uu) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(uu, this._label), this._data = uu) : this._buffer = this._engine.createVertexBuffer(uu, void 0, this._label)))
      }
      _rebuild() {
        if (this._data) this._buffer = null, this.create(this._data);
        else {
          if (!this._buffer) return;
          if (this._buffer.Mb > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.Mb, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.Mb, void 0, this._label));
          Uu.b.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(uu) {
        this.create(uu)
      }
      updateDirectly(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, uu, su ? Eu : Eu * Float32Array.BYTES_PER_ELEMENT, ju ? ju * this.byteStride : void 0), this._data = 0 === Eu && void 0 === ju ? uu : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class qu {
      get Gw() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(uu) {
        const Eu = 0 != uu;
        this._instanceDivisor = uu, Eu !== this._instanced && (this._instanced = Eu, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const uu = this.getData();
        return uu ? Array.isArray(uu) ? uu.length / (this.byteStride / 4) - this.byteOffset / 4 : (uu.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(uu, Eu, ju, su, Uu, Xu, bu, cu, Nu, Ou) {
        let Yu, hu = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          Du = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          gu = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          Mu = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = uu, "object" === typeof su && null !== su ? (Yu = su.updatable ?? !1, Uu = su.postponeInternalCreation, Xu = su.stride, bu = su.instanced, cu = su.offset, Nu = su.size, Ou = su.type, hu = su.normalized ?? !1, Du = su.useBytes ?? !1, gu = su.divisor ?? 1, Mu = su.takeBufferOwnership ?? !1, this._label = su.label) : Yu = !!su, Eu instanceof lu ? (this._buffer = Eu, this._ownsBuffer = Mu) : (this._buffer = new lu(uu, Eu, Yu, Xu, Uu, bu, Du, gu, this._label), this._ownsBuffer = !0), this.uniqueId = qu._Counter++, this._kind = ju, void 0 === Ou) {
          const uu = this.getData();
          this.type = uu ? Cu(uu) : qu.FLOAT
        } else this.type = Ou;
        const eu = (0, Zu.q)(this.type);
        Du ? (this._size = Nu || (Xu ? Xu / eu : fu(ju)), this.byteStride = Xu || this._buffer.byteStride || this._size * eu, this.byteOffset = cu || 0) : (this._size = Nu || Xu || fu(ju), this.byteStride = Xu ? Xu * eu : this._buffer.byteStride || this._size * eu, this.byteOffset = (cu || 0) * eu), this.normalized = hu, this._instanced = void 0 !== bu && bu, this._instanceDivisor = bu ? gu : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(uu) {
        switch (uu) {
          case qu.BYTE:
            return 0;
          case qu.UNSIGNED_BYTE:
            return 1;
          case qu.SHORT:
            return 2;
          case qu.UNSIGNED_SHORT:
            return 3;
          case qu.INT:
            return 4;
          case qu.UNSIGNED_INT:
            return 5;
          case qu.FLOAT:
            return 6;
          case qu.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${uu}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (qu._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
      }
      _rebuild() {
        this._buffer?._rebuild()
      }
      getKind() {
        return this._kind
      }
      isUpdatable() {
        return this._buffer.isUpdatable()
      }
      getData() {
        return this._buffer.getData()
      }
      getFloatData(uu, Eu) {
        const ju = this.getData();
        return ju ? (0, Zu.n)(ju, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, uu, Eu) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, Zu.q)(this.type)
      }
      hju() {
        return this.byteOffset / (0, Zu.q)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, Zu.q)(this.type) : this._size
      }
      getIsInstanced() {
        return this._instanced
      }
      getInstanceDivisor() {
        return this._instanceDivisor
      }
      create(uu) {
        this._buffer.create(uu), this._alignBuffer()
      }
      update(uu) {
        this._buffer.update(uu), this._alignBuffer()
      }
      updateDirectly(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(uu, Eu, void 0, ju), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(uu, Eu) {
        (0, Zu.h)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, uu, this.normalized, ((uu, ju) => {
          for (let su = 0; su < this._size; su++) Eu(uu[su], ju + su)
        }))
      }
      _alignBuffer() {}
    }

    function fu(uu) {
      switch (uu) {
        case qu.UVKind:
        case qu.UV2Kind:
        case qu.UV3Kind:
        case qu.UV4Kind:
        case qu.UV5Kind:
        case qu.UV6Kind:
          return 2;
        case qu.NormalKind:
        case qu.PositionKind:
          return 3;
        case qu.ColorKind:
        case qu.ColorInstanceKind:
        case qu.MatricesIndicesKind:
        case qu.MatricesIndicesExtraKind:
        case qu.MatricesWeightsKind:
        case qu.MatricesWeightsExtraKind:
        case qu.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + uu + "'")
      }
    }

    function Cu(uu) {
      return uu instanceof Int8Array ? qu.BYTE : uu instanceof Uint8Array ? qu.UNSIGNED_BYTE : uu instanceof Int16Array ? qu.SHORT : uu instanceof Uint16Array ? qu.UNSIGNED_SHORT : uu instanceof Int32Array ? qu.INT : uu instanceof Uint32Array ? qu.UNSIGNED_INT : qu.FLOAT
    }

    function bu(uu) {
      return (0, Zu.q)(uu)
    }

    function cu(uu, Eu, ju, su, Uu, Xu, lu, qu) {
      (0, Zu.h)(uu, Eu, ju, su, Uu, Xu, lu, ((uu, Eu) => {
        for (let ju = 0; ju < su; ju++) qu(uu[ju], Eu + ju)
      }))
    }

    function Nu(uu, Eu, ju, su, Uu, Xu, lu, qu) {
      return (0, Zu.n)(uu, Eu, ju, su, Uu, Xu, lu, qu)
    }
    qu._Counter = 0, qu.BYTE = 5120, qu.UNSIGNED_BYTE = 5121, qu.SHORT = 5122, qu.UNSIGNED_SHORT = 5123, qu.INT = 5124, qu.UNSIGNED_INT = 5125, qu.FLOAT = 5126, qu.HALF_FLOAT = 5131, qu.PositionKind = "position", qu.NormalKind = "normal", qu.TangentKind = "tangent", qu.UVKind = "uv", qu.UV2Kind = "uv2", qu.UV3Kind = "uv3", qu.UV4Kind = "uv4", qu.UV5Kind = "uv5", qu.UV6Kind = "uv6", qu.ColorKind = "color", qu.ColorInstanceKind = "instanceColor", qu.MatricesIndicesKind = "matricesIndices", qu.MatricesWeightsKind = "matricesWeights", qu.MatricesIndicesExtraKind = "matricesIndicesExtra", qu.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let Ou = !1;

    function Yu() {
      Ou || (Ou = !0, qu.DeduceStride = fu, qu.GetDataType = Cu, qu.GetTypeByteLength = bu, qu.ForEach = cu, qu.GetFloatData = Nu)
    }
  },
  40186: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => su
    });
    class su {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.Mb = 0, this.is32Bits = !1, this.uniqueId = su._Counter++
      }
    }
    su._Counter = 0
  },
  40393: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Zu
    });
    var su = ju(37494),
      Uu = ju(40399);
    class Zu {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || Eu && !this.pickedMesh.isVerticesDataPresent(Uu.j.NormalKind)) return null;
        let ju, Zu = this.pickedMesh.Ysu();
        0 === Zu?.length && (Zu = null);
        const Xu = su.m.dO[0],
          lu = su.m.dO[1],
          qu = su.m.dO[2];
        if (Eu) {
          const uu = this.pickedMesh.getVerticesData(Uu.j.NormalKind);
          let Eu = Zu ? su.t.FromArrayToRef(uu, 3 * Zu[3 * this.faceId], Xu) : Xu.T6(uu[3 * this.faceId * 3], uu[3 * this.faceId * 3 + 1], uu[3 * this.faceId * 3 + 2]),
            fu = Zu ? su.t.FromArrayToRef(uu, 3 * Zu[3 * this.faceId + 1], lu) : lu.T6(uu[3 * (3 * this.faceId + 1)], uu[3 * (3 * this.faceId + 1) + 1], uu[3 * (3 * this.faceId + 1) + 2]),
            Cu = Zu ? su.t.FromArrayToRef(uu, 3 * Zu[3 * this.faceId + 2], qu) : qu.T6(uu[3 * (3 * this.faceId + 2)], uu[3 * (3 * this.faceId + 2) + 1], uu[3 * (3 * this.faceId + 2) + 2]);
          Eu = Eu.scale(this.bu), fu = fu.scale(this.bv), Cu = Cu.scale(1 - this.bu - this.bv), ju = new su.t(Eu.x + fu.x + Cu.x, Eu.y + fu.y + Cu.y, Eu.z + fu.z + Cu.z)
        } else {
          const uu = this.pickedMesh.getVerticesData(Uu.j.PositionKind),
            Eu = Zu ? su.t.FromArrayToRef(uu, 3 * Zu[3 * this.faceId], Xu) : Xu.T6(uu[3 * this.faceId * 3], uu[3 * this.faceId * 3 + 1], uu[3 * this.faceId * 3 + 2]),
            fu = Zu ? su.t.FromArrayToRef(uu, 3 * Zu[3 * this.faceId + 1], lu) : lu.T6(uu[3 * (3 * this.faceId + 1)], uu[3 * (3 * this.faceId + 1) + 1], uu[3 * (3 * this.faceId + 1) + 2]),
            Cu = Zu ? su.t.FromArrayToRef(uu, 3 * Zu[3 * this.faceId + 2], qu) : qu.T6(uu[3 * (3 * this.faceId + 2)], uu[3 * (3 * this.faceId + 2) + 1], uu[3 * (3 * this.faceId + 2) + 2]),
            bu = Eu.subtract(fu),
            cu = Cu.subtract(fu);
          ju = su.t.Cross(bu, cu)
        }
        const fu = (uu, Eu) => {
          if (-1 !== this.thinInstanceIndex) {
            const ju = uu._thinInstanceDataStorage.matrixData,
              Uu = this.thinInstanceIndex << 4;
            if (ju && ju.length > Uu) {
              const uu = su.m.Matrix[0];
              su.e.FromArrayToRef(ju, Uu, uu), su.t.TransformNormalToRef(Eu, uu, Eu)
            }
          }
          let ju = uu.getWorldMatrix();
          uu.nonUniformScaling && (su.m.Matrix[0].yJ(ju), ju = su.m.Matrix[0], ju.setTranslationFromFloats(0, 0, 0), ju.invert(), ju.transposeToRef(su.m.Matrix[1]), ju = su.m.Matrix[1]), su.t.TransformNormalToRef(Eu, ju, Eu)
        };
        if (uu && fu(this.pickedMesh, ju), this.ray) {
          const Eu = su.m.dO[0].yJ(ju);
          uu || fu(this.pickedMesh, Eu), su.t.Dot(Eu, this.ray.direction) > 0 && ju.negateInPlace()
        }
        return ju.normalize(), ju
      }
      getTextureCoordinates() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Uu.j.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(uu)) return null;
        const Eu = this.pickedMesh.Ysu();
        if (!Eu) return null;
        const ju = this.pickedMesh.getVerticesData(uu);
        if (!ju) return null;
        let Zu = su.p.FromArray(ju, 2 * Eu[3 * this.faceId]),
          Xu = su.p.FromArray(ju, 2 * Eu[3 * this.faceId + 1]),
          lu = su.p.FromArray(ju, 2 * Eu[3 * this.faceId + 2]);
        return Zu = Zu.scale(this.bu), Xu = Xu.scale(this.bv), lu = lu.scale(1 - this.bu - this.bv), new su.p(Zu.x + Xu.x + lu.x, Zu.y + Xu.y + lu.y)
      }
    }
  },
  40236: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Zu
    });
    var su = ju(40118);
    let Uu = !1;

    function Zu() {
      Uu || (Uu = !0, su.ThinEngine.prototype.updateDynamicIndexBuffer = function(uu, Eu) {
        let ju;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(uu), ju = uu.is32Bits ? Eu instanceof Uint32Array ? Eu : new Uint32Array(Eu) : Eu instanceof Uint16Array ? Eu : new Uint16Array(Eu), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, ju, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, su.ThinEngine.prototype.updateDynamicVertexBuffer = function(uu, Eu, ju, su) {
        this.bindArrayBuffer(uu), void 0 === ju && (ju = 0);
        const Uu = Eu.byteLength || Eu.length;
        void 0 === su || su >= Uu && 0 === ju ? Eu instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, ju, new Float32Array(Eu)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, ju, Eu) : Eu instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, ju, new Float32Array(Eu).subarray(0, su / 4)) : (Eu = ArrayBuffer.isView(Eu) ? new Uint8Array(Eu.buffer, Eu.byteOffset, su) : new Uint8Array(Eu, 0, su), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, ju, Eu)), this._resetVertexBufferBinding()
      })
    }
  },
  40198: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => su
    });
    class su {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Eu = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = Eu, !uu && (uu = Eu.createTexture(), !uu)) throw new Error("Unable to create webGL texture");
        this.set(uu)
      }
      setUsage() {}
      set(uu) {
        this._webGLTexture = uu
      }
      reset() {
        this._webGLTexture = null, this._MSAARenderBuffers = null
      }
      addMSAARenderBuffer(uu) {
        this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(uu)
      }
      releaseMSAARenderBuffers() {
        if (this._MSAARenderBuffers) {
          for (const uu of this._MSAARenderBuffers) this._context.deleteRenderbuffer(uu);
          this._MSAARenderBuffers = null
        }
      }
      getMSAARenderBuffer() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._MSAARenderBuffers?.[uu] ?? null
      }
      release() {
        this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
      }
    }
  },
  40168: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => gu
    });
    var su = ju(37514),
      Uu = ju(40121),
      Zu = ju(37506),
      Xu = ju(39032),
      lu = ju(37504),
      qu = ju(40170);
    class fu {
      constructor() {
        let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, uu && this.reset()
      }
      get isDirty() {
        return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
      }
      get zOffset() {
        return this._zOffset
      }
      set zOffset(uu) {
        this._zOffset !== uu && (this._zOffset = uu, this._isZOffsetDirty = !0)
      }
      get zOffsetUnits() {
        return this._zOffsetUnits
      }
      set zOffsetUnits(uu) {
        this._zOffsetUnits !== uu && (this._zOffsetUnits = uu, this._isZOffsetDirty = !0)
      }
      get cullFace() {
        return this._cullFace
      }
      set cullFace(uu) {
        this._cullFace !== uu && (this._cullFace = uu, this._isCullFaceDirty = !0)
      }
      get cull() {
        return this._cull
      }
      set cull(uu) {
        this._cull !== uu && (this._cull = uu, this._isCullDirty = !0)
      }
      get depthFunc() {
        return this._depthFunc
      }
      set depthFunc(uu) {
        this._depthFunc !== uu && (this._depthFunc = uu, this._isDepthFuncDirty = !0)
      }
      get depthMask() {
        return this._depthMask
      }
      set depthMask(uu) {
        this._depthMask !== uu && (this._depthMask = uu, this._isDepthMaskDirty = !0)
      }
      get depthTest() {
        return this._depthTest
      }
      set depthTest(uu) {
        this._depthTest !== uu && (this._depthTest = uu, this._isDepthTestDirty = !0)
      }
      get frontFace() {
        return this._frontFace
      }
      set frontFace(uu) {
        this._frontFace !== uu && (this._frontFace = uu, this._isFrontFaceDirty = !0)
      }
      reset() {
        this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !0, this._isFrontFaceDirty = !1
      }
      apply(uu) {
        this.isDirty && (this._isCullDirty && (this.cull ? uu.enable(uu.CULL_FACE) : uu.disable(uu.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (uu.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (uu.depthMask(this.depthMask), this._isDepthMaskDirty = !1), this._isDepthTestDirty && (this.depthTest ? uu.enable(uu.DEPTH_TEST) : uu.disable(uu.DEPTH_TEST), this._isDepthTestDirty = !1), this._isDepthFuncDirty && (uu.depthFunc(this.depthFunc), this._isDepthFuncDirty = !1), this._isZOffsetDirty && (this.zOffset || this.zOffsetUnits ? (uu.enable(uu.POLYGON_OFFSET_FILL), uu.polygonOffset(this.zOffset, this.zOffsetUnits)) : uu.disable(uu.POLYGON_OFFSET_FILL), this._isZOffsetDirty = !1), this._isFrontFaceDirty && (uu.frontFace(this.frontFace), this._isFrontFaceDirty = !1))
      }
    }
    class Cu {
      get isDirty() {
        return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
      }
      get func() {
        return this._func
      }
      set func(uu) {
        this._func !== uu && (this._func = uu, this._isStencilFuncDirty = !0)
      }
      get backFunc() {
        return this._func
      }
      set backFunc(uu) {
        this._backFunc !== uu && (this._backFunc = uu, this._isStencilFuncDirty = !0)
      }
      get funcRef() {
        return this._funcRef
      }
      set funcRef(uu) {
        this._funcRef !== uu && (this._funcRef = uu, this._isStencilFuncDirty = !0)
      }
      get funcMask() {
        return this._funcMask
      }
      set funcMask(uu) {
        this._funcMask !== uu && (this._funcMask = uu, this._isStencilFuncDirty = !0)
      }
      get opStencilFail() {
        return this._opStencilFail
      }
      set opStencilFail(uu) {
        this._opStencilFail !== uu && (this._opStencilFail = uu, this._isStencilOpDirty = !0)
      }
      get opDepthFail() {
        return this._opDepthFail
      }
      set opDepthFail(uu) {
        this._opDepthFail !== uu && (this._opDepthFail = uu, this._isStencilOpDirty = !0)
      }
      get opStencilDepthPass() {
        return this._opStencilDepthPass
      }
      set opStencilDepthPass(uu) {
        this._opStencilDepthPass !== uu && (this._opStencilDepthPass = uu, this._isStencilOpDirty = !0)
      }
      get backOpStencilFail() {
        return this._backOpStencilFail
      }
      set backOpStencilFail(uu) {
        this._backOpStencilFail !== uu && (this._backOpStencilFail = uu, this._isStencilOpDirty = !0)
      }
      get backOpDepthFail() {
        return this._backOpDepthFail
      }
      set backOpDepthFail(uu) {
        this._backOpDepthFail !== uu && (this._backOpDepthFail = uu, this._isStencilOpDirty = !0)
      }
      get backOpStencilDepthPass() {
        return this._backOpStencilDepthPass
      }
      set backOpStencilDepthPass(uu) {
        this._backOpStencilDepthPass !== uu && (this._backOpStencilDepthPass = uu, this._isStencilOpDirty = !0)
      }
      get mask() {
        return this._mask
      }
      set mask(uu) {
        this._mask !== uu && (this._mask = uu, this._isStencilMaskDirty = !0)
      }
      get enabled() {
        return this._enabled
      }
      set enabled(uu) {
        this._enabled !== uu && (this._enabled = uu, this._isStencilTestDirty = !0)
      }
      constructor() {
        let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, uu && this.reset()
      }
      reset() {
        this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
      }
      apply(uu) {
        if (!uu) return;
        const Eu = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = Eu ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = Eu ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = Eu ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = Eu ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = Eu ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = Eu ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = Eu ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = Eu ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = Eu ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = Eu ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = Eu ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = Eu ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? uu.enable(uu.STENCIL_TEST) : uu.disable(uu.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (uu.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (uu.stencilFuncSeparate(uu.FRONT, this.func, this.funcRef, this.funcMask), uu.stencilFuncSeparate(uu.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (uu.stencilOpSeparate(uu.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), uu.stencilOpSeparate(uu.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class bu {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = bu.ALWAYS, this.opStencilFail = bu.KEEP, this.opDepthFail = bu.KEEP, this.opStencilDepthPass = bu.REPLACE, this.backFunc = bu.ALWAYS, this.backOpStencilFail = bu.KEEP, this.backOpDepthFail = bu.KEEP, this.backOpStencilDepthPass = bu.REPLACE
      }
      get stencilFunc() {
        return this.func
      }
      set stencilFunc(uu) {
        this.func = uu
      }
      get stencilBackFunc() {
        return this.backFunc
      }
      set stencilBackFunc(uu) {
        this.backFunc = uu
      }
      get stencilFuncRef() {
        return this.funcRef
      }
      set stencilFuncRef(uu) {
        this.funcRef = uu
      }
      get stencilFuncMask() {
        return this.funcMask
      }
      set stencilFuncMask(uu) {
        this.funcMask = uu
      }
      get stencilOpStencilFail() {
        return this.opStencilFail
      }
      set stencilOpStencilFail(uu) {
        this.opStencilFail = uu
      }
      get stencilOpDepthFail() {
        return this.opDepthFail
      }
      set stencilOpDepthFail(uu) {
        this.opDepthFail = uu
      }
      get stencilOpStencilDepthPass() {
        return this.opStencilDepthPass
      }
      set stencilOpStencilDepthPass(uu) {
        this.opStencilDepthPass = uu
      }
      get stencilBackOpStencilFail() {
        return this.backOpStencilFail
      }
      set stencilBackOpStencilFail(uu) {
        this.backOpStencilFail = uu
      }
      get stencilBackOpDepthFail() {
        return this.backOpDepthFail
      }
      set stencilBackOpDepthFail(uu) {
        this.backOpDepthFail = uu
      }
      get stencilBackOpStencilDepthPass() {
        return this.backOpStencilDepthPass
      }
      set stencilBackOpStencilDepthPass(uu) {
        this.backOpStencilDepthPass = uu
      }
      get stencilMask() {
        return this.mask
      }
      set stencilMask(uu) {
        this.mask = uu
      }
      get stencilTest() {
        return this.enabled
      }
      set stencilTest(uu) {
        this.enabled = uu
      }
    }
    bu.ALWAYS = 519, bu.KEEP = 7680, bu.REPLACE = 7681;
    var cu = ju(40172),
      Nu = ju(40153),
      Ou = ju(40108),
      Yu = ju(40138),
      hu = ju(40149);

    function Du(uu, Eu) {
      if (Eu) {
        const {
          requestAnimationFrame: ju
        } = Eu;
        if ("function" === typeof ju) return ju(uu)
      }
      if ((0, Yu.m)()) {
        const {
          requestAnimationFrame: ju
        } = Eu || window;
        if ("function" === typeof ju) return ju(uu)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(uu);
      return setTimeout(uu, 16)
    }
    class gu {
      get frameId() {
        return this._frameId
      }
      get isWebGPU() {
        return this._isWebGPU
      }
      _getShaderProcessor(uu) {
        return this._shaderProcessor
      }
      _resetAlphaMode() {
        this._alphaMode.fill(-1), this._alphaEquation.fill(-1)
      }
      get shaderPlatformName() {
        return this._shaderPlatformName
      }
      _clearEmptyResources() {
        this._emptyTexture = null, this._emptyCubeTexture = null, this._emptyTexture3D = null, this._emptyTexture2DArray = null
      }
      get bsu() {
        return this._useReverseDepthBuffer
      }
      set bsu(uu) {
        uu !== this._useReverseDepthBuffer && (this._useReverseDepthBuffer = uu, this._depthCullingState.depthFunc = uu ? 518 : 515)
      }
      setColorWrite(uu) {
        uu !== this._colorWrite && (this._colorWriteChanged = !0, this._colorWrite = uu)
      }
      getColorWrite() {
        return this._colorWrite
      }
      get depthCullingState() {
        return this._depthCullingState
      }
      get alphaState() {
        return this._alphaState
      }
      get stencilState() {
        return this._stencilState
      }
      get stencilStateComposer() {
        return this._stencilStateComposer
      }
      _getGlobalDefines(uu) {
        if (uu) return this.isNDCHalfZRange ? uu.IS_NDC_HALF_ZRANGE = "" : delete uu.IS_NDC_HALF_ZRANGE, this.bsu ? uu.USE_REVERSE_DEPTHBUFFER = "" : delete uu.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? uu.USE_EXACT_SRGB_CONVERSIONS = "" : delete uu.USE_EXACT_SRGB_CONVERSIONS);
        {
          let uu = "";
          return this.isNDCHalfZRange && (uu += "#define IS_NDC_HALF_ZRANGE"), this.bsu && (uu && (uu += "\n"), uu += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (uu && (uu += "\n"), uu += "#define USE_EXACT_SRGB_CONVERSIONS"), uu
        }
      }
      _rebuildInternalTextures() {
        const uu = this._internalTexturesCache.slice();
        for (const Eu of uu) Eu._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const uu = this._renderTargetWrapperCache.slice();
        for (const Eu of uu) Eu.textures?.some((uu => 15 === uu.source)) || Eu._rebuild()
      }
      _rebuildEffects() {
        for (const uu in this._compiledEffects) {
          const Eu = this._compiledEffects[uu];
          Eu._pipelineContext = null, Eu._prepareEffect()
        }
        Uu.b.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        Xu.b.Warn(this.name + " context successfully restored."), this.pO.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(uu) {
        setTimeout((() => {
          this._clearEmptyResources();
          const Eu = this._depthCullingState.depthTest,
            ju = this._depthCullingState.depthFunc,
            su = this._depthCullingState.depthMask,
            Uu = this._stencilState.stencilTest;
          uu(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = Eu, this._depthCullingState.depthFunc = ju, this._depthCullingState.depthMask = su, this._stencilState.stencilTest = Uu, this._flagContextRestored()
        }), 0)
      }
      get Gw() {
        return this._isDisposed
      }
      get snapshotRendering() {
        return !1
      }
      set snapshotRendering(uu) {}
      get snapshotRenderingMode() {
        return 0
      }
      set snapshotRenderingMode(uu) {}
      getClassName() {
        return "AbstractEngine"
      }
      get emptyTexture() {
        return this._emptyTexture || (this._emptyTexture = this.createRawTexture(new Uint8Array(4), 1, 1, 5, !1, !1, 1)), this._emptyTexture
      }
      get emptyTexture3D() {
        return this._emptyTexture3D || (this._emptyTexture3D = this.createRawTexture3D(new Uint8Array(4), 1, 1, 1, 5, !1, !1, 1)), this._emptyTexture3D
      }
      get emptyTexture2DArray() {
        return this._emptyTexture2DArray || (this._emptyTexture2DArray = this.createRawTexture2DArray(new Uint8Array(4), 1, 1, 1, 5, !1, !1, 1)), this._emptyTexture2DArray
      }
      get emptyCubeTexture() {
        if (!this._emptyCubeTexture) {
          const uu = new Uint8Array(4),
            Eu = [uu, uu, uu, uu, uu, uu];
          this._emptyCubeTexture = this.createRawCubeTexture(Eu, 1, 5, 0, !1, !1, 1)
        }
        return this._emptyCubeTexture
      }
      set framebufferDimensionsObject(uu) {
        this._framebufferDimensionsObject = uu
      }
      get activeRenderLoops() {
        return this._activeRenderLoops
      }
      stopRenderLoop(uu) {
        if (!uu) return this._activeRenderLoops.length = 0, void this._cancelFrame();
        const Eu = this._activeRenderLoops.indexOf(uu);
        Eu >= 0 && (this._activeRenderLoops.splice(Eu, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: uu
            } = this.customAnimationFrameRequester;
            uu && uu(this.customAnimationFrameRequester.aO), delete this.customAnimationFrameRequester.aO
          }
        } else if (0 !== this._frameHandler) {
          const uu = this._frameHandler;
          if (this._frameHandler = 0, (0, Yu.m)()) {
            const {
              cancelAnimationFrame: Eu
            } = this.getHostWindow() || window;
            if ("function" === typeof Eu) return Eu(uu)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(uu);
          return clearTimeout(uu)
        }
      }
      wG() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      JG() {
        this._frameId++, this.onEndFrameObservable.notifyObservers(this)
      }
      get maxFPS() {
        return this._maxFPS
      }
      set maxFPS(uu) {
        this._maxFPS = uu, void 0 !== uu && (this._minFrameTime = uu <= 0 ? Number.MAX_VALUE : 1e3 / uu)
      }
      _isOverFrameTime(uu) {
        if (!uu || void 0 === this._maxFPS) return !1;
        const Eu = uu - this._lastFrameTime;
        return this._lastFrameTime = uu, this._renderAccumulator += Eu, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(uu) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(uu)) {
          let uu = !0;
          (this.Gw || !this.renderEvenInBackground && this._windowIsBackground) && (uu = !1), uu && (this.wG(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.JG())
        }
      }
      _renderLoop(uu) {
        this._processFrame(uu), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
      }
      _renderFrame() {
        for (let uu = 0; uu < this._activeRenderLoops.length; uu++) {
          (0, this._activeRenderLoops[uu])()
        }
      }
      _renderViews() {
        return !1
      }
      _queueNewFrame(uu, Eu) {
        return Du(uu, Eu)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.aO = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.aO) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
      }
      runRenderLoop(uu) {
        -1 === this._activeRenderLoops.indexOf(uu) && (this._activeRenderLoops.push(uu), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
      }
      getDepthBuffer() {
        return this._depthCullingState.depthTest
      }
      setDepthBuffer(uu) {
        this._depthCullingState.depthTest = uu
      }
      setZOffset(uu) {
        this._depthCullingState.zOffset = this.bsu ? -uu : uu
      }
      getZOffset() {
        const uu = this._depthCullingState.zOffset;
        return this.bsu ? -uu : uu
      }
      setZOffsetUnits(uu) {
        this._depthCullingState.zOffsetUnits = this.bsu ? -uu : uu
      }
      getZOffsetUnits() {
        const uu = this._depthCullingState.zOffsetUnits;
        return this.bsu ? -uu : uu
      }
      getHostWindow() {
        return (0, Yu.m)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
      }
      get compatibilityMode() {
        return this._compatibilityMode
      }
      set compatibilityMode(uu) {
        this._compatibilityMode = !0
      }
      _rebuildTextures() {
        for (const uu of this.scenes) uu._rebuildTextures();
        for (const uu of this._virtualScenes) uu._rebuildTextures()
      }
      _releaseRenderTargetWrapper(uu) {
        const Eu = this._renderTargetWrapperCache.indexOf(uu); - 1 !== Eu && this._renderTargetWrapperCache.splice(Eu, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(uu, Eu, ju) {
        const su = Eu || this.getRenderWidth(),
          Uu = ju || this.getRenderHeight(),
          Zu = uu.x || 0,
          Xu = uu.y || 0;
        this._cachedViewport = uu, this._viewport(Zu * su, Xu * Uu, su * uu.width, Uu * uu.height)
      }
      createCanvasImage() {
        return document.createElement("img")
      }
      createCanvasPath2D(uu) {
        return new Path2D(uu)
      }
      get description() {
        let uu = this.name + this.version;
        return this._caps.parallelShaderCompile && (uu += " - Parallel shader compilation"), uu
      }
      _createTextureBase(uu, Eu, ju, su) {
        let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          lu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          qu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          fu = arguments.length > 7 ? arguments[7] : void 0,
          Cu = arguments.length > 8 ? arguments[8] : void 0,
          bu = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          cu = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          Nu = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          Yu = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          hu = arguments.length > 13 ? arguments[13] : void 0,
          Du = arguments.length > 14 ? arguments[14] : void 0,
          Mu = arguments.length > 15 ? arguments[15] : void 0;
        const eu = "data:" === (uu = uu || "").substring(0, 5),
          Gu = "blob:" === uu.substring(0, 5),
          pu = eu && -1 !== uu.indexOf(";base64,"),
          wu = cu || new Ou.c(this, 1);
        wu !== cu && (wu.label = uu.substring(0, 60));
        const Ju = uu;
        !this._transformTextureUrl || pu || cu || bu || (uu = this._transformTextureUrl(uu)), Ju !== uu && (wu._originalUrl = Ju);
        const du = uu.lastIndexOf(".");
        let au = Yu || (du > -1 ? uu.substring(du).toLowerCase() : "");
        au.indexOf("?") > -1 && (au = au.split("?")[0]);
        const Pu = gu.GetCompatibleTextureLoader(au, hu);
        su && su.addPendingData(wu), wu.url = uu, wu.generateMipMaps = !Eu, wu.samplingMode = Uu, wu.invertY = ju, wu._useSRGBBuffer = this._getUseSRGBBuffer(!!Mu, Eu), this._doNotHandleContextLost || (wu._buffer = bu);
        let ou = null;
        lu && !cu && (ou = wu.onLoadedObservable.add(lu)), cu || this._internalTexturesCache.push(wu);
        const ku = (ju, cu) => {
          su && su.removePendingData(wu), uu === Ju ? (ou && wu.onLoadedObservable.remove(ou), Zu.b.UseFallbackTexture && uu !== Zu.b.FallbackTexture && this._createTextureBase(Zu.b.FallbackTexture, Eu, wu.invertY, su, Uu, null, qu, fu, Cu, bu, wu), ju = (ju || "Unknown error") + (Zu.b.UseFallbackTexture ? " - Fallback texture was used" : ""), wu.onErrorObservable.notifyObservers({
            message: ju,
            exception: cu
          }), qu && qu(ju, cu)) : (Xu.b.Warn(`Failed to load ${uu}, falling back to ${Ju}`), this._createTextureBase(Ju, Eu, wu.invertY, su, Uu, lu, qu, fu, Cu, bu, wu, Nu, Yu, hu, Du, Mu))
        };
        if (Pu) {
          const Eu = async uu => {
            (await Pu).loadData(uu, wu, ((uu, Eu, ju, Zu, Xu, lu) => {
              lu ? ku("TextureLoader failed to load data") : fu(wu, au, su, {
                width: uu,
                height: Eu
              }, wu.invertY, !ju, Zu, (() => (Xu(), !1)), Uu)
            }), Du)
          };
          if (bu) {
            const uu = async uu => {
              try {
                await Eu(uu)
              } catch (ju) {
                ku("Failed to parse texture data", ju)
              }
            };
            bu instanceof ArrayBuffer ? uu(new Uint8Array(bu)) : ArrayBuffer.isView(bu) ? uu(bu) : qu && qu("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(uu, (async uu => {
            try {
              await Eu(new Uint8Array(uu))
            } catch (ju) {
              ku("Failed to parse texture data", ju)
            }
          }), void 0, su ? su.offlineProvider : void 0, !0, ((uu, Eu) => {
            ku("Unable to load " + (uu && uu.responseURL, Eu))
          }))
        } else {
          const ju = uu => {
            Gu && !this._doNotHandleContextLost && (wu._buffer = uu), fu(wu, au, su, uu, wu.invertY, Eu, !1, Cu, Uu)
          };
          !eu || pu ? bu && ("string" === typeof bu.decoding || bu.close) ? ju(bu) : gu._FileToolsLoadImage(uu || "", ju, ku, su ? su.offlineProvider : null, hu, wu.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof bu || bu instanceof ArrayBuffer || ArrayBuffer.isView(bu) || bu instanceof Blob ? gu._FileToolsLoadImage(bu, ju, ku, su ? su.offlineProvider : null, hu, wu.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : bu && ju(bu)
        }
        return wu
      }
      _rebuildBuffers() {
        for (const uu of this._uniformBuffers) uu._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, Yu.e)() ? document : null
      }
      getLoadedTexturesCache() {
        return this._internalTexturesCache
      }
      clearInternalTexturesCache() {
        this._internalTexturesCache.length = 0
      }
      getCaps() {
        return this._caps
      }
      resetTextureCache() {
        for (const uu in this._boundTexturesCache) Object.prototype.hasOwnProperty.call(this._boundTexturesCache, uu) && (this._boundTexturesCache[uu] = null);
        this._currentTextureChannel = -1
      }
      get name() {
        return this._name
      }
      set name(uu) {
        this._name = uu
      }
      static get NpmPackage() {
        return "babylonjs@9.28.0"
      }
      static get Version() {
        return "9.28.0"
      }
      getRenderingCanvas() {
        return this._renderingCanvas
      }
      getAudioContext() {
        return this._audioContext
      }
      getAudioDestination() {
        return this._audioDestination
      }
      setHardwareScalingLevel(uu) {
        this._hardwareScalingLevel = uu, this.resize()
      }
      getHardwareScalingLevel() {
        return this._hardwareScalingLevel
      }
      get doNotHandleContextLost() {
        return this._doNotHandleContextLost
      }
      set doNotHandleContextLost(uu) {
        this._doNotHandleContextLost = uu
      }
      get isStencilEnable() {
        return this._isStencilEnable
      }
      getCreationOptions() {
        return this._creationOptions
      }
      constructor(uu, Eu, ju) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new fu, this._stencilStateComposer = new Cu, this._stencilState = new bu, this._alphaState = new cu.d(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new su.d, this.onCanvasFocusObservable = new su.d, this.onNewSceneAddedObservable = new su.d, this.onResizeObservable = new su.d, this.onCanvasPointerOutObservable = new su.d, this.onEffectErrorObservable = new su.d, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new su.d, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = uu => this._renderLoop(uu), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new su.d, this.onAfterShaderCompilationObservable = new su.d, this.onBeginFrameObservable = new su.d, this.onEndFrameObservable = new su.d, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new su.d, this.pO = new su.d, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.wV = new su.d, this.onReleaseEffectsObservable = new su.d, Zu.b.Instances.push(this), this.startTime = qu.c.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, lu.c.SetMatrixPrecision(!!Eu.useLargeWorldRendering || !!Eu.useHighPrecisionMatrix), (0, Yu.i)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), Eu.antialias = uu ?? Eu.antialias, Eu.deterministicLockstep = Eu.deterministicLockstep ?? !1, Eu.lockstepMaxSteps = Eu.lockstepMaxSteps ?? 4, Eu.timeStep = Eu.timeStep ?? 1 / 60, Eu.stencil = Eu.stencil ?? !0, this._audioContext = Eu.audioEngineOptions?.audioContext ?? null, this._audioDestination = Eu.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = Eu.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!Eu.doNotHandleContextLost, this._isStencilEnable = !!Eu.stencil, this.useExactSrgbConversions = Eu.useExactSrgbConversions ?? !1, this.canvasTabIndex = Eu.canvasTabIndex ?? this.canvasTabIndex;
        const Uu = (0, Yu.m)() && window.devicePixelRatio || 1,
          Xu = Eu.limitDeviceRatio || Uu;
        ju = ju || Eu.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = ju, this._hardwareScalingLevel = ju ? 1 / Math.min(Xu, Uu) : 1, this._lastDevicePixelRatio = Uu, this._creationOptions = Eu
      }
      resize() {
        let uu, Eu, ju = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const uu = (0, Yu.m)() && window.devicePixelRatio || 1,
            Eu = this._lastDevicePixelRatio / uu;
          this._lastDevicePixelRatio = uu, this._hardwareScalingLevel *= Eu
        }
        if ((0, Yu.m)() && (0, Yu.e)())
          if (this._renderingCanvas) {
            const ju = this._renderingCanvas.getBoundingClientRect?.();
            uu = this._renderingCanvas.clientWidth || ju?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, Eu = this._renderingCanvas.clientHeight || ju?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else uu = window.innerWidth, Eu = window.innerHeight;
        else uu = this._renderingCanvas ? this._renderingCanvas.width : 100, Eu = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(uu / this._hardwareScalingLevel, Eu / this._hardwareScalingLevel, ju)
      }
      setSize(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (uu |= 0, Eu |= 0, !ju && this._renderingCanvas.width === uu && this._renderingCanvas.height === Eu) return !1;
        if (this._renderingCanvas.width = uu, this._renderingCanvas.height = Eu, this.scenes) {
          for (let uu = 0; uu < this.scenes.length; uu++) {
            const Eu = this.scenes[uu];
            for (let uu = 0; uu < Eu.cameras.length; uu++) {
              Eu.cameras[uu]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu, Cu, bu) {
        throw (0, Nu.h)("engine.rawTexture")
      }
      createRawCubeTexture(uu, Eu, ju, su, Uu, Zu, Xu, lu) {
        throw (0, Nu.h)("engine.rawTexture")
      }
      createRawTexture3D(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu, Cu) {
        throw (0, Nu.h)("engine.rawTexture")
      }
      createRawTexture2DArray(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu, Cu, bu) {
        throw (0, Nu.h)("engine.rawTexture")
      }
      _sharedInit(uu) {
        this._renderingCanvas = uu
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const uu = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== uu.indexOf("Mobile") || -1 !== uu.indexOf("Mac") && (0, Yu.e)() && "ontouchend" in document
        }, this._checkForMobile(), (0, Yu.m)() && window.addEventListener("resize", this._checkForMobile))
      }
      createVideoElement(uu) {
        return document.createElement("video")
      }
      _reportDrawCall() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._drawCalls?.addCount(uu, !1)
      }
      getFps() {
        return this._fps
      }
      getDeltaTime() {
        return this._deltaTime
      }
      isDeterministicLockStep() {
        return this._deterministicLockstep
      }
      getLockstepMaxSteps() {
        return this._lockstepMaxSteps
      }
      getTimeStep() {
        return 1e3 * this._timeStep
      }
      _createImageBitmapFromSource(uu, Eu) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(uu, Eu) {
        return createImageBitmap(uu, Eu)
      }
      resizeImageBitmap(uu, Eu, ju) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(uu) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(uu, Eu) {
        if ("undefined" === typeof document) return new OffscreenCanvas(uu, Eu);
        const ju = document.createElement("canvas");
        return ju.width = uu, ju.height = Eu, ju
      }
      createCanvas(uu, Eu) {
        return gu._CreateCanvas(uu, Eu)
      }
      static _FileToolsLoadImage(uu, Eu, ju, su, Uu, Zu, Xu) {
        if (!hu.e.loadImage) throw (0, Nu.h)("FileTools");
        return hu.e.loadImage(uu, Eu, ju, su, Uu, Zu, Xu)
      }
      _loadFile(uu, Eu, ju, su, Uu, Zu) {
        const Xu = (0, hu.l)(uu, Eu, ju, su, Uu, Zu);
        return this._activeRequests.push(Xu), Xu.onCompleteObservable.add((() => {
          const uu = this._activeRequests.indexOf(Xu); - 1 !== uu && this._activeRequests.splice(uu, 1)
        })), Xu
      }
      static _FileToolsLoadFile(uu, Eu, ju, su, Uu, Zu) {
        if (hu.e.loadFile) return hu.e.loadFile(uu, Eu, ju, su, Uu, Zu);
        throw (0, Nu.h)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), Uu.b.ResetCache();
        for (const Eu of this._activeRequests) Eu.abort();
        this._boundRenderFunction = null, this.wV.notifyObservers(this), this.wV.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, Yu.m)() && window.removeEventListener("resize", this._checkForMobile);
        const uu = Zu.b.Instances.indexOf(this);
        uu >= 0 && Zu.b.Instances.splice(uu, 1), Zu.b.Instances.length || (Zu.b.OnEnginesDisposedObservable.notifyObservers(this), Zu.b.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(uu) {
        throw (0, Nu.h)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(uu, Eu) {
        for (let ju = 0; ju < Zu.b.Instances.length; ju++) {
          const su = Zu.b.Instances[ju];
          for (let ju = 0; ju < su.scenes.length; ju++) su.scenes[ju].markAllMaterialsAsDirty(uu, Eu)
        }
      }
      static GetCompatibleTextureLoader(uu, Eu) {
        return null
      }
    }
    gu._RenderPassIdCounter = 0, gu._RescalePostProcessFactory = null, gu.CollisionsEpsilon = .001, gu.QueueNewFrame = Du
  },
  40127: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => su
    });
    class su {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? su.ShadersRepository : su.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? su.ShadersStore : su.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? su.IncludesShadersStore : su.IncludesShadersStoreWGSL
      }
    }
    su.ShadersRepository = "src/Shaders/", su.ShadersStore = {}, su.IncludesShadersStore = {}, su.ShadersRepositoryWGSL = "src/ShadersWGSL/", su.ShadersStoreWGSL = {}, su.IncludesShadersStoreWGSL = {}
  },
  40146: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => cu,
      e: () => Mu,
      f: () => Ou,
      i: () => Nu,
      k: () => Yu,
      m: () => gu,
      p: () => bu,
      q: () => fu,
      u: () => Cu,
      y: () => qu,
      A: () => lu
    });
    class su {
      constructor() {
        this._valueCache = {}, this._matrixValueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1
      }
      get isAsync() {
        return this.isParallelCompiled
      }
      get isReady() {
        return !!this.program && (!this.isParallelCompiled || this.engine._isRenderingStateCompiled(this))
      }
      _handlesSpectorRebuildCallback(uu) {
        uu && this.program && uu(this.program)
      }
      setEngine(uu) {
        this.engine = uu
      }
      _fillEffectInformation(uu, Eu, ju, su, Uu, Zu, Xu, lu) {
        const qu = this.engine;
        if (qu.supportsUniformBuffers)
          for (const Cu in Eu) uu.bindUniformBlock(Cu, Eu[Cu]);
        let fu;
        for (this.engine.getUniforms(this, ju).forEach(((uu, Eu) => {
            su[ju[Eu]] = uu
          })), this._uniforms = su, fu = 0; fu < Uu.length; fu++) {
          null == uu.getUniform(Uu[fu]) && (Uu.splice(fu, 1), fu--)
        }
        Uu.forEach(((uu, Eu) => {
          Zu[uu] = Eu
        }));
        for (const Cu of qu.getAttributes(this, Xu)) lu.push(Cu)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(uu, Eu) {
        const ju = this._valueCache[uu],
          su = Eu.updateFlag;
        if (void 0 !== ju && ju === su) return !1;
        const Uu = Eu.Osu();
        let Zu = this._matrixValueCache[uu];
        if (void 0 !== ju && null !== ju && void 0 !== Zu) {
          let Eu = !0;
          for (let uu = 15; uu >= 0; uu--)
            if (Zu[uu] !== Uu[uu]) {
              Eu = !1;
              break
            } if (Eu) return this._valueCache[uu] = su, !1
        }
        return void 0 === Zu && (Zu = this._matrixValueCache[uu] = new Float32Array(16)), Zu.set(Uu), this._valueCache[uu] = su, !0
      }
      _cacheFloat2(uu, Eu, ju) {
        let su = this._valueCache[uu];
        if (!su || 2 !== su.length) return su = [Eu, ju], this._valueCache[uu] = su, !0;
        let Uu = !1;
        return su[0] !== Eu && (su[0] = Eu, Uu = !0), su[1] !== ju && (su[1] = ju, Uu = !0), Uu
      }
      _cacheFloat3(uu, Eu, ju, su) {
        let Uu = this._valueCache[uu];
        if (!Uu || 3 !== Uu.length) return Uu = [Eu, ju, su], this._valueCache[uu] = Uu, !0;
        let Zu = !1;
        return Uu[0] !== Eu && (Uu[0] = Eu, Zu = !0), Uu[1] !== ju && (Uu[1] = ju, Zu = !0), Uu[2] !== su && (Uu[2] = su, Zu = !0), Zu
      }
      _cacheFloat4(uu, Eu, ju, su, Uu) {
        let Zu = this._valueCache[uu];
        if (!Zu || 4 !== Zu.length) return Zu = [Eu, ju, su, Uu], this._valueCache[uu] = Zu, !0;
        let Xu = !1;
        return Zu[0] !== Eu && (Zu[0] = Eu, Xu = !0), Zu[1] !== ju && (Zu[1] = ju, Xu = !0), Zu[2] !== su && (Zu[2] = su, Xu = !0), Zu[3] !== Uu && (Zu[3] = Uu, Xu = !0), Xu
      }
      setInt(uu, Eu) {
        const ju = this._valueCache[uu];
        void 0 !== ju && ju === Eu || this.engine.setInt(this._uniforms[uu], Eu) && (this._valueCache[uu] = Eu)
      }
      setInt2(uu, Eu, ju) {
        this._cacheFloat2(uu, Eu, ju) && (this.engine.setInt2(this._uniforms[uu], Eu, ju) || (this._valueCache[uu] = null))
      }
      setInt3(uu, Eu, ju, su) {
        this._cacheFloat3(uu, Eu, ju, su) && (this.engine.setInt3(this._uniforms[uu], Eu, ju, su) || (this._valueCache[uu] = null))
      }
      setInt4(uu, Eu, ju, su, Uu) {
        this._cacheFloat4(uu, Eu, ju, su, Uu) && (this.engine.setInt4(this._uniforms[uu], Eu, ju, su, Uu) || (this._valueCache[uu] = null))
      }
      setIntArray(uu, Eu) {
        this._valueCache[uu] = null, this.engine.setIntArray(this._uniforms[uu], Eu)
      }
      setIntArray2(uu, Eu) {
        this._valueCache[uu] = null, this.engine.setIntArray2(this._uniforms[uu], Eu)
      }
      setIntArray3(uu, Eu) {
        this._valueCache[uu] = null, this.engine.setIntArray3(this._uniforms[uu], Eu)
      }
      setIntArray4(uu, Eu) {
        this._valueCache[uu] = null, this.engine.setIntArray4(this._uniforms[uu], Eu)
      }
      setUInt(uu, Eu) {
        const ju = this._valueCache[uu];
        void 0 !== ju && ju === Eu || this.engine.setUInt(this._uniforms[uu], Eu) && (this._valueCache[uu] = Eu)
      }
      setUInt2(uu, Eu, ju) {
        this._cacheFloat2(uu, Eu, ju) && (this.engine.setUInt2(this._uniforms[uu], Eu, ju) || (this._valueCache[uu] = null))
      }
      setUInt3(uu, Eu, ju, su) {
        this._cacheFloat3(uu, Eu, ju, su) && (this.engine.setUInt3(this._uniforms[uu], Eu, ju, su) || (this._valueCache[uu] = null))
      }
      setUInt4(uu, Eu, ju, su, Uu) {
        this._cacheFloat4(uu, Eu, ju, su, Uu) && (this.engine.setUInt4(this._uniforms[uu], Eu, ju, su, Uu) || (this._valueCache[uu] = null))
      }
      setUIntArray(uu, Eu) {
        this._valueCache[uu] = null, this.engine.setUIntArray(this._uniforms[uu], Eu)
      }
      setUIntArray2(uu, Eu) {
        this._valueCache[uu] = null, this.engine.setUIntArray2(this._uniforms[uu], Eu)
      }
      setUIntArray3(uu, Eu) {
        this._valueCache[uu] = null, this.engine.setUIntArray3(this._uniforms[uu], Eu)
      }
      setUIntArray4(uu, Eu) {
        this._valueCache[uu] = null, this.engine.setUIntArray4(this._uniforms[uu], Eu)
      }
      setArray(uu, Eu) {
        this._valueCache[uu] = null, this.engine.setArray(this._uniforms[uu], Eu)
      }
      setArray2(uu, Eu) {
        this._valueCache[uu] = null, this.engine.setArray2(this._uniforms[uu], Eu)
      }
      setArray3(uu, Eu) {
        this._valueCache[uu] = null, this.engine.setArray3(this._uniforms[uu], Eu)
      }
      setArray4(uu, Eu) {
        this._valueCache[uu] = null, this.engine.setArray4(this._uniforms[uu], Eu)
      }
      setMatrices(uu, Eu) {
        Eu && (this._valueCache[uu] = null, this.engine.setMatrices(this._uniforms[uu], Eu))
      }
      setMatrix(uu, Eu) {
        this._cacheMatrix(uu, Eu) && (this.engine.setMatrices(this._uniforms[uu], Eu.Osu()) || (this._valueCache[uu] = null))
      }
      setMatrix3x3(uu, Eu) {
        this._valueCache[uu] = null, this.engine.setMatrix3x3(this._uniforms[uu], Eu)
      }
      setMatrix2x2(uu, Eu) {
        this._valueCache[uu] = null, this.engine.setMatrix2x2(this._uniforms[uu], Eu)
      }
      setFloat(uu, Eu) {
        const ju = this._valueCache[uu];
        void 0 !== ju && ju === Eu || this.engine.setFloat(this._uniforms[uu], Eu) && (this._valueCache[uu] = Eu)
      }
      setVector2(uu, Eu) {
        this._cacheFloat2(uu, Eu.x, Eu.y) && (this.engine.setFloat2(this._uniforms[uu], Eu.x, Eu.y) || (this._valueCache[uu] = null))
      }
      setFloat2(uu, Eu, ju) {
        this._cacheFloat2(uu, Eu, ju) && (this.engine.setFloat2(this._uniforms[uu], Eu, ju) || (this._valueCache[uu] = null))
      }
      setVector3(uu, Eu) {
        this._cacheFloat3(uu, Eu.x, Eu.y, Eu.z) && (this.engine.setFloat3(this._uniforms[uu], Eu.x, Eu.y, Eu.z) || (this._valueCache[uu] = null))
      }
      setFloat3(uu, Eu, ju, su) {
        this._cacheFloat3(uu, Eu, ju, su) && (this.engine.setFloat3(this._uniforms[uu], Eu, ju, su) || (this._valueCache[uu] = null))
      }
      setVector4(uu, Eu) {
        this._cacheFloat4(uu, Eu.x, Eu.y, Eu.z, Eu.w) && (this.engine.setFloat4(this._uniforms[uu], Eu.x, Eu.y, Eu.z, Eu.w) || (this._valueCache[uu] = null))
      }
      setQuaternion(uu, Eu) {
        this._cacheFloat4(uu, Eu.x, Eu.y, Eu.z, Eu.w) && (this.engine.setFloat4(this._uniforms[uu], Eu.x, Eu.y, Eu.z, Eu.w) || (this._valueCache[uu] = null))
      }
      setFloat4(uu, Eu, ju, su, Uu) {
        this._cacheFloat4(uu, Eu, ju, su, Uu) && (this.engine.setFloat4(this._uniforms[uu], Eu, ju, su, Uu) || (this._valueCache[uu] = null))
      }
      setColor3(uu, Eu) {
        this._cacheFloat3(uu, Eu.r, Eu.g, Eu.b) && (this.engine.setFloat3(this._uniforms[uu], Eu.r, Eu.g, Eu.b) || (this._valueCache[uu] = null))
      }
      setColor4(uu, Eu, ju) {
        this._cacheFloat4(uu, Eu.r, Eu.g, Eu.b, ju) && (this.engine.setFloat4(this._uniforms[uu], Eu.r, Eu.g, Eu.b, ju) || (this._valueCache[uu] = null))
      }
      setDirectColor4(uu, Eu) {
        this._cacheFloat4(uu, Eu.r, Eu.g, Eu.b, Eu.a) && (this.engine.setFloat4(this._uniforms[uu], Eu.r, Eu.g, Eu.b, Eu.a) || (this._valueCache[uu] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var Uu = ju(40149);
    const Zu = new WeakMap,
      Xu = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function lu(uu) {
      let Eu = Zu.get(uu);
      if (!Eu) {
        if (!uu) return Xu;
        Eu = {
          _webGLVersion: uu.TEXTURE_BINDING_3D ? 2 : 1,
          _context: uu,
          parallelShaderCompile: uu.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, Zu.set(uu, Eu)
      }
      return Eu
    }

    function qu(uu) {
      Zu.delete(uu)
    }

    function fu(uu, Eu, ju, su, Uu, Zu) {
      const Xu = lu(su);
      Zu || (Zu = Xu._createShaderProgramInjection ?? cu);
      return Zu(uu, Du(Eu, "vertex", su, Xu._contextWasLost), Du(ju, "fragment", su, Xu._contextWasLost), su, Uu, Xu.validateShaderPrograms)
    }

    function Cu(uu, Eu, ju, su, Uu) {
      let Zu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Xu = arguments.length > 6 ? arguments[6] : void 0;
      const qu = lu(Uu);
      Xu || (Xu = qu._createShaderProgramInjection ?? cu);
      const fu = qu._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return Xu(uu, hu(Eu, "vertex", su, fu, Uu, qu._contextWasLost), hu(ju, "fragment", su, fu, Uu, qu._contextWasLost), Uu, Zu, qu.validateShaderPrograms)
    }

    function bu(uu, Eu) {
      const ju = new su,
        Uu = lu(uu);
      return Uu.parallelShaderCompile && !Uu.disableParallelShaderCompile && (ju.isParallelCompiled = !0), ju.context = Uu._context, ju
    }

    function cu(uu, Eu, ju, su) {
      let Uu = arguments.length > 5 ? arguments[5] : void 0;
      const Zu = su.createProgram();
      if (uu.program = Zu, !Zu) throw new Error("Unable to create program");
      return su.attachShader(Zu, Eu), su.attachShader(Zu, ju), su.linkProgram(Zu), uu.context = su, uu.vertexShader = Eu, uu.fragmentShader = ju, uu.isParallelCompiled || Ou(uu, su, Uu), Zu
    }

    function Nu(uu, Eu, ju) {
      const su = uu;
      if (su._isDisposed) return !1;
      const Uu = lu(Eu);
      return !!(Uu && Uu.parallelShaderCompile && Uu.parallelShaderCompile.COMPLETION_STATUS_KHR && su.program && Eu.getProgramParameter(su.program, Uu.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (Ou(su, Eu, ju), !0)
    }

    function Ou(uu, Eu, ju) {
      const su = uu.context,
        Uu = uu.vertexShader,
        Zu = uu.fragmentShader,
        Xu = uu.program;
      if (!su.getProgramParameter(Xu, su.LINK_STATUS)) {
        if (!Eu.getShaderParameter(Uu, Eu.COMPILE_STATUS)) {
          const ju = Eu.getShaderInfoLog(Uu);
          if (ju) throw uu.vertexCompilationError = ju, new Error("VERTEX SHADER " + ju)
        }
        if (!Eu.getShaderParameter(Zu, Eu.COMPILE_STATUS)) {
          const ju = Eu.getShaderInfoLog(Zu);
          if (ju) throw uu.fragmentCompilationError = ju, new Error("FRAGMENT SHADER " + ju)
        }
        const ju = su.getProgramInfoLog(Xu);
        if (ju) throw uu.programLinkError = ju, new Error(ju)
      }
      if (ju) {
        su.validateProgram(Xu);
        if (!su.getProgramParameter(Xu, su.VALIDATE_STATUS)) {
          const Eu = su.getProgramInfoLog(Xu);
          if (Eu) throw uu.programValidationError = Eu, new Error(Eu)
        }
      }
      su.deleteShader(Uu), su.deleteShader(Zu), uu.vertexShader = void 0, uu.fragmentShader = void 0, uu.onCompiled && (uu.onCompiled(), uu.onCompiled = void 0)
    }

    function Yu(uu, Eu, ju, su, Uu, Zu, Xu, qu, bu) {
      let cu = arguments.length > 10 ? arguments[10] : void 0,
        Nu = arguments.length > 11 ? arguments[11] : void 0,
        Ou = arguments.length > 12 ? arguments[12] : void 0;
      const Yu = lu(uu.context);
      Nu || (Nu = Yu.createRawShaderProgramInjection ?? fu), Ou || (Ou = Yu.createShaderProgramInjection ?? Cu);
      const hu = uu;
      hu.program = su ? Nu(hu, Eu, ju, hu.context, bu) : Ou(hu, Eu, ju, qu, hu.context, bu), hu.program.__SPECTOR_rebuildProgram = Xu, cu()
    }

    function hu(uu, Eu, ju, su, Zu, Xu) {
      return Du((0, Uu.g)(uu, ju, su), Eu, Zu, Xu)
    }

    function Du(uu, Eu, ju, su) {
      const Uu = ju.createShader("vertex" === Eu ? ju.VERTEX_SHADER : ju.FRAGMENT_SHADER);
      if (!Uu) {
        let uu, Uu = ju.NO_ERROR;
        for (;
          (uu = ju.getError()) !== ju.NO_ERROR;) Uu = uu;
        throw new Error(`Something went wrong while creating a gl ${Eu} shader object. gl error=${Uu}, gl isContextLost=${ju.isContextLost()}, _contextWasLost=${su}`)
      }
      return ju.shaderSource(Uu, uu), ju.compileShader(Uu), Uu
    }

    function gu(uu, Eu) {
      Eu.useProgram(uu)
    }

    function Mu(uu, Eu) {
      const ju = uu;
      if (!ju.isParallelCompiled) return void Eu(uu);
      const su = ju.onCompiled;
      ju.onCompiled = () => {
        su?.(), Eu(uu)
      }
    }
  },
  40118: (uu, Eu, ju) => {
    ju.d(Eu, {
      ThinEngine: () => Gu
    });
    var su = ju(40121),
      Uu = ju(40146),
      Zu = ju(40168),
      Xu = ju(40179),
      lu = ju(39032),
      qu = ju(40138);
    class fu {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(uu, Eu, ju, su, Uu) {
        if (Uu.drawBuffersExtensionDisabled) {
          const Eu = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          uu = uu.replace(Eu, "")
        }
        return uu
      }
    }
    const Cu = /(flat\s)?\s*varying\s*.*/;
    class bu {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(uu) {
        return uu.replace("attribute", "in")
      }
      varyingCheck(uu, Eu) {
        return Cu.test(uu)
      }
      varyingProcessor(uu, Eu) {
        return uu.replace("varying", Eu ? "in" : "out")
      }
      postProcessor(uu, Eu, ju) {
        const su = -1 !== uu.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (uu = (uu = uu.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), ju) {
          const ju = -1 !== uu.search(/layout *\(location *= *0\) *out/g),
            Uu = -1 !== Eu.indexOf("#define DUAL_SOURCE_BLENDING"),
            Zu = Uu ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          Uu && (uu = "#extension GL_EXT_blend_func_extended : require\n" + uu), uu = (uu = (uu = (uu = (uu = (uu = (uu = uu.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (su || ju ? "" : Zu) + "void main(")
        } else {
          Eu.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (uu = "invariant gl_Position;\n" + uu);
          if (-1 !== Eu.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + uu
        }
        return uu
      }
    }
    var cu = ju(40184),
      Nu = ju(40192),
      Ou = ju(40198),
      Yu = ju(40108),
      hu = ju(40149),
      Du = ju(40131),
      gu = ju(40206),
      Mu = ju(40172);
    class eu {}
    class Gu extends Zu.d {
      get name() {
        return this._name
      }
      set name(uu) {
        this._name = uu
      }
      get version() {
        return this._webGLVersion
      }
      static get ShadersRepository() {
        return su.b.ShadersRepository
      }
      static set ShadersRepository(uu) {
        su.b.ShadersRepository = uu
      }
      get supportsUniformBuffers() {
        return this.uY > 1 && !this.disableUniformBuffers
      }
      get needPOTTextures() {
        return this._webGLVersion < 2 || this.forcePOTTextures
      }
      get _supportsHardwareTextureRescaling() {
        return !1
      }
      snapshotRenderingReset() {
        this.snapshotRendering = !1
      }
      constructor(uu, Eu, ju, su) {
        if (ju = ju || {}, super(Eu ?? ju.antialias, ju, su), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !uu) return;
        let Zu;
        if (uu.getContext) {
          if (Zu = uu, void 0 === ju.preserveDrawingBuffer && (ju.preserveDrawingBuffer = !1), void 0 === ju.xrCompatible && (ju.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const uu = navigator.userAgent;
            for (const Eu of Gu.ExceptionList) {
              const su = Eu.key,
                Uu = Eu.targets;
              if (new RegExp(su).test(uu)) {
                if (Eu.capture && Eu.captureConstraint) {
                  const ju = Eu.capture,
                    su = Eu.captureConstraint,
                    Uu = new RegExp(ju).exec(uu);
                  if (Uu && Uu.length > 0) {
                    if (parseInt(Uu[Uu.length - 1]) >= su) continue
                  }
                }
                for (const uu of Uu) switch (uu) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    ju.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, Uu.y)(this._gl)
            } : (this._onContextLost = uu => {
              uu.preventDefault(), this._contextWasLost = !0, (0, Uu.y)(this._gl), lu.b.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, Zu.addEventListener("webglcontextrestored", this._onContextRestored, !1), ju.powerPreference = ju.powerPreference || "high-performance"), Zu.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (ju.xrCompatible = !1), !ju.disableWebGL2Support) try {
            this._gl = Zu.getContext("webgl2", ju) || Zu.getContext("experimental-webgl2", ju), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (Cu) {}
          if (!this._gl) {
            if (!Zu) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = Zu.getContext("webgl", ju) || Zu.getContext("experimental-webgl", ju)
            } catch (Cu) {
              throw new Error("WebGL not supported", {
                cause: Cu
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = uu, Zu = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const Eu = this._gl.getContextAttributes();
          Eu && (ju.stencil = Eu.stencil)
        }
        this._sharedInit(Zu), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== ju.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = ju.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let Uu = 0; Uu < this._caps.maxVertexAttribs; Uu++) this._currentBufferPointers[Uu] = new eu;
        this._shaderProcessor = this.uY > 1 ? new bu : new fu;
        const Xu = `Babylon.js v${Gu.Version}`;
        lu.b.Log(Xu + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", Xu);
        const qu = (0, Uu.A)(this._gl);
        qu.validateShaderPrograms = this.validateShaderPrograms, qu.parallelShaderCompile = this._caps.parallelShaderCompile
      }
      _clearEmptyResources() {
        this._dummyFramebuffer = null, super._clearEmptyResources()
      }
      _getShaderProcessingContext(uu) {
        return null
      }
      areAllEffectsReady() {
        for (const uu in this._compiledEffects) {
          if (!this._compiledEffects[uu].isReady()) return !1
        }
        return !0
      }
      _initGLContext() {
        this._caps = {
          maxTexturesImageUnits: this._gl.getParameter(this._gl.MAX_TEXTURE_IMAGE_UNITS),
          maxCombinedTexturesImageUnits: this._gl.getParameter(this._gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
          maxVertexTextureImageUnits: this._gl.getParameter(this._gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
          maxTextureSize: this._gl.getParameter(this._gl.MAX_TEXTURE_SIZE),
          maxSamples: this._webGLVersion > 1 ? this._gl.getParameter(this._gl.MAX_SAMPLES) : 1,
          maxCubemapTextureSize: this._gl.getParameter(this._gl.MAX_CUBE_MAP_TEXTURE_SIZE),
          maxRenderTextureSize: this._gl.getParameter(this._gl.MAX_RENDERBUFFER_SIZE),
          maxVertexAttribs: this._gl.getParameter(this._gl.MAX_VERTEX_ATTRIBS),
          maxVaryingVectors: this._gl.getParameter(this._gl.MAX_VARYING_VECTORS),
          maxFragmentUniformVectors: this._gl.getParameter(this._gl.MAX_FRAGMENT_UNIFORM_VECTORS),
          maxVertexUniformVectors: this._gl.getParameter(this._gl.MAX_VERTEX_UNIFORM_VECTORS),
          shaderFloatPrecision: 0,
          parallelShaderCompile: this._gl.getExtension("KHR_parallel_shader_compile") || void 0,
          standardDerivatives: this._webGLVersion > 1 || null !== this._gl.getExtension("OES_standard_derivatives"),
          maxAnisotropy: 1,
          astc: this._gl.getExtension("WEBGL_compressed_texture_astc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_astc"),
          bptc: this._gl.getExtension("EXT_texture_compression_bptc") || this._gl.getExtension("WEBKIT_EXT_texture_compression_bptc"),
          s3tc: this._gl.getExtension("WEBGL_compressed_texture_s3tc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"),
          s3tc_srgb: this._gl.getExtension("WEBGL_compressed_texture_s3tc_srgb") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc_srgb"),
          pvrtc: this._gl.getExtension("WEBGL_compressed_texture_pvrtc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
          etc1: this._gl.getExtension("WEBGL_compressed_texture_etc1") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_etc1"),
          etc2: this._gl.getExtension("WEBGL_compressed_texture_etc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_etc") || this._gl.getExtension("WEBGL_compressed_texture_es3_0"),
          textureAnisotropicFilterExtension: this._gl.getExtension("EXT_texture_filter_anisotropic") || this._gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || this._gl.getExtension("MOZ_EXT_texture_filter_anisotropic"),
          uintIndices: this._webGLVersion > 1 || null !== this._gl.getExtension("OES_element_index_uint"),
          fragmentDepthSupported: this._webGLVersion > 1 || null !== this._gl.getExtension("EXT_frag_depth"),
          highPrecisionShaderSupported: !1,
          timerQuery: this._gl.getExtension("EXT_disjoint_timer_query_webgl2") || this._gl.getExtension("EXT_disjoint_timer_query"),
          supportOcclusionQuery: this._webGLVersion > 1,
          canUseTimestampForTimerQuery: !1,
          drawBuffersExtension: !1,
          maxMSAASamples: 1,
          colorBufferFloat: !!(this._webGLVersion > 1 && this._gl.getExtension("EXT_color_buffer_float")),
          blendFloat: null !== this._gl.getExtension("EXT_float_blend"),
          supportFloatTexturesResolve: !1,
          rg11b10ufColorRenderable: !1,
          colorBufferHalfFloat: !!(this._webGLVersion > 1 && this._gl.getExtension("EXT_color_buffer_half_float")),
          textureFloat: !!(this._webGLVersion > 1 || this._gl.getExtension("OES_texture_float")),
          textureHalfFloat: !!(this._webGLVersion > 1 || this._gl.getExtension("OES_texture_half_float")),
          textureHalfFloatRender: !1,
          textureFloatLinearFiltering: !1,
          textureFloatRender: !1,
          textureHalfFloatLinearFiltering: !1,
          vertexArrayObject: !1,
          instancedArrays: !1,
          textureLOD: !!(this._webGLVersion > 1 || this._gl.getExtension("EXT_shader_texture_lod")),
          texelFetch: 1 !== this._webGLVersion,
          blendMinMax: !1,
          multiview: this._gl.getExtension("OVR_multiview2"),
          oculusMultiview: this._gl.getExtension("OCULUS_multiview"),
          depthTextureExtension: !1,
          canUseGLInstanceID: this._webGLVersion > 1,
          canUseGLVertexID: this._webGLVersion > 1,
          supportComputeShaders: !1,
          supportSRGBBuffers: !1,
          supportTransformFeedbacks: this._webGLVersion > 1,
          textureMaxLevel: this._webGLVersion > 1,
          texture2DArrayMaxLayerCount: this._webGLVersion > 1 ? this._gl.getParameter(this._gl.MAX_ARRAY_TEXTURE_LAYERS) : 128,
          disableMorphTargetTexture: !1,
          textureNorm16: !!this._gl.getExtension("EXT_texture_norm16"),
          blendParametersPerTarget: !1,
          dualSourceBlending: !1,
          supportReadWriteStorageTextures: !1
        }, this._caps.supportFloatTexturesResolve = this._caps.colorBufferFloat, this._caps.rg11b10ufColorRenderable = this._caps.colorBufferFloat, this._glVersion = this._gl.getParameter(this._gl.VERSION);
        const uu = this._gl.getExtension("WEBGL_debug_renderer_info");
        null != uu && (this._glRenderer = this._gl.getParameter(uu.UNMASKED_RENDERER_WEBGL), this._glVendor = this._gl.getParameter(uu.UNMASKED_VENDOR_WEBGL)), this._glVendor || (this._glVendor = this._gl.getParameter(this._gl.VENDOR) || "Unknown vendor"), this._glRenderer || (this._glRenderer = this._gl.getParameter(this._gl.RENDERER) || "Unknown renderer"), 36193 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 36193), 34842 !== this._gl.RGBA16F && (this._gl.RGBA16F = 34842), 34836 !== this._gl.RGBA32F && (this._gl.RGBA32F = 34836), 35056 !== this._gl.DEPTH24_STENCIL8 && (this._gl.DEPTH24_STENCIL8 = 35056), this._caps.timerQuery && (1 === this._webGLVersion && (this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery)), this._caps.canUseTimestampForTimerQuery = (this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT) ?? 0) > 0), this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.textureFloatLinearFiltering = !(!this._caps.textureFloat || !this._gl.getExtension("OES_texture_float_linear")), this._caps.textureFloatRender = !(!this._caps.textureFloat || !this._canRenderToFloatFramebuffer()), this._caps.textureHalfFloatLinearFiltering = !!(this._webGLVersion > 1 || this._caps.textureHalfFloat && this._gl.getExtension("OES_texture_half_float_linear")), this._caps.textureNorm16 && (this._gl.R16_EXT = 33322, this._gl.RG16_EXT = 33324, this._gl.RGB16_EXT = 32852, this._gl.RGBA16_EXT = 32859, this._gl.R16_SNORM_EXT = 36760, this._gl.RG16_SNORM_EXT = 36761, this._gl.RGB16_SNORM_EXT = 36762, this._gl.RGBA16_SNORM_EXT = 36763);
        const Eu = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!Eu, this._alphaState = new Mu.d(this._caps.blendParametersPerTarget), Eu && (this._gl.blendEquationSeparateIndexed = Eu.blendEquationSeparateiOES.bind(Eu), this._gl.blendEquationIndexed = Eu.blendEquationiOES.bind(Eu), this._gl.blendFuncSeparateIndexed = Eu.blendFuncSeparateiOES.bind(Eu), this._gl.blendFuncIndexed = Eu.blendFunciOES.bind(Eu), this._gl.colorMaskIndexed = Eu.colorMaskiOES.bind(Eu), this._gl.disableIndexed = Eu.disableiOES.bind(Eu), this._gl.enableIndexed = Eu.enableiOES.bind(Eu)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const uu = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== uu) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = uu.drawBuffersWEBGL.bind(uu), this._caps.maxDrawBuffers = this._gl.getParameter(uu.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let Eu = 0; Eu < 16; Eu++) this._gl["COLOR_ATTACHMENT" + Eu + "_WEBGL"] = uu["COLOR_ATTACHMENT" + Eu + "_WEBGL"]
          }
        }
        if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
        else {
          const uu = this._gl.getExtension("WEBGL_depth_texture");
          null != uu && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = uu.UNSIGNED_INT_24_8_WEBGL)
        }
        if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
        else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
        else {
          const uu = this._gl.getExtension("OES_vertex_array_object");
          null != uu && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = uu.createVertexArrayOES.bind(uu), this._gl.bindVertexArray = uu.bindVertexArrayOES.bind(uu), this._gl.deleteVertexArray = uu.deleteVertexArrayOES.bind(uu))
        }
        if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
        else {
          const uu = this._gl.getExtension("ANGLE_instanced_arrays");
          null != uu ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = uu.drawArraysInstancedANGLE.bind(uu), this._gl.drawElementsInstanced = uu.drawElementsInstancedANGLE.bind(uu), this._gl.vertexAttribDivisor = uu.vertexAttribDivisorANGLE.bind(uu)) : this._caps.instancedArrays = !1
        }
        if (this._gl.getShaderPrecisionFormat) {
          const uu = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
            Eu = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (uu && Eu && (this._caps.highPrecisionShaderSupported = 0 !== uu.precision && 0 !== Eu.precision, this._caps.shaderFloatPrecision = Math.min(uu.precision, Eu.precision)), !this._shouldUseHighPrecisionShader) {
            const uu = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              Eu = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            uu && Eu && (this._caps.shaderFloatPrecision = Math.min(uu.precision, Eu.precision))
          }
          this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
        }
        if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
        else {
          const uu = this._gl.getExtension("EXT_blend_minmax");
          null != uu && (this._caps.blendMinMax = !0, this._gl.MAX = uu.MAX_EXT, this._gl.MIN = uu.MIN_EXT)
        }
        if (!this._caps.supportSRGBBuffers) {
          if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
            SRGB: WebGL2RenderingContext.SRGB,
            SRGB8: WebGL2RenderingContext.SRGB8,
            SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
          };
          else {
            const uu = this._gl.getExtension("EXT_sRGB");
            null != uu && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
              SRGB: uu.SRGB_EXT,
              SRGB8: uu.SRGB_ALPHA_EXT,
              SRGB8_ALPHA8: uu.SRGB_ALPHA_EXT
            })
          }
          if (this._creationOptions) {
            const uu = this._creationOptions.forceSRGBBufferSupportState;
            void 0 !== uu && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && uu)
          }
        }
        this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
        for (let ju = 0; ju < this._maxSimultaneousTextures; ju++) this._nextFreeTextureSlots.push(ju);
        "Mali-G72" === this._glRenderer && (this._caps.disableMorphTargetTexture = !0)
      }
      _initFeatures() {
        this._features = {
          forceBitmapOverHTMLImageElement: "undefined" === typeof HTMLImageElement,
          supportRenderAndCopyToLodForFloatTextures: 1 !== this._webGLVersion,
          supportDepthStencilTexture: 1 !== this._webGLVersion,
          supportShadowSamplers: 1 !== this._webGLVersion,
          uniformBufferHardCheckMatrix: !1,
          allowTexturePrefiltering: 1 !== this._webGLVersion,
          trackUbosInFrame: !1,
          checkUbosContentBeforeUpload: !1,
          supportCSM: 1 !== this._webGLVersion,
          basisNeedsPOT: 1 === this._webGLVersion,
          support3DTextures: 1 !== this._webGLVersion,
          needTypeSuffixInShaderConstants: 1 !== this._webGLVersion,
          supportMSAA: 1 !== this._webGLVersion,
          supportSSAO2: 1 !== this._webGLVersion,
          supportIBLShadows: 1 !== this._webGLVersion,
          supportExtendedTextureFormats: 1 !== this._webGLVersion,
          supportSwitchCaseInShader: 1 !== this._webGLVersion,
          supportSyncTextureRead: !0,
          needsInvertingBitmap: !0,
          useUBOBindingCache: !0,
          needShaderCodeInlining: !1,
          needToAlwaysBindUniformBuffers: !1,
          supportRenderPasses: !1,
          supportSpriteInstancing: !0,
          forceVertexBufferStrideAndOffsetMultiple4Bytes: !1,
          _checkNonFloatVertexBuffersDontRecreatePipelineContext: !1
        }
      }
      get uY() {
        return this._webGLVersion
      }
      getClassName() {
        return "ThinEngine"
      }
      _prepareWorkingCanvas() {
        if (this._workingCanvas) return;
        this._workingCanvas = this.createCanvas(1, 1);
        const uu = this._workingCanvas.getContext("2d");
        uu && (this._workingContext = uu)
      }
      getInfo() {
        return this.getGlInfo()
      }
      getGlInfo() {
        return {
          vendor: this._glVendor,
          renderer: this._glRenderer,
          version: this._glVersion
        }
      }
      extractDriverInfo() {
        const uu = this.getGlInfo();
        return uu && uu.renderer ? uu.renderer : ""
      }
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
      }
      clear(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const Zu = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = Zu;
        let Xu = 0;
        if (Eu && uu) {
          let Eu = !0;
          if (this._currentRenderTarget) {
            const ju = this._currentRenderTarget.texture?.format;
            if (void 0 !== ju && (0, gu.e)(ju)) {
              const ju = this._currentRenderTarget.texture?.type;
              void 0 !== ju && (0, gu.i)(ju) ? (Gu._TempClearColorUint32[0] = 255 * uu.r, Gu._TempClearColorUint32[1] = 255 * uu.g, Gu._TempClearColorUint32[2] = 255 * uu.b, Gu._TempClearColorUint32[3] = 255 * uu.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, Gu._TempClearColorUint32), Eu = !1) : (Gu._TempClearColorInt32[0] = 255 * uu.r, Gu._TempClearColorInt32[1] = 255 * uu.g, Gu._TempClearColorInt32[2] = 255 * uu.b, Gu._TempClearColorInt32[3] = 255 * uu.a, this._gl.clearBufferiv(this._gl.COLOR, 0, Gu._TempClearColorInt32), Eu = !1)
            }
          }
          Eu && (this._gl.clearColor(uu.r, uu.g, uu.b, void 0 !== uu.a ? uu.a : 1), Xu |= this._gl.COLOR_BUFFER_BIT)
        }
        ju && (this.bsu ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), Xu |= this._gl.DEPTH_BUFFER_BIT), su && (this._gl.clearStencil(Uu), Xu |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(Xu)
      }
      _clearColorAttachment(uu, Eu, ju, su) {
        if ((0, gu.e)(ju)) {
          const ju = (0, gu.i)(su),
            Uu = ju ? Gu._TempClearColorUint32 : Gu._TempClearColorInt32;
          return Uu[0] = Eu.r, Uu[1] = Eu.g, Uu[2] = Eu.b, Uu[3] = Eu.a, void(ju ? this._gl.clearBufferuiv(this._gl.COLOR, uu, Uu) : this._gl.clearBufferiv(this._gl.COLOR, uu, Uu))
        }
        Gu._TempClearColorFloat32[0] = Eu.r, Gu._TempClearColorFloat32[1] = Eu.g, Gu._TempClearColorFloat32[2] = Eu.b, Gu._TempClearColorFloat32[3] = Eu.a, this._gl.clearBufferfv(this._gl.COLOR, uu, Gu._TempClearColorFloat32)
      }
      _viewport(uu, Eu, ju, su) {
        uu === this._viewportCached.x && Eu === this._viewportCached.y && ju === this._viewportCached.z && su === this._viewportCached.w || (this._viewportCached.x = uu, this._viewportCached.y = Eu, this._viewportCached.z = ju, this._viewportCached.w = su, this._gl.viewport(uu, Eu, ju, su))
      }
      JG() {
        super.JG(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ju = arguments.length > 2 ? arguments[2] : void 0,
          su = arguments.length > 3 ? arguments[3] : void 0,
          Uu = arguments.length > 4 ? arguments[4] : void 0,
          Zu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Xu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const qu = uu;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = uu, this._integerMRTAttachmentsMask = !uu.isMulti && uu.texture && (0, gu.e)(uu.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(qu._framebuffer);
        const fu = this._gl;
        uu.isMulti || (uu.is2DArray || uu.is3D ? (fu.framebufferTextureLayer(fu.FRAMEBUFFER, fu.COLOR_ATTACHMENT0, uu.texture._hardwareTexture?.underlyingResource, Zu, Xu), qu._currentLOD = Zu) : uu.isCube ? fu.framebufferTexture2D(fu.FRAMEBUFFER, fu.COLOR_ATTACHMENT0, fu.TEXTURE_CUBE_MAP_POSITIVE_X + Eu, uu.texture._hardwareTexture?.underlyingResource, Zu) : qu._currentLOD !== Zu && (fu.framebufferTexture2D(fu.FRAMEBUFFER, fu.COLOR_ATTACHMENT0, fu.TEXTURE_2D, uu.texture._hardwareTexture?.underlyingResource, Zu), qu._currentLOD = Zu));
        const Cu = uu._depthStencilTexture;
        if (Cu) {
          uu.is3D && (uu.texture.width === Cu.width && uu.texture.height === Cu.height && uu.texture.depth === Cu.depth || lu.b.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const ju = uu._depthStencilTextureWithStencil ? fu.DEPTH_STENCIL_ATTACHMENT : fu.DEPTH_ATTACHMENT;
          uu.is2DArray || uu.is3D ? fu.framebufferTextureLayer(fu.FRAMEBUFFER, ju, Cu._hardwareTexture?.underlyingResource, Zu, Xu) : uu.isCube ? fu.framebufferTexture2D(fu.FRAMEBUFFER, ju, fu.TEXTURE_CUBE_MAP_POSITIVE_X + Eu, Cu._hardwareTexture?.underlyingResource, Zu) : fu.framebufferTexture2D(fu.FRAMEBUFFER, ju, fu.TEXTURE_2D, Cu._hardwareTexture?.underlyingResource, Zu)
        }
        qu._MSAAFramebuffer && this._bindUnboundFramebuffer(qu._MSAAFramebuffer), this._cachedViewport && !Uu ? this.setViewport(this._cachedViewport, ju, su) : (ju || (ju = uu.width, Zu && (ju /= Math.pow(2, Zu))), su || (su = uu.height, Zu && (su /= Math.pow(2, Zu))), this._viewport(0, 0, ju, su)), this.wipeCaches()
      }
      setStateCullFaceType(uu, Eu) {
        const ju = this.cullBackFaces ?? uu ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== ju || Eu) && (this._depthCullingState.cullFace = ju)
      }
      setState(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ju = arguments.length > 2 ? arguments[2] : void 0,
          su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Uu = arguments.length > 4 ? arguments[4] : void 0,
          Zu = arguments.length > 5 ? arguments[5] : void 0,
          Xu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== uu || ju) && (this._depthCullingState.cull = uu), this.setStateCullFaceType(Uu, ju), this.setZOffset(Eu), this.setZOffsetUnits(Xu);
        const lu = su ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== lu || ju) && (this._depthCullingState.frontFace = lu), this._stencilStateComposer.stencilMaterial = Zu
      }
      _resolveAndGenerateMipMapsFramebuffer(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        uu.disableAutomaticMSAAResolve || (uu.isMulti ? this.resolveMultiFramebuffer(uu) : this.resolveFramebuffer(uu)), Eu || (uu.isMulti ? this.generateMipMapsMultiFramebuffer(uu) : this.generateMipMapsFramebuffer(uu))
      }
      _bindUnboundFramebuffer(uu) {
        this._currentFramebuffer !== uu && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, uu), this._currentFramebuffer = uu)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(uu) {
        const Eu = this._getTextureTarget(uu);
        this._bindTextureDirectly(Eu, uu, !0), this._gl.generateMipmap(Eu), this._bindTextureDirectly(Eu, null)
      }
      unBindFramebuffer(uu, Eu, ju) {
        const su = uu;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(uu, Eu), ju && (su._MSAAFramebuffer && this._bindUnboundFramebuffer(su._framebuffer), ju()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(uu) {
        uu.isMulti || !uu.texture?.generateMipMaps || uu.isCube || this.generateMipmaps(uu.texture)
      }
      resolveFramebuffer(uu) {
        const Eu = uu,
          ju = this._gl;
        if (!Eu._MSAAFramebuffer || Eu.isMulti) return;
        let su = Eu.resolveMSAAColors ? ju.COLOR_BUFFER_BIT : 0;
        su |= Eu._generateDepthBuffer && Eu.resolveMSAADepth ? ju.DEPTH_BUFFER_BIT : 0, su |= Eu._generateStencilBuffer && Eu.resolveMSAAStencil ? ju.STENCIL_BUFFER_BIT : 0, ju.bindFramebuffer(ju.READ_FRAMEBUFFER, Eu._MSAAFramebuffer), ju.bindFramebuffer(ju.DRAW_FRAMEBUFFER, Eu._framebuffer), ju.blitFramebuffer(0, 0, uu.width, uu.height, 0, 0, uu.width, uu.height, su, ju.NEAREST)
      }
      flushFramebuffer() {
        this._gl.flush()
      }
      restoreDefaultFramebuffer() {
        this._currentRenderTarget ? this.unBindFramebuffer(this._currentRenderTarget) : this._bindUnboundFramebuffer(null), this._cachedViewport && this.setViewport(this._cachedViewport), this.wipeCaches()
      }
      _resetVertexBufferBinding() {
        this.bindArrayBuffer(null), this._cachedVertexBuffers = null
      }
      createVertexBuffer(uu, Eu, ju) {
        return this._createVertexBuffer(uu, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(uu, Eu) {
        const ju = this._gl.createBuffer();
        if (!ju) throw new Error("Unable to create vertex buffer");
        const su = new cu.e(ju);
        return this.bindArrayBuffer(su), "number" !== typeof uu ? uu instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(uu), Eu), su.Mb = 4 * uu.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, uu, Eu), su.Mb = uu.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(uu), Eu), su.Mb = uu), this._resetVertexBufferBinding(), su.references = 1, su
      }
      createDynamicVertexBuffer(uu, Eu) {
        return this._createVertexBuffer(uu, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(uu, Eu, ju) {
        const su = this._gl.createBuffer(),
          Uu = new cu.e(su);
        if (!su) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(Uu);
        const Zu = this._normalizeIndexData(uu);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, Zu, Eu ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), Uu.references = 1, Uu.is32Bits = 4 === Zu.BYTES_PER_ELEMENT, Uu
      }
      _normalizeIndexData(uu) {
        if (2 === uu.BYTES_PER_ELEMENT) return uu;
        if (this._caps.uintIndices) {
          if (uu instanceof Uint32Array) return uu;
          for (let Eu = 0; Eu < uu.length; Eu++)
            if (uu[Eu] >= 65535) return new Uint32Array(uu);
          return new Uint16Array(uu)
        }
        return new Uint16Array(uu)
      }
      bindArrayBuffer(uu) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(uu, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(uu, Eu, ju) {
        const su = uu.program,
          Uu = this._gl.getUniformBlockIndex(su, Eu);
        this._gl.uniformBlockBinding(su, Uu, ju)
      }
      bindIndexBuffer(uu) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(uu, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(uu, Eu) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[Eu] !== uu) && (this._gl.bindBuffer(Eu, uu ? uu.underlyingResource : null), this._currentBoundBuffer[Eu] = uu)
      }
      updateArrayBuffer(uu) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, uu)
      }
      _vertexAttribPointer(uu, Eu, ju, su, Uu, Zu, Xu) {
        const lu = this._currentBufferPointers[Eu];
        if (!lu) return;
        let qu = !1;
        lu.active ? (lu.buffer !== uu && (lu.buffer = uu, qu = !0), lu.size !== ju && (lu.size = ju, qu = !0), lu.type !== su && (lu.type = su, qu = !0), lu.normalized !== Uu && (lu.normalized = Uu, qu = !0), lu.stride !== Zu && (lu.stride = Zu, qu = !0), lu.offset !== Xu && (lu.offset = Xu, qu = !0)) : (qu = !0, lu.active = !0, lu.index = Eu, lu.size = ju, lu.type = su, lu.normalized = Uu, lu.stride = Zu, lu.offset = Xu, lu.buffer = uu), (qu || this._vaoRecordInProgress) && (this.bindArrayBuffer(uu), su === this._gl.UNSIGNED_INT || su === this._gl.INT ? this._gl.vertexAttribIPointer(Eu, ju, su, Zu, Xu) : this._gl.vertexAttribPointer(Eu, ju, su, Uu, Zu, Xu))
      }
      _bindIndexBufferWithCache(uu) {
        null != uu && this._cachedIndexBuffer !== uu && (this._cachedIndexBuffer = uu, this.bindIndexBuffer(uu), this._uintIndicesCurrentlySet = uu.is32Bits)
      }
      _bindVertexBuffersAttributes(uu, Eu, ju) {
        const su = Eu.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let Uu = 0; Uu < su.length; Uu++) {
          const Zu = Eu.getAttributeLocation(Uu);
          if (Zu >= 0) {
            const Eu = su[Uu];
            let Xu = null;
            if (ju && (Xu = ju[Eu]), Xu || (Xu = uu[Eu]), !Xu) continue;
            this._gl.enableVertexAttribArray(Zu), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[Zu] = !0);
            const lu = Xu.getBuffer();
            lu && (this._vertexAttribPointer(lu, Zu, Xu.getSize(), Xu.type, Xu.normalized, Xu.byteStride, Xu.byteOffset), Xu.getIsInstanced() && (this._gl.vertexAttribDivisor(Zu, Xu.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(Zu), this._currentInstanceBuffers.push(lu))))
          }
        }
      }
      recordVertexArrayObject(uu, Eu, ju, su) {
        const Uu = this._gl.createVertexArray();
        if (!Uu) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(Uu), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(uu, ju, su), this.bindIndexBuffer(Eu), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), Uu
      }
      bindVertexArrayObject(uu, Eu) {
        this._cachedVertexArrayObject !== uu && (this._cachedVertexArrayObject = uu, this._gl.bindVertexArray(uu), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != Eu && Eu.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(uu, Eu, ju, su, Uu) {
        if (this._cachedVertexBuffers !== uu || this._cachedEffectForVertexBuffers !== Uu) {
          this._cachedVertexBuffers = uu, this._cachedEffectForVertexBuffers = Uu;
          const Eu = Uu.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let Zu = 0;
          for (let Xu = 0; Xu < Eu; Xu++)
            if (Xu < ju.length) {
              const Eu = Uu.getAttributeLocation(Xu);
              Eu >= 0 && (this._gl.enableVertexAttribArray(Eu), this._vertexAttribArraysEnabled[Eu] = !0, this._vertexAttribPointer(uu, Eu, ju[Xu], this._gl.FLOAT, !1, su, Zu)), Zu += 4 * ju[Xu]
            }
        }
        this._bindIndexBufferWithCache(Eu)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(uu, Eu, ju, su) {
        this._cachedVertexBuffers === uu && this._cachedEffectForVertexBuffers === ju || (this._cachedVertexBuffers = uu, this._cachedEffectForVertexBuffers = ju, this._bindVertexBuffersAttributes(uu, ju, su)), this._bindIndexBufferWithCache(Eu)
      }
      unbindInstanceAttributes() {
        let uu;
        for (let Eu = 0, ju = this._currentInstanceLocations.length; Eu < ju; Eu++) {
          const ju = this._currentInstanceBuffers[Eu];
          uu != ju && ju.references && (uu = ju, this.bindArrayBuffer(ju));
          const su = this._currentInstanceLocations[Eu];
          this._gl.vertexAttribDivisor(su, 0)
        }
        this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0
      }
      releaseVertexArrayObject(uu) {
        this._gl.deleteVertexArray(uu)
      }
      _releaseBuffer(uu) {
        return uu.references--, 0 === uu.references && (this._deleteBuffer(uu), !0)
      }
      _deleteBuffer(uu) {
        this._gl.deleteBuffer(uu.underlyingResource)
      }
      updateAndBindInstancesBuffer(uu, Eu, ju) {
        if (this.bindArrayBuffer(uu), Eu && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, Eu), void 0 !== ju[0].index) this.bindInstancesBuffer(uu, ju, !0);
        else
          for (let su = 0; su < 4; su++) {
            const Eu = ju[su];
            this._vertexAttribArraysEnabled[Eu] || (this._gl.enableVertexAttribArray(Eu), this._vertexAttribArraysEnabled[Eu] = !0), this._vertexAttribPointer(uu, Eu, 4, this._gl.FLOAT, !1, 64, 16 * su), this._gl.vertexAttribDivisor(Eu, 1), this._currentInstanceLocations.push(Eu), this._currentInstanceBuffers.push(uu)
          }
      }
      bindInstancesBuffer(uu, Eu) {
        let ju = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(uu);
        let su = 0;
        if (ju)
          for (let Uu = 0; Uu < Eu.length; Uu++) {
            su += 4 * Eu[Uu].attributeSize
          }
        for (let Uu = 0; Uu < Eu.length; Uu++) {
          const ju = Eu[Uu];
          void 0 === ju.index && (ju.index = this._currentEffect.getAttributeLocationByName(ju.attributeName)), ju.index < 0 || (this._vertexAttribArraysEnabled[ju.index] || (this._gl.enableVertexAttribArray(ju.index), this._vertexAttribArraysEnabled[ju.index] = !0), this._vertexAttribPointer(uu, ju.index, ju.attributeSize, ju.attributeType || this._gl.FLOAT, ju.normalized || !1, su, ju.offset), this._gl.vertexAttribDivisor(ju.index, void 0 === ju.divisor ? 1 : ju.divisor), this._currentInstanceLocations.push(ju.index), this._currentInstanceBuffers.push(uu))
        }
      }
      disableInstanceAttributeByName(uu) {
        if (!this._currentEffect) return;
        const Eu = this._currentEffect.getAttributeLocationByName(uu);
        this.disableInstanceAttribute(Eu)
      }
      disableInstanceAttribute(uu) {
        let Eu, ju = !1;
        for (; - 1 !== (Eu = this._currentInstanceLocations.indexOf(uu));) this._currentInstanceLocations.splice(Eu, 1), this._currentInstanceBuffers.splice(Eu, 1), ju = !0;
        ju && (this._gl.vertexAttribDivisor(uu, 0), this.disableAttributeByIndex(uu))
      }
      disableAttributeByIndex(uu) {
        this._gl.disableVertexAttribArray(uu), this._vertexAttribArraysEnabled[uu] = !1, this._currentBufferPointers[uu].active = !1
      }
      draw(uu, Eu, ju, su) {
        this.drawElementsType(uu ? 0 : 1, Eu, ju, su)
      }
      drawPointClouds(uu, Eu, ju) {
        this.drawArraysType(2, uu, Eu, ju)
      }
      drawUnIndexed(uu, Eu, ju, su) {
        this.drawArraysType(uu ? 0 : 1, Eu, ju, su)
      }
      drawElementsType(uu, Eu, ju, su) {
        this.applyStates(), this._reportDrawCall();
        const Uu = this._drawMode(uu),
          Zu = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          Xu = this._uintIndicesCurrentlySet ? 4 : 2;
        su ? this._gl.drawElementsInstanced(Uu, ju, Zu, Eu * Xu, su) : this._gl.drawElements(Uu, ju, Zu, Eu * Xu)
      }
      drawArraysType(uu, Eu, ju, su) {
        this.applyStates(), this._reportDrawCall();
        const Uu = this._drawMode(uu);
        su ? this._gl.drawArraysInstanced(Uu, Eu, ju, su) : this._gl.drawArrays(Uu, Eu, ju)
      }
      _drawMode(uu) {
        switch (uu) {
          case 0:
          default:
            return this._gl.TRIANGLES;
          case 2:
          case 3:
            return this._gl.POINTS;
          case 1:
          case 4:
            return this._gl.LINES;
          case 5:
            return this._gl.LINE_LOOP;
          case 6:
            return this._gl.LINE_STRIP;
          case 7:
            return this._gl.TRIANGLE_STRIP;
          case 8:
            return this._gl.TRIANGLE_FAN
        }
      }
      _releaseEffect(uu) {
        this._compiledEffects[uu._key] && delete this._compiledEffects[uu._key];
        const Eu = uu.getPipelineContext();
        Eu && this._deletePipelineContext(Eu)
      }
      _deletePipelineContext(uu) {
        const Eu = uu;
        Eu && Eu.program && (Eu.program.__SPECTOR_rebuildProgram = null, (0, Du.h)(Eu), this._gl && (this._currentProgram === Eu.program && this._setProgram(null), this._gl.deleteProgram(Eu.program)))
      }
      _getGlobalDefines(uu) {
        return (0, hu.k)(uu, this.isNDCHalfZRange, this.bsu, this.useExactSrgbConversions)
      }
      createEffect(uu, Eu, ju, Zu, Xu, lu, qu, fu, Cu) {
        let bu = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          cu = arguments.length > 10 ? arguments[10] : void 0;
        const Nu = "string" === typeof uu ? uu : uu.vertexToken || uu.vertexSource || uu.vertexElement || uu.vertex,
          Ou = "string" === typeof uu ? uu : uu.fragmentToken || uu.fragmentSource || uu.fragmentElement || uu.fragment,
          Yu = this._getGlobalDefines(),
          hu = void 0 !== Eu.attributes;
        let Du = Xu ?? Eu.defines ?? "";
        Yu && (Du += Yu);
        const gu = Nu + "+" + Ou + "@" + Du;
        if (this._compiledEffects[gu]) {
          const uu = this._compiledEffects[gu];
          return qu && uu.isReady() && qu(uu), uu._refCount++, uu
        }
        this._gl && (0, Uu.A)(this._gl);
        const Mu = new su.b(uu, Eu, hu ? this : ju, Zu, this, Xu, lu, qu, fu, Cu, gu, Eu.shaderLanguage ?? bu, Eu.extraInitializationsAsync ?? cu);
        return this._compiledEffects[gu] = Mu, Mu
      }
      _getShaderSource(uu) {
        return this._gl.getShaderSource(uu)
      }
      createRawShaderProgram(uu, Eu, ju, su) {
        let Zu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const Xu = (0, Uu.A)(this._gl);
        return Xu._contextWasLost = this._contextWasLost, Xu.validateShaderPrograms = this.validateShaderPrograms, (0, Uu.q)(uu, Eu, ju, su || this._gl, Zu)
      }
      createShaderProgram(uu, Eu, ju, su, Zu) {
        let Xu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const lu = (0, Uu.A)(this._gl);
        return lu._contextWasLost = this._contextWasLost, lu.validateShaderPrograms = this.validateShaderPrograms, (0, Uu.u)(uu, Eu, ju, su, Zu || this._gl, Xu)
      }
      inlineShaderCode(uu) {
        return uu
      }
      createPipelineContext(uu) {
        if (this._gl) {
          (0, Uu.A)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const Eu = (0, Uu.p)(this._gl, uu);
        return Eu.engine = this, Eu
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(uu) {
        return (0, Uu.f)(uu, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(uu, Eu, ju, su, Zu, Xu, lu, qu, fu, Cu, bu) {
        const cu = (0, Uu.A)(this._gl);
        return cu._contextWasLost = this._contextWasLost, cu.validateShaderPrograms = this.validateShaderPrograms, cu._createShaderProgramInjection = this._createShaderProgram.bind(this), cu.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), cu.createShaderProgramInjection = this.createShaderProgram.bind(this), cu.loadFileInjection = this._loadFile.bind(this), (0, Uu.k)(uu, Eu, ju, su, Zu, Xu, lu, qu, fu, Cu, bu)
      }
      _createShaderProgram(uu, Eu, ju, su) {
        let Zu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, Uu.b)(uu, Eu, ju, su, Zu)
      }
      _isRenderingStateCompiled(uu) {
        return !this._isDisposed && (0, Uu.i)(uu, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(uu, Eu) {
        (0, Uu.e)(uu, Eu)
      }
      getUniforms(uu, Eu) {
        const ju = new Array,
          su = uu;
        for (let Uu = 0; Uu < Eu.length; Uu++) ju.push(this._gl.getUniformLocation(su.program, Eu[Uu]));
        return ju
      }
      getAttributes(uu, Eu) {
        const ju = [],
          su = uu;
        for (let Zu = 0; Zu < Eu.length; Zu++) try {
          ju.push(this._gl.getAttribLocation(su.program, Eu[Zu]))
        } catch (Uu) {
          ju.push(-1)
        }
        return ju
      }
      enableEffect(uu) {
        (uu = null !== uu && (0, Xu.e)(uu) ? uu.effect : uu) && uu !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(uu), this._currentEffect = uu, uu.onBind && uu.onBind(uu), uu._onBindObservable && uu._onBindObservable.notifyObservers(uu))
      }
      setInt(uu, Eu) {
        return !!uu && (this._gl.uniform1i(uu, Eu), !0)
      }
      setInt2(uu, Eu, ju) {
        return !!uu && (this._gl.uniform2i(uu, Eu, ju), !0)
      }
      setInt3(uu, Eu, ju, su) {
        return !!uu && (this._gl.uniform3i(uu, Eu, ju, su), !0)
      }
      setInt4(uu, Eu, ju, su, Uu) {
        return !!uu && (this._gl.uniform4i(uu, Eu, ju, su, Uu), !0)
      }
      setIntArray(uu, Eu) {
        return !!uu && (this._gl.uniform1iv(uu, Eu), !0)
      }
      setIntArray2(uu, Eu) {
        return !(!uu || Eu.length % 2 !== 0) && (this._gl.uniform2iv(uu, Eu), !0)
      }
      setIntArray3(uu, Eu) {
        return !(!uu || Eu.length % 3 !== 0) && (this._gl.uniform3iv(uu, Eu), !0)
      }
      setIntArray4(uu, Eu) {
        return !(!uu || Eu.length % 4 !== 0) && (this._gl.uniform4iv(uu, Eu), !0)
      }
      setUInt(uu, Eu) {
        return !!uu && (this._gl.uniform1ui(uu, Eu), !0)
      }
      setUInt2(uu, Eu, ju) {
        return !!uu && (this._gl.uniform2ui(uu, Eu, ju), !0)
      }
      setUInt3(uu, Eu, ju, su) {
        return !!uu && (this._gl.uniform3ui(uu, Eu, ju, su), !0)
      }
      setUInt4(uu, Eu, ju, su, Uu) {
        return !!uu && (this._gl.uniform4ui(uu, Eu, ju, su, Uu), !0)
      }
      setUIntArray(uu, Eu) {
        return !!uu && (this._gl.uniform1uiv(uu, Eu), !0)
      }
      setUIntArray2(uu, Eu) {
        return !(!uu || Eu.length % 2 !== 0) && (this._gl.uniform2uiv(uu, Eu), !0)
      }
      setUIntArray3(uu, Eu) {
        return !(!uu || Eu.length % 3 !== 0) && (this._gl.uniform3uiv(uu, Eu), !0)
      }
      setUIntArray4(uu, Eu) {
        return !(!uu || Eu.length % 4 !== 0) && (this._gl.uniform4uiv(uu, Eu), !0)
      }
      setArray(uu, Eu) {
        return !!uu && (!(Eu.length < 1) && (this._gl.uniform1fv(uu, Eu), !0))
      }
      setArray2(uu, Eu) {
        return !(!uu || Eu.length % 2 !== 0) && (this._gl.uniform2fv(uu, Eu), !0)
      }
      setArray3(uu, Eu) {
        return !(!uu || Eu.length % 3 !== 0) && (this._gl.uniform3fv(uu, Eu), !0)
      }
      setArray4(uu, Eu) {
        return !(!uu || Eu.length % 4 !== 0) && (this._gl.uniform4fv(uu, Eu), !0)
      }
      setMatrices(uu, Eu) {
        return !!uu && (this._gl.uniformMatrix4fv(uu, !1, Eu), !0)
      }
      setMatrix3x3(uu, Eu) {
        return !!uu && (this._gl.uniformMatrix3fv(uu, !1, Eu), !0)
      }
      setMatrix2x2(uu, Eu) {
        return !!uu && (this._gl.uniformMatrix2fv(uu, !1, Eu), !0)
      }
      setFloat(uu, Eu) {
        return !!uu && (this._gl.uniform1f(uu, Eu), !0)
      }
      setFloat2(uu, Eu, ju) {
        return !!uu && (this._gl.uniform2f(uu, Eu, ju), !0)
      }
      setFloat3(uu, Eu, ju, su) {
        return !!uu && (this._gl.uniform3f(uu, Eu, ju, su), !0)
      }
      setFloat4(uu, Eu, ju, su, Uu) {
        return !!uu && (this._gl.uniform4f(uu, Eu, ju, su, Uu), !0)
      }
      _applyColorWriteState() {
        if (this._colorWriteChanged) {
          this._colorWriteChanged = !1;
          const uu = this._colorWrite;
          this._gl.colorMask(uu, uu, uu, uu)
        }
      }
      applyStates() {
        this._depthCullingState.apply(this._gl), this._stencilStateComposer.apply(this._gl), this._alphaState.apply(this._gl, this._currentRenderTarget && this._currentRenderTarget.textures ? this._currentRenderTarget.textures.length : 1, this._integerMRTAttachmentsMask), this._applyColorWriteState()
      }
      wipeCaches(uu) {
        this.preventCacheWipeBetweenFrames && !uu || (this._currentEffect = null, this._viewportCached.x = 0, this._viewportCached.y = 0, this._viewportCached.z = 0, this._viewportCached.w = 0, this._unbindVertexArrayObject(), uu && (this._currentProgram = null, this.resetTextureCache(), this._stencilStateComposer.reset(), this._depthCullingState.reset(), this._depthCullingState.depthFunc = this._gl.LEQUAL, this._alphaState.reset(), this._resetAlphaMode(), this._colorWrite = !0, this._colorWriteChanged = !0, this._unpackFlipYCached = null, this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), this._mustWipeVertexAttributes = !0, this.unbindAllAttributes()), this._resetVertexBufferBinding(), this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null, this.bindIndexBuffer(null))
      }
      _getSamplingParameters(uu, Eu) {
        const ju = this._gl;
        let su = ju.NEAREST,
          Uu = ju.NEAREST,
          Zu = !1;
        switch (uu) {
          case 11:
            su = ju.LINEAR, Uu = Eu ? ju.LINEAR_MIPMAP_NEAREST : ju.LINEAR;
            break;
          case 3:
            su = ju.LINEAR, Zu = !0, Uu = Eu ? ju.LINEAR_MIPMAP_LINEAR : ju.LINEAR;
            break;
          case 8:
            Zu = !0, su = ju.NEAREST, Uu = Eu ? ju.NEAREST_MIPMAP_LINEAR : ju.NEAREST;
            break;
          case 4:
            su = ju.NEAREST, Uu = Eu ? ju.NEAREST_MIPMAP_NEAREST : ju.NEAREST;
            break;
          case 5:
            su = ju.NEAREST, Uu = Eu ? ju.LINEAR_MIPMAP_NEAREST : ju.LINEAR;
            break;
          case 6:
            Zu = !0, su = ju.NEAREST, Uu = Eu ? ju.LINEAR_MIPMAP_LINEAR : ju.LINEAR;
            break;
          case 7:
            su = ju.NEAREST, Uu = ju.LINEAR;
            break;
          case 1:
            su = ju.NEAREST, Uu = ju.NEAREST;
            break;
          case 9:
            su = ju.LINEAR, Uu = Eu ? ju.NEAREST_MIPMAP_NEAREST : ju.NEAREST;
            break;
          case 10:
            Zu = !0, su = ju.LINEAR, Uu = Eu ? ju.NEAREST_MIPMAP_LINEAR : ju.NEAREST;
            break;
          case 2:
            su = ju.LINEAR, Uu = ju.LINEAR;
            break;
          case 12:
            su = ju.LINEAR, Uu = ju.NEAREST
        }
        return {
          min: Uu,
          mag: su,
          hasMipMaps: Zu
        }
      }
      _createTexture() {
        const uu = this._gl.createTexture();
        if (!uu) throw new Error("Unable to create texture");
        return uu
      }
      _createHardwareTexture() {
        return new Ou.c(this._createTexture(), this._gl)
      }
      _createInternalTexture(uu, Eu) {
        let ju, su, Uu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Zu = !1,
          Xu = 0,
          qu = 3,
          fu = 5,
          Cu = !1,
          bu = 1,
          cu = !1,
          Nu = 0,
          Ou = !1;
        void 0 !== Eu && "object" === typeof Eu ? (ju = !!Eu.generateMipMaps, Zu = !!Eu.createMipMaps, Xu = void 0 === Eu.type ? 0 : Eu.type, qu = void 0 === Eu.samplingMode ? 3 : Eu.samplingMode, fu = void 0 === Eu.format ? 5 : Eu.format, Cu = void 0 !== Eu.useSRGBBuffer && Eu.useSRGBBuffer, bu = Eu.samples ?? 1, su = Eu.label, cu = !!Eu.createMSAATexture, Nu = Eu.comparisonFunction || 0, Ou = !!Eu.isCube) : ju = !!Eu, Cu && (Cu = this._caps.supportSRGBBuffers && (this.uY > 1 || this.isWebGPU)), (1 !== Xu || this._caps.textureFloatLinearFiltering) && (2 !== Xu || this._caps.textureHalfFloatLinearFiltering) || (qu = 1), 1 !== Xu || this._caps.textureFloat || (Xu = 0, lu.b.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const hu = (0, gu.c)(fu),
          Du = (0, gu.b)(fu),
          Mu = this._gl,
          eu = new Yu.c(this, Uu),
          Gu = uu.width || uu,
          pu = uu.height || uu,
          wu = uu.depth || 0,
          Ju = uu.layers || 0,
          du = this._getSamplingParameters(qu, (ju || Zu) && !hu),
          au = 0 !== Ju ? Mu.TEXTURE_2D_ARRAY : 0 !== wu ? Mu.TEXTURE_3D : Ou ? Mu.TEXTURE_CUBE_MAP : Mu.TEXTURE_2D,
          Pu = hu ? this._getInternalFormatFromDepthTextureFormat(fu, !0, Du) : this._getRGBABufferInternalSizedFormat(Xu, fu, Cu),
          ou = hu ? Du ? Mu.DEPTH_STENCIL : Mu.DEPTH_COMPONENT : this._getInternalFormat(fu),
          ku = hu ? this._getWebGLTextureTypeFromDepthTextureFormat(fu) : this._getWebGLTextureType(Xu);
        if (this._bindTextureDirectly(au, eu), 0 !== Ju) eu.is2DArray = !0, Mu.texImage3D(au, 0, Pu, Gu, pu, Ju, 0, ou, ku, null);
        else if (0 !== wu) eu.is3D = !0, Mu.texImage3D(au, 0, Pu, Gu, pu, wu, 0, ou, ku, null);
        else if (Ou) {
          eu.isCube = !0;
          for (let uu = 0; uu < 6; uu++) Mu.texImage2D(Mu.TEXTURE_CUBE_MAP_POSITIVE_X + uu, 0, Pu, Gu, pu, 0, ou, ku, null)
        } else Mu.texImage2D(au, 0, Pu, Gu, pu, 0, ou, ku, null);
        if (Mu.texParameteri(au, Mu.TEXTURE_MAG_FILTER, du.mag), Mu.texParameteri(au, Mu.TEXTURE_MIN_FILTER, du.min), Mu.texParameteri(au, Mu.TEXTURE_WRAP_S, Mu.CLAMP_TO_EDGE), Mu.texParameteri(au, Mu.TEXTURE_WRAP_T, Mu.CLAMP_TO_EDGE), hu && this.uY > 1 && (0 === Nu ? (Mu.texParameteri(au, Mu.TEXTURE_COMPARE_FUNC, 515), Mu.texParameteri(au, Mu.TEXTURE_COMPARE_MODE, Mu.NONE)) : (Mu.texParameteri(au, Mu.TEXTURE_COMPARE_FUNC, Nu), Mu.texParameteri(au, Mu.TEXTURE_COMPARE_MODE, Mu.COMPARE_REF_TO_TEXTURE))), (ju || Zu) && this._gl.generateMipmap(au), this._bindTextureDirectly(au, null), eu._useSRGBBuffer = Cu, eu.baseWidth = Gu, eu.baseHeight = pu, eu.width = Gu, eu.height = pu, eu.depth = Ju || wu, eu.isReady = !0, eu.samples = bu, eu.generateMipMaps = ju, eu.samplingMode = qu, eu.type = Xu, eu.format = fu, eu.label = su, eu.comparisonFunction = Nu, this._internalTexturesCache.push(eu), cu) {
          let uu;
          if (uu = (0, gu.c)(eu.format) ? this._setupFramebufferDepthAttachments((0, gu.b)(eu.format), 19 !== eu.format, eu.width, eu.height, bu, eu.format, !0) : this._createRenderBuffer(eu.width, eu.height, bu, -1, this._getRGBABufferInternalSizedFormat(eu.type, eu.format, eu._useSRGBBuffer), -1), !uu) throw new Error("Unable to create render buffer");
          eu._autoMSAAManagement = !0;
          let Eu = eu._hardwareTexture;
          Eu || (Eu = eu._hardwareTexture = this._createHardwareTexture()), Eu.addMSAARenderBuffer(uu)
        }
        return eu
      }
      _getUseSRGBBuffer(uu, Eu) {
        return uu && this._caps.supportSRGBBuffers && (this.uY > 1 || Eu)
      }
      createTexture(uu, Eu, ju, su) {
        var Uu = this;
        let Zu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Xu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          lu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          qu = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          fu = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          Cu = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          bu = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          cu = arguments.length > 11 ? arguments[11] : void 0,
          Nu = arguments.length > 12 ? arguments[12] : void 0,
          Ou = arguments.length > 13 ? arguments[13] : void 0,
          hu = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(uu, Eu, ju, su, Zu, Xu, lu, (function() {
          for (var uu = arguments.length, Eu = new Array(uu), ju = 0; ju < uu; ju++) Eu[ju] = arguments[ju];
          return Uu._prepareWebGLTexture(...Eu, Cu)
        }), ((uu, Eu, ju, Uu, Zu, Xu) => {
          const lu = this._gl,
            qu = ju.width === uu && ju.height === Eu;
          Zu._creationFlags = Ou ?? 0;
          const fu = this._getTexImageParametersForCreateTexture(Zu.format, Zu._useSRGBBuffer);
          if (qu) return lu.texImage2D(lu.TEXTURE_2D, 0, fu.internalFormat, fu.format, fu.type, ju), !1;
          const Cu = this._caps.maxTextureSize;
          if (ju.width > Cu || ju.height > Cu || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = uu, this._workingCanvas.height = Eu, this._workingContext.drawImage(ju, 0, 0, ju.width, ju.height, 0, 0, uu, Eu), lu.texImage2D(lu.TEXTURE_2D, 0, fu.internalFormat, fu.format, fu.type, this._workingCanvas), Zu.width = uu, Zu.height = Eu, !1);
          {
            const uu = new Yu.c(this, 2);
            this._bindTextureDirectly(lu.TEXTURE_2D, uu, !0), lu.texImage2D(lu.TEXTURE_2D, 0, fu.internalFormat, fu.format, fu.type, ju), this._rescaleTexture(uu, Zu, su, fu.format, (() => {
              this._releaseTexture(uu), this._bindTextureDirectly(lu.TEXTURE_2D, Zu, !0), Xu()
            }))
          }
          return !0
        }), qu, fu, Cu, bu, cu, Nu, hu)
      }
      _getTexImageParametersForCreateTexture(uu, Eu) {
        let ju, su;
        return 1 === this.uY ? (ju = this._getInternalFormat(uu, Eu), su = ju) : (ju = this._getInternalFormat(uu, !1), su = this._getRGBABufferInternalSizedFormat(0, uu, Eu)), {
          internalFormat: su,
          format: ju,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(uu, Eu, ju, su, Uu) {}
      _unpackFlipY(uu) {
        this._unpackFlipYCached !== uu && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, uu ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = uu))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(uu) {
        return uu.isCube ? this._gl.TEXTURE_CUBE_MAP : uu.is3D ? this._gl.TEXTURE_3D : uu.is2DArray || uu.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const su = this._getTextureTarget(Eu),
          Uu = this._getSamplingParameters(uu, Eu.useMipMaps || ju);
        this._setTextureParameterInteger(su, this._gl.TEXTURE_MAG_FILTER, Uu.mag, Eu), this._setTextureParameterInteger(su, this._gl.TEXTURE_MIN_FILTER, Uu.min), ju && Uu.hasMipMaps && (Eu.generateMipMaps = !0, this._gl.generateMipmap(su)), this._bindTextureDirectly(su, null), Eu.samplingMode = uu
      }
      updateTextureDimensions(uu, Eu, ju) {}
      updateTextureWrappingMode(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Uu = this._getTextureTarget(uu);
        null !== Eu && (this._setTextureParameterInteger(Uu, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(Eu), uu), uu._cachedWrapU = Eu), null !== ju && (this._setTextureParameterInteger(Uu, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(ju), uu), uu._cachedWrapV = ju), (uu.is2DArray || uu.is3D) && null !== su && (this._setTextureParameterInteger(Uu, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(su), uu), uu._cachedWrapR = su), this._bindTextureDirectly(Uu, null)
      }
      _uploadCompressedDataToTextureDirectly(uu, Eu, ju, su, Uu) {
        let Zu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Xu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const lu = this._gl;
        let qu = lu.TEXTURE_2D;
        if (uu.isCube && (qu = lu.TEXTURE_CUBE_MAP_POSITIVE_X + Zu), uu._useSRGBBuffer) switch (Eu) {
          case 37492:
          case 36196:
            this._caps.etc2 ? Eu = lu.COMPRESSED_SRGB8_ETC2 : uu._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? Eu = lu.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : uu._useSRGBBuffer = !1;
            break;
          case 36492:
            Eu = lu.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            Eu = lu.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            Eu = lu.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            Eu = lu.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            Eu = lu.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            Eu = lu.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            Eu = lu.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            Eu = lu.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            Eu = lu.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            Eu = lu.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            Eu = lu.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            Eu = lu.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            Eu = lu.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            Eu = lu.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            Eu = lu.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? Eu = lu.COMPRESSED_SRGB_S3TC_DXT1_EXT : uu._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? Eu = lu.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : uu._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? Eu = lu.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : uu._useSRGBBuffer = !1;
            break;
          default:
            uu._useSRGBBuffer = !1
        }
        if (uu.generateMipMaps) {
          const Zu = uu._hardwareTexture;
          Zu.memoryAllocated || (lu.texStorage2D(uu.isCube ? lu.TEXTURE_CUBE_MAP : lu.TEXTURE_2D, Math.floor(Math.log2(Math.max(ju, su))) + 1, Eu, uu.width, uu.height), Zu.memoryAllocated = !0), this._gl.compressedTexSubImage2D(qu, Xu, 0, 0, ju, su, Eu, Uu)
        } else this._gl.compressedTexImage2D(qu, Xu, Eu, ju, su, 0, Uu)
      }
      _uploadDataToTextureDirectly(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Uu = arguments.length > 4 ? arguments[4] : void 0,
          Zu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const Xu = this._gl,
          lu = this._getWebGLTextureType(uu.type),
          qu = this._getInternalFormat(uu.format),
          fu = void 0 === Uu ? this._getRGBABufferInternalSizedFormat(uu.type, uu.format, uu._useSRGBBuffer) : this._getInternalFormat(Uu, uu._useSRGBBuffer);
        this._unpackFlipY(uu.invertY);
        let Cu = Xu.TEXTURE_2D;
        uu.isCube && (Cu = Xu.TEXTURE_CUBE_MAP_POSITIVE_X + ju);
        const bu = Math.round(Math.log(uu.width) * Math.LOG2E),
          cu = Math.round(Math.log(uu.height) * Math.LOG2E),
          Nu = Zu ? uu.width : Math.pow(2, Math.max(bu - su, 0)),
          Ou = Zu ? uu.height : Math.pow(2, Math.max(cu - su, 0));
        Xu.texImage2D(Cu, su, fu, Nu, Ou, 0, qu, lu, Eu)
      }
      updateTextureData(uu, Eu, ju, su, Uu, Zu) {
        let Xu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          lu = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          qu = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const fu = this._gl,
          Cu = this._getWebGLTextureType(uu.type),
          bu = this._getInternalFormat(uu.format);
        this._unpackFlipY(uu.invertY);
        let cu = fu.TEXTURE_2D,
          Nu = fu.TEXTURE_2D;
        uu.isCube && (Nu = fu.TEXTURE_CUBE_MAP_POSITIVE_X + Xu, cu = fu.TEXTURE_CUBE_MAP), this._bindTextureDirectly(cu, uu, !0), fu.texSubImage2D(Nu, lu, ju, su, Uu, Zu, bu, Cu, Eu), qu && this._gl.generateMipmap(Nu), this._bindTextureDirectly(cu, null)
      }
      _uploadArrayBufferViewToTexture(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Uu = this._gl,
          Zu = uu.isCube ? Uu.TEXTURE_CUBE_MAP : Uu.TEXTURE_2D;
        this._bindTextureDirectly(Zu, uu, !0), this._uploadDataToTextureDirectly(uu, Eu, ju, su), this._bindTextureDirectly(Zu, null, !0)
      }
      _prepareWebGLTextureContinuation(uu, Eu, ju, su, Uu) {
        const Zu = this._gl;
        if (!Zu) return;
        const Xu = this._getSamplingParameters(Uu, !ju);
        Zu.texParameteri(Zu.TEXTURE_2D, Zu.TEXTURE_MAG_FILTER, Xu.mag), Zu.texParameteri(Zu.TEXTURE_2D, Zu.TEXTURE_MIN_FILTER, Xu.min), ju || su || Zu.generateMipmap(Zu.TEXTURE_2D), this._bindTextureDirectly(Zu.TEXTURE_2D, null), Eu && Eu.removePendingData(uu), uu.onLoadedObservable.notifyObservers(uu), uu.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu) {
        const Cu = this.getCaps().maxTextureSize,
          bu = Math.min(Cu, this.needPOTTextures ? (0, Nu.g)(su.width, Cu) : su.width),
          cu = Math.min(Cu, this.needPOTTextures ? (0, Nu.g)(su.height, Cu) : su.height),
          Ou = this._gl;
        Ou && (uu._hardwareTexture ? (this._bindTextureDirectly(Ou.TEXTURE_2D, uu, !0), this._unpackFlipY(void 0 === Uu || !!Uu), uu.baseWidth = su.width, uu.baseHeight = su.height, uu.width = bu, uu.height = cu, uu.isReady = !0, uu.type = -1 !== uu.type ? uu.type : 0, uu.format = -1 !== uu.format ? uu.format : fu ?? (".jpg" !== Eu || uu._useSRGBBuffer ? 5 : 4), lu(bu, cu, su, Eu, uu, (() => {
          this._prepareWebGLTextureContinuation(uu, ju, Zu, Xu, qu)
        })) || this._prepareWebGLTextureContinuation(uu, ju, Zu, Xu, qu)) : ju && ju.removePendingData(uu))
      }
      _getInternalFormatFromDepthTextureFormat(uu, Eu, ju) {
        const su = this._gl;
        if (!Eu) return su.STENCIL_INDEX8;
        let Uu = ju ? su.DEPTH_STENCIL : su.DEPTH_COMPONENT;
        return this.uY > 1 ? 15 === uu ? Uu = su.DEPTH_COMPONENT16 : 16 === uu ? Uu = su.DEPTH_COMPONENT24 : 17 === uu || 13 === uu ? Uu = ju ? su.DEPTH24_STENCIL8 : su.DEPTH_COMPONENT24 : 14 === uu ? Uu = su.DEPTH_COMPONENT32F : 18 === uu && (Uu = ju ? su.DEPTH32F_STENCIL8 : su.DEPTH_COMPONENT32F) : Uu = su.DEPTH_COMPONENT16, Uu
      }
      _getWebGLTextureTypeFromDepthTextureFormat(uu) {
        const Eu = this._gl;
        let ju = Eu.UNSIGNED_INT;
        return 15 === uu ? ju = Eu.UNSIGNED_SHORT : 17 === uu || 13 === uu ? ju = Eu.UNSIGNED_INT_24_8 : 14 === uu ? ju = Eu.FLOAT : 18 === uu ? ju = Eu.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === uu && (ju = Eu.UNSIGNED_BYTE), ju
      }
      _setupFramebufferDepthAttachments(uu, Eu, ju, su) {
        let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          Zu = arguments.length > 5 ? arguments[5] : void 0,
          Xu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const lu = this._gl;
        Zu = Zu ?? (uu ? 13 : 14);
        const qu = this._getInternalFormatFromDepthTextureFormat(Zu, Eu, uu);
        return uu && Eu ? this._createRenderBuffer(ju, su, Uu, lu.DEPTH_STENCIL, qu, Xu ? -1 : lu.DEPTH_STENCIL_ATTACHMENT) : Eu ? this._createRenderBuffer(ju, su, Uu, qu, qu, Xu ? -1 : lu.DEPTH_ATTACHMENT) : uu ? this._createRenderBuffer(ju, su, Uu, qu, qu, Xu ? -1 : lu.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(uu, Eu, ju, su, Uu, Zu) {
        let Xu = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const lu = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(lu, uu, Eu, ju, su, Uu, Zu, Xu)
      }
      _updateRenderBuffer(uu, Eu, ju, su, Uu, Zu, Xu) {
        let lu = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const qu = this._gl;
        return qu.bindRenderbuffer(qu.RENDERBUFFER, uu), su > 1 && qu.renderbufferStorageMultisample ? qu.renderbufferStorageMultisample(qu.RENDERBUFFER, su, Zu, Eu, ju) : qu.renderbufferStorage(qu.RENDERBUFFER, Uu, Eu, ju), -1 !== Xu && qu.framebufferRenderbuffer(qu.FRAMEBUFFER, Xu, qu.RENDERBUFFER, uu), lu && qu.bindRenderbuffer(qu.RENDERBUFFER, null), uu
      }
      _releaseTexture(uu) {
        this._deleteTexture(uu._hardwareTexture), this.unbindAllTextures();
        const Eu = this._internalTexturesCache.indexOf(uu); - 1 !== Eu && this._internalTexturesCache.splice(Eu, 1), uu._lodTextureHigh && uu._lodTextureHigh.dispose(), uu._lodTextureMid && uu._lodTextureMid.dispose(), uu._lodTextureLow && uu._lodTextureLow.dispose(), uu._irradianceTexture && uu._irradianceTexture.dispose()
      }
      _deleteTexture(uu) {
        uu?.release()
      }
      _setProgram(uu) {
        this._currentProgram !== uu && ((0, Uu.m)(uu, this._gl), this._currentProgram = uu)
      }
      bindSamplers(uu) {
        const Eu = uu.getPipelineContext();
        this._setProgram(Eu.program);
        const ju = uu.getSamplers();
        for (let su = 0; su < ju.length; su++) {
          const Eu = uu.getUniform(ju[su]);
          Eu && (this._boundUniforms[su] = Eu)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Uu = !1;
        const Zu = Eu && Eu._associatedChannel > -1;
        ju && Zu && (this._activeChannel = Eu._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== Eu || su) {
          if (this._activateCurrentTexture(), Eu && Eu.isMultiview) throw lu.b.Error(["_bindTextureDirectly called with a multiview texture!", uu, Eu]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(uu, Eu?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = Eu, Eu && (Eu._associatedChannel = this._activeChannel)
        } else ju && (Uu = !0, this._activateCurrentTexture());
        return Zu && !ju && this._bindSamplerUniformToChannel(Eu._associatedChannel, this._activeChannel), Uu
      }
      _bindTexture(uu, Eu, ju) {
        if (void 0 === uu) return;
        Eu && (Eu._associatedChannel = uu), this._activeChannel = uu;
        const su = Eu ? this._getTextureTarget(Eu) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(su, Eu)
      }
      unbindAllTextures() {
        for (let uu = 0; uu < this._maxSimultaneousTextures; uu++) this._activeChannel = uu, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.uY > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(uu, Eu, ju, su) {
        void 0 !== uu && (Eu && (this._boundUniforms[uu] = Eu), this._setTexture(uu, ju))
      }
      _bindSamplerUniformToChannel(uu, Eu) {
        const ju = this._boundUniforms[uu];
        ju && ju._currentState !== Eu && (this._gl.uniform1i(ju, Eu), ju._currentState = Eu)
      }
      _getTextureWrapMode(uu) {
        switch (uu) {
          case 1:
            return this._gl.REPEAT;
          case 0:
            return this._gl.CLAMP_TO_EDGE;
          case 2:
            return this._gl.MIRRORED_REPEAT
        }
        return this._gl.REPEAT
      }
      _setTexture(uu, Eu) {
        let ju, su = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Uu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!Eu) return null != this._boundTexturesCache[uu] && (this._activeChannel = uu, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.uY > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (Eu.video) {
          this._activeChannel = uu;
          const ju = Eu.getInternalTexture();
          ju && (ju._associatedChannel = uu), Eu.update()
        } else if (4 === Eu.delayLoadState) return Eu.delayLoad(), !1;
        ju = Uu ? Eu.depthStencilTexture : Eu.isReady() ? Eu.getInternalTexture() : Eu.isCube ? this.emptyCubeTexture : Eu.is3D ? this.emptyTexture3D : Eu.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !su && ju && (ju._associatedChannel = uu);
        let Zu = !0;
        this._boundTexturesCache[uu] === ju && (su || this._bindSamplerUniformToChannel(ju._associatedChannel, uu), Zu = !1), this._activeChannel = uu;
        const Xu = this._getTextureTarget(ju);
        if (Zu && this._bindTextureDirectly(Xu, ju, su), ju && !ju.isMultiview) {
          if (ju.isCube && ju._cachedCoordinatesMode !== Eu.coordinatesMode) {
            ju._cachedCoordinatesMode = Eu.coordinatesMode;
            const uu = 3 !== Eu.coordinatesMode && 5 !== Eu.coordinatesMode ? 1 : 0;
            Eu.wrapU = uu, Eu.wrapV = uu
          }
          ju._cachedWrapU !== Eu.wrapU && (ju._cachedWrapU = Eu.wrapU, this._setTextureParameterInteger(Xu, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(Eu.wrapU), ju)), ju._cachedWrapV !== Eu.wrapV && (ju._cachedWrapV = Eu.wrapV, this._setTextureParameterInteger(Xu, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(Eu.wrapV), ju)), ju.is3D && ju._cachedWrapR !== Eu.wrapR && (ju._cachedWrapR = Eu.wrapR, this._setTextureParameterInteger(Xu, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(Eu.wrapR), ju)), this._setAnisotropicLevel(Xu, ju, Eu.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(uu, Eu, ju, su) {
        if (void 0 !== uu && Eu) {
          this._textureUnits && this._textureUnits.length === ju.length || (this._textureUnits = new Int32Array(ju.length));
          for (let Eu = 0; Eu < ju.length; Eu++) {
            const su = ju[Eu].getInternalTexture();
            su ? (this._textureUnits[Eu] = uu + Eu, su._associatedChannel = uu + Eu) : this._textureUnits[Eu] = -1
          }
          this._gl.uniform1iv(Eu, this._textureUnits);
          for (let uu = 0; uu < ju.length; uu++) this._setTexture(this._textureUnits[uu], ju[uu], !0)
        }
      }
      _setAnisotropicLevel(uu, Eu, ju) {
        const su = this._caps.textureAnisotropicFilterExtension;
        11 !== Eu.samplingMode && 3 !== Eu.samplingMode && 2 !== Eu.samplingMode && (ju = 1), su && Eu._cachedAnisotropicFilteringLevel !== ju && (this._setTextureParameterFloat(uu, su.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(ju, this._caps.maxAnisotropy), Eu), Eu._cachedAnisotropicFilteringLevel = ju)
      }
      _setTextureParameterFloat(uu, Eu, ju, su) {
        this._bindTextureDirectly(uu, su, !0, !0), this._gl.texParameterf(uu, Eu, ju)
      }
      _setTextureParameterInteger(uu, Eu, ju, su) {
        su && this._bindTextureDirectly(uu, su, !0, !0), this._gl.texParameteri(uu, Eu, ju)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let uu = 0; uu < this._caps.maxVertexAttribs; uu++) this.disableAttributeByIndex(uu)
        } else
          for (let uu = 0, Eu = this._vertexAttribArraysEnabled.length; uu < Eu; uu++) uu >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[uu] || this.disableAttributeByIndex(uu)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, qu.m)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, Uu.y)(this._gl)
      }
      attachContextLostEvent(uu) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextlost", uu, !1)
      }
      attachContextRestoredEvent(uu) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextrestored", uu, !1)
      }
      getError() {
        return this._gl.getError()
      }
      _canRenderToFloatFramebuffer() {
        return this._webGLVersion > 1 ? this._caps.colorBufferFloat : this._canRenderToFramebuffer(1)
      }
      _canRenderToHalfFloatFramebuffer() {
        return this._webGLVersion > 1 ? this._caps.colorBufferFloat : this._canRenderToFramebuffer(2)
      }
      _canRenderToFramebuffer(uu) {
        const Eu = this._gl;
        for (; Eu.getError() !== Eu.NO_ERROR;);
        let ju = !0;
        const su = Eu.createTexture();
        Eu.bindTexture(Eu.TEXTURE_2D, su), Eu.texImage2D(Eu.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(uu), 1, 1, 0, Eu.RGBA, this._getWebGLTextureType(uu), null), Eu.texParameteri(Eu.TEXTURE_2D, Eu.TEXTURE_MIN_FILTER, Eu.NEAREST), Eu.texParameteri(Eu.TEXTURE_2D, Eu.TEXTURE_MAG_FILTER, Eu.NEAREST);
        const Uu = Eu.createFramebuffer();
        Eu.bindFramebuffer(Eu.FRAMEBUFFER, Uu), Eu.framebufferTexture2D(Eu.FRAMEBUFFER, Eu.COLOR_ATTACHMENT0, Eu.TEXTURE_2D, su, 0);
        const Zu = Eu.checkFramebufferStatus(Eu.FRAMEBUFFER);
        if (ju = ju && Zu === Eu.FRAMEBUFFER_COMPLETE, ju = ju && Eu.getError() === Eu.NO_ERROR, ju && (Eu.clear(Eu.COLOR_BUFFER_BIT), ju = ju && Eu.getError() === Eu.NO_ERROR), ju) {
          Eu.bindFramebuffer(Eu.FRAMEBUFFER, null);
          const uu = Eu.RGBA,
            su = Eu.UNSIGNED_BYTE,
            Uu = new Uint8Array(4);
          Eu.readPixels(0, 0, 1, 1, uu, su, Uu), ju = ju && Eu.getError() === Eu.NO_ERROR
        }
        for (Eu.deleteTexture(su), Eu.deleteFramebuffer(Uu), Eu.bindFramebuffer(Eu.FRAMEBUFFER, null); !ju && Eu.getError() !== Eu.NO_ERROR;);
        return ju
      }
      _getWebGLTextureType(uu) {
        if (1 === this._webGLVersion) {
          switch (uu) {
            case 1:
              return this._gl.FLOAT;
            case 2:
              return this._gl.HALF_FLOAT_OES;
            case 0:
              return this._gl.UNSIGNED_BYTE;
            case 8:
              return this._gl.UNSIGNED_SHORT_4_4_4_4;
            case 9:
              return this._gl.UNSIGNED_SHORT_5_5_5_1;
            case 10:
              return this._gl.UNSIGNED_SHORT_5_6_5
          }
          return this._gl.UNSIGNED_BYTE
        }
        switch (uu) {
          case 3:
            return this._gl.BYTE;
          case 0:
            return this._gl.UNSIGNED_BYTE;
          case 4:
            return this._gl.SHORT;
          case 5:
            return this._gl.UNSIGNED_SHORT;
          case 6:
            return this._gl.INT;
          case 7:
            return this._gl.UNSIGNED_INT;
          case 1:
            return this._gl.FLOAT;
          case 2:
            return this._gl.HALF_FLOAT;
          case 8:
            return this._gl.UNSIGNED_SHORT_4_4_4_4;
          case 9:
            return this._gl.UNSIGNED_SHORT_5_5_5_1;
          case 10:
            return this._gl.UNSIGNED_SHORT_5_6_5;
          case 11:
            return this._gl.UNSIGNED_INT_2_10_10_10_REV;
          case 12:
            return this._gl.UNSIGNED_INT_24_8;
          case 13:
            return this._gl.UNSIGNED_INT_10F_11F_11F_REV;
          case 14:
            return this._gl.UNSIGNED_INT_5_9_9_9_REV;
          case 15:
            return this._gl.FLOAT_32_UNSIGNED_INT_24_8_REV
        }
        return this._gl.UNSIGNED_BYTE
      }
      _getInternalFormat(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ju = Eu ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (uu) {
          case 0:
            ju = this._gl.ALPHA;
            break;
          case 1:
            ju = this._gl.LUMINANCE;
            break;
          case 2:
            ju = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            ju = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            ju = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            ju = Eu ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            ju = Eu ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (uu) {
          case 8:
            ju = this._gl.RED_INTEGER;
            break;
          case 9:
            ju = this._gl.RG_INTEGER;
            break;
          case 10:
            ju = this._gl.RGB_INTEGER;
            break;
          case 11:
            ju = this._gl.RGBA_INTEGER
        }
        return ju
      }
      _getRGBABufferInternalSizedFormat(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== Eu) switch (Eu) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return ju ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (uu) {
          case 3:
            switch (Eu) {
              case 6:
                return this._gl.R8_SNORM;
              case 7:
                return this._gl.RG8_SNORM;
              case 4:
                return this._gl.RGB8_SNORM;
              case 8:
                return this._gl.R8I;
              case 9:
                return this._gl.RG8I;
              case 10:
                return this._gl.RGB8I;
              case 11:
                return this._gl.RGBA8I;
              default:
                return this._gl.RGBA8_SNORM
            }
          case 0:
            switch (Eu) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return ju ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return ju ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
              case 8:
                return this._gl.R8UI;
              case 9:
                return this._gl.RG8UI;
              case 10:
                return this._gl.RGB8UI;
              case 11:
                return this._gl.RGBA8UI;
              case 0:
                return this._gl.ALPHA;
              case 1:
                return this._gl.LUMINANCE;
              case 2:
                return this._gl.LUMINANCE_ALPHA;
              default:
                return this._gl.RGBA8
            }
          case 4:
            switch (Eu) {
              case 8:
                return this._gl.R16I;
              case 36760:
                return this._gl.R16_SNORM_EXT;
              case 36761:
                return this._gl.RG16_SNORM_EXT;
              case 36762:
                return this._gl.RGB16_SNORM_EXT;
              case 36763:
                return this._gl.RGBA16_SNORM_EXT;
              case 9:
                return this._gl.RG16I;
              case 10:
                return this._gl.RGB16I;
              default:
                return this._gl.RGBA16I
            }
          case 5:
            switch (Eu) {
              case 8:
                return this._gl.R16UI;
              case 33322:
                return this._gl.R16_EXT;
              case 33324:
                return this._gl.RG16_EXT;
              case 32852:
                return this._gl.RGB16_EXT;
              case 32859:
                return this._gl.RGBA16_EXT;
              case 9:
                return this._gl.RG16UI;
              case 10:
                return this._gl.RGB16UI;
              default:
                return this._gl.RGBA16UI
            }
          case 6:
            switch (Eu) {
              case 8:
                return this._gl.R32I;
              case 9:
                return this._gl.RG32I;
              case 10:
                return this._gl.RGB32I;
              default:
                return this._gl.RGBA32I
            }
          case 7:
            switch (Eu) {
              case 8:
                return this._gl.R32UI;
              case 9:
                return this._gl.RG32UI;
              case 10:
                return this._gl.RGB32UI;
              default:
                return this._gl.RGBA32UI
            }
          case 1:
            switch (Eu) {
              case 6:
                return this._gl.R32F;
              case 7:
                return this._gl.RG32F;
              case 4:
                return this._gl.RGB32F;
              default:
                return this._gl.RGBA32F
            }
          case 2:
            switch (Eu) {
              case 6:
                return this._gl.R16F;
              case 7:
                return this._gl.RG16F;
              case 4:
                return this._gl.RGB16F;
              default:
                return this._gl.RGBA16F
            }
          case 10:
            return this._gl.RGB565;
          case 13:
            return this._gl.R11F_G11F_B10F;
          case 14:
            return this._gl.RGB9_E5;
          case 8:
            return this._gl.RGBA4;
          case 9:
            return this._gl.RGB5_A1;
          case 11:
            switch (Eu) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return ju ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(uu, Eu, ju, su) {
        let Uu = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Zu = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Xu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const qu = Uu ? 4 : 3,
          fu = Uu ? this._gl.RGBA : this._gl.RGB,
          Cu = ju * su * qu;
        if (Xu) {
          if (Xu.length < Cu) return lu.b.Error(`Data buffer is too small to store the read pixels (${Xu.length} should be more than ${Cu})`), Promise.resolve(Xu)
        } else Xu = new Uint8Array(Cu);
        return Zu && this.flushFramebuffer(), this._gl.readPixels(uu, Eu, ju, su, fu, this._gl.UNSIGNED_BYTE, Xu), Promise.resolve(Xu)
      }
      static get IsSupportedAsync() {
        return Promise.resolve(this.isSupported())
      }
      static get IsSupported() {
        return this.isSupported()
      }
      static isSupported() {
        if (null !== this._HasMajorPerformanceCaveat) return !this._HasMajorPerformanceCaveat;
        if (null === this._IsSupported) try {
          const uu = Zu.d._CreateCanvas(1, 1),
            Eu = uu.getContext("webgl") || uu.getContext("experimental-webgl");
          this._IsSupported = null != Eu && !!globalThis.WebGLRenderingContext
        } catch (uu) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const uu = Zu.d._CreateCanvas(1, 1),
            Eu = uu.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || uu.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !Eu
        } catch (uu) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    Gu._TempClearColorUint32 = new Uint32Array(4), Gu._TempClearColorInt32 = new Int32Array(4), Gu._TempClearColorFloat32 = new Float32Array(4), Gu.ExceptionList = [{
      key: "Chrome/63.0",
      capture: "63\\.0\\.3239\\.(\\d+)",
      captureConstraint: 108,
      targets: ["uniformBuffer"]
    }, {
      key: "Firefox/58",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: "Firefox/59",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: "Chrome/72.+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Chrome/73.+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Chrome/74.+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Mac OS.+Chrome/71",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Mac OS.+Chrome/72",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Mac OS.+Chrome",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: "Chrome/12\\d\\..+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: ".*AppleWebKit.*(15.4).*Safari",
      capture: null,
      captureConstraint: null,
      targets: ["antialias", "maxMSAASamples"]
    }, {
      key: ".*(15.4).*AppleWebKit.*Safari",
      capture: null,
      captureConstraint: null,
      targets: ["antialias", "maxMSAASamples"]
    }], Gu._ConcatenateShader = hu.g, Gu._IsSupported = null, Gu._HasMajorPerformanceCaveat = null
  },
  40442: (uu, Eu, ju) => {
    var su;
    ju.d(Eu, {
        d: () => Uu
      }),
      function(uu) {
        uu[uu.PointerMove = 0] = "PointerMove", uu[uu.PointerDown = 1] = "PointerDown", uu[uu.PointerUp = 2] = "PointerUp"
      }(su || (su = {}));
    class Uu {}
    Uu.DOM_DELTA_PIXEL = 0, Uu.DOM_DELTA_LINE = 1, Uu.DOM_DELTA_PAGE = 2
  },
  40434: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => su,
      c: () => Zu,
      d: () => Uu
    });
    class su {}
    su.KEYDOWN = 1, su.KEYUP = 2;
    class Uu {
      constructor(uu, Eu) {
        this.type = uu, this.event = Eu
      }
    }
    class Zu extends Uu {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(uu) {
        this.skipOnKeyboardObservable = uu
      }
      constructor(uu, Eu) {
        super(uu, Eu), this.type = uu, this.event = Eu, this.skipOnKeyboardObservable = !1
      }
    }
  },
  40430: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Uu,
      g: () => Xu,
      h: () => lu
    });
    var su = ju(37494);
    class Uu {}
    Uu.POINTERDOWN = 1, Uu.POINTERUP = 2, Uu.POINTERMOVE = 4, Uu.POINTERWHEEL = 8, Uu.POINTERPICK = 16, Uu.POINTERTAP = 32, Uu.POINTERDOUBLETAP = 64;
    class Zu {
      constructor(uu, Eu) {
        this.type = uu, this.event = Eu
      }
    }
    class Xu extends Zu {
      constructor(uu, Eu, ju, Uu) {
        super(uu, Eu), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new su.p(ju, Uu)
      }
    }
    class lu extends Zu {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(uu, Eu), this._pickInfo = ju, this._inputManager = su
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  40450: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => su
    });
    class su {
      static CompareLightsPriority(uu, Eu) {
        return uu.shadowEnabled !== Eu.shadowEnabled ? (Eu.shadowEnabled ? 1 : 0) - (uu.shadowEnabled ? 1 : 0) : Eu.renderPriority - uu.renderPriority
      }
    }
    su.FALLOFF_DEFAULT = 0, su.FALLOFF_PHYSICAL = 1, su.FALLOFF_GLTF = 2, su.FALLOFF_STANDARD = 3, su.LIGHTMAP_DEFAULT = 0, su.LIGHTMAP_SPECULAR = 1, su.LIGHTMAP_SHADOWSONLY = 2, su.INTENSITYMODE_AUTOMATIC = 0, su.INTENSITYMODE_LUMINOUSPOWER = 1, su.INTENSITYMODE_LUMINOUSINTENSITY = 2, su.INTENSITYMODE_ILLUMINANCE = 3, su.INTENSITYMODE_LUMINANCE = 4, su.LIGHTTYPEID_POINTLIGHT = 0, su.LIGHTTYPEID_DIRECTIONALLIGHT = 1, su.LIGHTTYPEID_SPOTLIGHT = 2, su.LIGHTTYPEID_HEMISPHERICLIGHT = 3, su.LIGHTTYPEID_RECT_AREALIGHT = 4, su.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  40108: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Xu
    });
    var su, Uu = ju(37514),
      Zu = ju(40111);
    ! function(uu) {
      uu[uu.Unknown = 0] = "Unknown", uu[uu.Url = 1] = "Url", uu[uu.Temp = 2] = "Temp", uu[uu.Raw = 3] = "Raw", uu[uu.Dynamic = 4] = "Dynamic", uu[uu.RenderTarget = 5] = "RenderTarget", uu[uu.MultiRenderTarget = 6] = "MultiRenderTarget", uu[uu.Cube = 7] = "Cube", uu[uu.CubeRaw = 8] = "CubeRaw", uu[uu.CubePrefiltered = 9] = "CubePrefiltered", uu[uu.Raw3D = 10] = "Raw3D", uu[uu.Raw2DArray = 11] = "Raw2DArray", uu[uu.DepthStencil = 12] = "DepthStencil", uu[uu.CubeRawRGBD = 13] = "CubeRawRGBD", uu[uu.Depth = 14] = "Depth", uu[uu.External = 15] = "External"
    }(su || (su = {}));
    class Xu extends Zu.c {
      get useMipMaps() {
        return null === this._useMipMaps ? this.generateMipMaps : this._useMipMaps
      }
      set useMipMaps(uu) {
        this._useMipMaps = uu
      }
      get uniqueId() {
        return this._uniqueId
      }
      _setUniqueId(uu) {
        this._uniqueId = uu
      }
      wO() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new Uu.d, this.onErrorObservable = new Uu.d, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = uu, this._source = Eu, this._uniqueId = Xu._Counter++, ju || (this._hardwareTexture = uu._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, uu, Eu, ju), this.width = uu, this.height = Eu, this.depth = ju, this.baseWidth = uu, this.baseHeight = Eu, this.baseDepth = ju, this._size = uu * Eu * ju
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const uu = this.onRebuildCallback(this),
            Eu = Eu => {
              Eu._swapAndDie(this, !1), this.isReady = uu.isReady
            };
          return void(uu.isAsync ? uu.proxy.then(Eu) : Eu(uu.proxy))
        }
        let uu;
        switch (this.source) {
          case 2:
          case 12:
          case 14:
          case 15:
            break;
          case 1:
            return void(uu = this._engine.createTexture(this._originalUrl ?? this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, (uu => {
              uu._swapAndDie(this, !1), this.isReady = !0
            }), null, this._buffer, void 0, this.format, this._extension, void 0, void 0, void 0, this._useSRGBBuffer));
          case 3:
            if (uu = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this._useSRGBBuffer, this.mipLevelCount), uu._swapAndDie(this, !1), this._bufferViewArray)
              for (let uu = 0; uu < this._bufferViewArray.length; uu++) {
                const Eu = this._bufferViewArray[uu];
                Eu && this._engine.updateRawTexture(this, Eu, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, uu)
              }
            this.isReady = !0;
            break;
          case 10:
            uu = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), uu._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (uu = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), uu._swapAndDie(this, !1), this._bufferViewArray)
              for (let uu = 0; uu < this._bufferViewArray.length; uu++) {
                const Eu = this._bufferViewArray[uu];
                Eu && this._engine.updateRawTexture2DArray(this, Eu, this.format, this.invertY, this._compression, this.type, uu)
              }
            this.isReady = !0;
            break;
          case 4:
            uu = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode), uu._swapAndDie(this, !1), this._dynamicTextureSource && this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlpha, this.format, !0);
            break;
          case 7:
            return void(uu = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, (() => {
              uu._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, !1, 0, 0, null, void 0, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null));
          case 8:
            uu = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this._originalFormat ?? this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression), uu._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 13:
            return;
          case 9:
            return uu = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, (uu => {
              uu && uu._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, void 0, ArrayBuffer.isView(this._buffer) ? this._buffer : null), void(uu._sphericalPolynomial = this._sphericalPolynomial)
        }
      }
      _swapAndDie(uu) {
        let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(uu._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), uu._hardwareTexture = this._hardwareTexture, uu._setUniqueId(Xu._Counter++), Eu && (uu._isRGBD = this._isRGBD), this._lodTextureHigh && (uu._lodTextureHigh && uu._lodTextureHigh.dispose(), uu._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (uu._lodTextureMid && uu._lodTextureMid.dispose(), uu._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (uu._lodTextureLow && uu._lodTextureLow.dispose(), uu._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (uu._irradianceTexture && uu._irradianceTexture.dispose(), uu._irradianceTexture = this._irradianceTexture);
        const ju = this._engine.getLoadedTexturesCache();
        let su = ju.indexOf(this); - 1 !== su && ju.splice(su, 1), su = ju.indexOf(uu), -1 === su && ju.push(uu)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    Xu._Counter = 0
  },
  40206: (uu, Eu, ju) => {
    function su(uu) {
      return 13 === uu || 14 === uu || 15 === uu || 16 === uu || 17 === uu || 18 === uu || 19 === uu
    }

    function Uu(uu) {
      return 8 === uu || 9 === uu || 10 === uu || 11 === uu
    }

    function Zu(uu) {
      return 0 === uu || 5 === uu || 7 === uu || 11 === uu
    }

    function Xu(uu) {
      return 13 === uu || 17 === uu || 18 === uu || 19 === uu
    }
    ju.d(Eu, {
      b: () => Xu,
      c: () => su,
      e: () => Uu,
      i: () => Zu
    })
  },
  40111: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => su
    });
    class su {
      get wrapU() {
        return this._cachedWrapU
      }
      set wrapU(uu) {
        this._cachedWrapU = uu
      }
      get wrapV() {
        return this._cachedWrapV
      }
      set wrapV(uu) {
        this._cachedWrapV = uu
      }
      get wrapR() {
        return this._cachedWrapR
      }
      set wrapR(uu) {
        this._cachedWrapR = uu
      }
      get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel
      }
      set anisotropicFilteringLevel(uu) {
        this._cachedAnisotropicFilteringLevel = uu
      }
      get comparisonFunction() {
        return this._comparisonFunction
      }
      set comparisonFunction(uu) {
        this._comparisonFunction = uu
      }
      get useMipMaps() {
        return this._useMipMaps
      }
      set useMipMaps(uu) {
        this._useMipMaps = uu
      }
      constructor() {
        this.samplingMode = -1, this._useMipMaps = !0, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this._comparisonFunction = 0
      }
      setParameters() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          Zu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = uu, this._cachedWrapV = Eu, this._cachedWrapR = ju, this._cachedAnisotropicFilteringLevel = su, this.samplingMode = Uu, this._comparisonFunction = Zu, this
      }
      compareSampler(uu) {
        return this._cachedWrapU === uu._cachedWrapU && this._cachedWrapV === uu._cachedWrapV && this._cachedWrapR === uu._cachedWrapR && this._cachedAnisotropicFilteringLevel === uu._cachedAnisotropicFilteringLevel && this.samplingMode === uu.samplingMode && this._comparisonFunction === uu._comparisonFunction && this._useMipMaps === uu._useMipMaps
      }
    }
  },
  40377: (uu, Eu, ju) => {
    function su(uu) {
      uu.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    ju.d(Eu, {
      c: () => su
    })
  },
  40179: (uu, Eu, ju) => {
    function su(uu) {
      return void 0 === uu.getPipelineContext
    }
    ju.d(Eu, {
      e: () => su
    })
  },
  40589: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Uu
    });
    var su = ju(40164);
    class Uu {
      static GetEffect(uu) {
        return void 0 === uu.getPipelineContext ? uu.effect : uu
      }
      constructor(uu) {
        let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = uu.createDrawContext(), Eu && (this.materialContext = uu.createMaterialContext())
      }
      setEffect(uu, Eu) {
        let ju = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        ju || this.effect === uu || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = uu, void 0 !== Eu && (this.defines = Eu), ju && this.drawContext?.reset()
      }
      dispose() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const Eu = this.effect;
          uu ? Eu.dispose() : su.c.SetImmediate((() => {
            Eu.wO().onEndFrameObservable.addOnce((() => {
              Eu.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  40131: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => bu,
      e: () => Nu,
      g: () => fu,
      h: () => Cu
    });
    var su = ju(40138),
      Uu = ju(40146),
      Zu = ju(40127),
      Xu = ju(39032),
      lu = ju(40160),
      qu = ju(40149);

    function fu(uu, Eu) {
      return (0, Uu.A)(Eu).cachedPipelines[uu]
    }

    function Cu(uu) {
      const Eu = uu._name,
        ju = uu.context;
      if (Eu && ju) {
        const uu = (0, Uu.A)(ju),
          su = uu.cachedPipelines[Eu];
        su?.dispose(), delete uu.cachedPipelines[Eu]
      }
    }

    function bu(uu, Eu, ju, Uu, Zu, Xu, qu) {
      let fu, Cu;
      const bu = (0, su.m)() ? Xu?.getHostDocument() : null;
      fu = "string" === typeof Eu ? Eu : "string" === typeof Eu.vertexSource ? "source:" + Eu.vertexSource : "string" === typeof Eu.vertexElement ? bu?.getElementById(Eu.vertexElement) || Eu.vertexElement : Eu.vertex || Eu, Cu = "string" === typeof Eu ? Eu : "string" === typeof Eu.fragmentSource ? "source:" + Eu.fragmentSource : "string" === typeof Eu.fragmentElement ? bu?.getElementById(Eu.fragmentElement) || Eu.fragmentElement : Eu.fragment || Eu;
      const Nu = [void 0, void 0],
        Ou = () => {
          if (Nu[0] && Nu[1]) {
            const [su, fu] = Nu;
            (0, lu.i)(uu), (0, lu.p)(su, uu, ((su, Cu) => {
              qu && (qu._vertexSourceCodeBeforeMigration = Cu), ju && (su = ju("vertex", su)), uu.isFragment = !0, (0, lu.p)(fu, uu, ((Xu, fu) => {
                qu && (qu._fragmentSourceCodeBeforeMigration = fu), ju && (Xu = ju("fragment", Xu));
                const Cu = (0, lu.e)(su, Xu, uu);
                uu = null;
                const bu = function(uu, Eu, ju, su) {
                  if (ju) {
                    return {
                      vertexSourceCode: (1 === su ? "//" : "") + "#define SHADER_NAME vertex:" + (ju.vertexElement || ju.vertex || ju.spectorName || ju) + "\n" + uu,
                      fragmentSourceCode: (1 === su ? "//" : "") + "#define SHADER_NAME fragment:" + (ju.fragmentElement || ju.fragment || ju.spectorName || ju) + "\n" + Eu
                    }
                  }
                  return {
                    vertexSourceCode: uu,
                    fragmentSourceCode: Eu
                  }
                }(Cu.vertexCode, Cu.fragmentCode, Eu, Zu);
                Uu?.(bu.vertexSourceCode, bu.fragmentSourceCode)
              }), Xu)
            }), Xu)
          }
        };
      cu(fu, "Vertex", "", (uu => {
        qu && (qu._rawVertexSourceCode = uu), Nu[0] = uu, Ou()
      }), Zu), cu(Cu, "Fragment", "Pixel", (uu => {
        qu && (qu._rawFragmentSourceCode = uu), Nu[1] = uu, Ou()
      }), Zu)
    }

    function cu(uu, Eu, ju, Uu, Xu, lu) {
      if ("undefined" !== typeof HTMLElement && uu instanceof HTMLElement) {
        return void Uu((0, su.d)(uu))
      }
      if ("source:" === uu.substring(0, 7)) return void Uu(uu.substring(7));
      if ("base64:" === uu.substring(0, 7)) {
        return void Uu(window.atob(uu.substring(7)))
      }
      const fu = Zu.b.GetShadersStore(Xu);
      if (fu[uu + Eu + "Shader"]) return void Uu(fu[uu + Eu + "Shader"]);
      if (ju && fu[uu + ju + "Shader"]) return void Uu(fu[uu + ju + "Shader"]);
      let Cu;
      if (Cu = "." === uu[0] || "/" === uu[0] || uu.indexOf("http") > -1 ? uu : Zu.b.GetShadersRepository(Xu) + uu, !(lu = lu || qu.l)) throw new Error("loadFileInjection is not defined");
      lu(Cu + "." + Eu.toLowerCase() + ".fx", Uu)
    }
    const Nu = (uu, Eu, ju, su) => {
      try {
        const Zu = uu.context ? (0, Uu.A)(uu.context) : null;
        Zu && (Zu.disableParallelShaderCompile = uu.disableParallelCompilation);
        const Xu = uu.existingPipelineContext || Eu(uu.shaderProcessingContext);
        return Xu._name = uu.name, uu.name && Zu && (Zu.cachedPipelines[uu.name] = Xu), ju(Xu, uu.vertex, uu.fragment, !!uu.createAsRaw, "", "", uu.rebuildRebind, uu.defines, uu.transformFeedbackVaryings, "", (() => {
          su(Xu, (() => {
            uu.onRenderingStateCompiled?.(Xu)
          }))
        })), Xu
      } catch (Zu) {
        throw Xu.b.Error("Error compiling effect"), Zu
      }
    }
  },
  40121: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => qu
    });
    var su = ju(37514),
      Uu = ju(39032),
      Zu = ju(40127),
      Xu = ju(40131),
      lu = ju(40164);
    class qu {
      static get ShadersRepository() {
        return Zu.b.ShadersRepository
      }
      static set ShadersRepository(uu) {
        Zu.b.ShadersRepository = uu
      }
      get Gw() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new su.d), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(uu, Eu, ju) {
        let Uu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Zu = arguments.length > 4 ? arguments[4] : void 0,
          lu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          fu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          Cu = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          bu = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          cu = arguments.length > 9 ? arguments[9] : void 0,
          Nu = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          Ou = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          Yu = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new su.d, this.onErrorObservable = new su.d, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = uu, this._key = Nu;
        const hu = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let Du;
        if (Eu.attributes) {
          const uu = Eu;
          if (this._engine = ju, this._attributesNames = uu.attributes, this._uniformsNames = uu.uniformsNames.concat(uu.samplers), this._samplerList = uu.samplers.slice(), this.defines = uu.defines, this.onError = uu.onError, this.onCompiled = uu.onCompiled, this._fallbacks = uu.fallbacks, this._indexParameters = uu.indexParameters, this._transformFeedbackVaryings = uu.transformFeedbackVaryings || null, this._multiTarget = !!uu.multiTarget, this._shaderLanguage = uu.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!uu.disableParallelShaderCompilation, uu.uniformBuffersNames) {
            this._uniformBuffersNamesList = uu.uniformBuffersNames.slice();
            for (let Eu = 0; Eu < uu.uniformBuffersNames.length; Eu++) this._uniformBuffersNames[uu.uniformBuffersNames[Eu]] = Eu
          }
          this._processFinalCode = uu.processFinalCode ?? null, this._processCodeAfterIncludes = uu.processCodeAfterIncludes ?? void 0, Yu = uu.extraInitializationsAsync, Du = uu.existingPipelineContext
        } else this._engine = Zu, this.defines = null == lu ? "" : lu, this._uniformsNames = ju.concat(Uu), this._samplerList = Uu ? Uu.slice() : [], this._attributesNames = Eu, this._uniformBuffersNamesList = [], this._shaderLanguage = Ou, this.onError = bu, this.onCompiled = Cu, this._indexParameters = cu, this._fallbacks = fu;
        "WEBGL2" === this._engine.shaderPlatformName && (Du = (0, Xu.g)(hu, this._engine._gl) ?? Du), this._attributeLocationByName = {}, this.uniqueId = qu._UniqueIdSeed++, Du ? (this._pipelineContext = Du, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, Yu).catch((uu => {
          const Eu = uu?.message ?? String(uu),
            ju = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${Eu}`);
          uu && "string" === typeof uu.stack && (ju.stack = `${ju.message}\nCaused by: ${uu.stack}`), this._processCompilationErrors(ju)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.Gw || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          su = arguments.length > 3 ? arguments[3] : void 0;
        su && await su(), this._processingContext = ju || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const Uu = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: uu ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: Zu.b.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: Zu.b.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          bsu: this._engine.bsu,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, Xu.d)(Uu, this.name, this._processFinalCode, ((uu, ju) => {
          this._vertexSourceCode = uu, this._fragmentSourceCode = ju, this._prepareEffect(Eu)
        }), this._shaderLanguage, this._engine, this)
      }
      get key() {
        return this._key
      }
      isReady() {
        try {
          return this._isReadyInternal()
        } catch {
          return !1
        }
      }
      _isReadyInternal() {
        return !!this._engine.Gw || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      wO() {
        return this._engine
      }
      getPipelineContext() {
        return this._pipelineContext
      }
      getAttributesNames() {
        return this._attributesNames
      }
      getAttributeLocation(uu) {
        return this._attributes[uu]
      }
      getAttributeLocationByName(uu) {
        return this._attributeLocationByName[uu]
      }
      getAttributesCount() {
        return this._attributes.length
      }
      getUniformIndex(uu) {
        return this._uniformsNames.indexOf(uu)
      }
      getUniform(uu) {
        return this._uniforms[uu]
      }
      getSamplers() {
        return this._samplerList
      }
      getUniformNames() {
        return this._uniformsNames
      }
      getUniformBuffersNames() {
        return this._uniformBuffersNamesList
      }
      getIndexParameters() {
        return this._indexParameters
      }
      getCompilationError() {
        return this._compilationError
      }
      allFallbacksProcessed() {
        return this._allFallbacksProcessed
      }
      async whenCompiledAsync() {
        return await new Promise((uu => {
          this.executeWhenCompiled(uu)
        }))
      }
      executeWhenCompiled(uu) {
        this.isReady() ? uu(this) : (this.onCompileObservable.add((Eu => {
          uu(Eu)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(uu) {
        (0, lu.d)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (Eu => {
          this._processCompilationErrors(Eu, uu)
        }), 16, 12e4, !0, ` - Effect: ${"string"===typeof this.name?this.name:this.key}`)
      }
      get vertexSourceCode() {
        return this._vertexSourceCodeOverride && this._fragmentSourceCodeOverride ? this._vertexSourceCodeOverride : this._pipelineContext?._getVertexShaderCode() ?? this._vertexSourceCode
      }
      get fragmentSourceCode() {
        return this._vertexSourceCodeOverride && this._fragmentSourceCodeOverride ? this._fragmentSourceCodeOverride : this._pipelineContext?._getFragmentShaderCode() ?? this._fragmentSourceCode
      }
      get vertexSourceCodeBeforeMigration() {
        return this._vertexSourceCodeBeforeMigration
      }
      get fragmentSourceCodeBeforeMigration() {
        return this._fragmentSourceCodeBeforeMigration
      }
      get rawVertexSourceCode() {
        return this._rawVertexSourceCode
      }
      get rawFragmentSourceCode() {
        return this._rawFragmentSourceCode
      }
      getPipelineGenerationOptions() {
        return {
          platformName: this._engine.shaderPlatformName,
          shaderLanguage: this._shaderLanguage,
          shaderNameOrContent: this.name,
          key: this._key,
          defines: this.defines.split("\n"),
          addGlobalDefines: !1,
          extendedProcessingOptions: {
            indexParameters: this._indexParameters,
            isNDCHalfZRange: this._engine.isNDCHalfZRange,
            bsu: this._engine.bsu,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(uu, Eu, ju, su) {
        this._isReady = !1, this._vertexSourceCodeOverride = uu, this._fragmentSourceCodeOverride = Eu, this.onError = (uu, Eu) => {
          su && su(Eu)
        }, this.onCompiled = () => {
          const uu = this.wO().scenes;
          if (uu)
            for (let Eu = 0; Eu < uu.length; Eu++) uu[Eu].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(ju)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(uu) {
        if (this._pipelineContext = uu, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let Eu = 0; Eu < this._attributesNames.length; Eu++) {
            const uu = this._attributesNames[Eu];
            this._attributeLocationByName[uu] = this._attributes[Eu]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), qu.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Eu = this._pipelineContext;
        this._isReady = !1;
        try {
          const ju = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            su = ju ? null : this.defines,
            Uu = ju ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            Zu = ju ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            lu = this._engine;
          this._pipelineContext = (0, Xu.e)({
            existingPipelineContext: uu ? Eu : null,
            vertex: Uu,
            fragment: Zu,
            context: "WEBGL2" === lu.shaderPlatformName || "WEBGL1" === lu.shaderPlatformName ? lu._gl : void 0,
            rebuildRebind: (uu, Eu, ju, su) => this._rebuildProgram(uu, Eu, ju, su),
            defines: su,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: ju,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: ju => {
              Eu && !uu && this._engine._deletePipelineContext(Eu), ju && this._onRenderingStateCompiled(ju)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(Eu)
        } catch (ju) {
          this._processCompilationErrors(ju, Eu)
        }
      }
      _getShaderCodeAndErrorLine(uu, Eu, ju) {
        const su = ju ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let Uu = null;
        if (Eu && uu) {
          const Zu = Eu.match(su);
          if (Zu && 2 === Zu.length) {
            const Eu = parseInt(Zu[1]),
              su = uu.split("\n", -1);
            su.length >= Eu && (Uu = `Offending line [${Eu}] in ${ju?"fragment":"vertex"} code: ${su[Eu-1]}`)
          }
        }
        return [uu, Uu]
      }
      _processCompilationErrors(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof uu?.stack ? uu.stack : uu?.message ?? String(uu);
        const ju = this._attributesNames,
          su = this._fallbacks;
        if (Uu.b.Error("Unable to compile effect:"), Uu.b.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), Uu.b.Error(`Attributes: ${ju.join(" ")}`), Uu.b.Error("Defines:\n" + this.defines), qu.LogShaderCodeOnCompilationError) {
          let uu, Eu = null,
            ju = null;
          this._pipelineContext?._getVertexShaderCode() && ([uu, Eu] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), uu && (Uu.b.Error("Vertex code:"), Uu.b.Error(uu))), this._pipelineContext?._getFragmentShaderCode() && ([uu, ju] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), uu && (Uu.b.Error("Fragment code:"), Uu.b.Error(uu))), Eu && Uu.b.Error(Eu), ju && Uu.b.Error(ju)
        }
        Uu.b.Error("Error: " + this._compilationError);
        const Zu = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        Eu && (this._pipelineContext = Eu, this._isReady = !0, Zu()), su ? (this._pipelineContext = null, su.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, Uu.b.Error("Trying next fallback."), this.defines = su.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, Zu(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, Eu || Zu())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(uu, Eu) {
        this._engine._bindTexture(this._samplers[uu], Eu, uu)
      }
      setTexture(uu, Eu) {
        this._engine.setTexture(this._samplers[uu], this._uniforms[uu], Eu, uu)
      }
      setTextureArray(uu, Eu) {
        const ju = uu + "Ex";
        if (-1 === this._samplerList.indexOf(ju + "0")) {
          const su = this._samplerList.indexOf(uu);
          for (let uu = 1; uu < Eu.length; uu++) {
            const Eu = ju + (uu - 1).toString();
            this._samplerList.splice(su + uu, 0, Eu)
          }
          let Uu = 0;
          for (const uu of this._samplerList) this._samplers[uu] = Uu, Uu += 1
        }
        this._engine.setTextureArray(this._samplers[uu], this._uniforms[uu], Eu, uu)
      }
      bindUniformBuffer(uu, Eu) {
        const ju = this._uniformBuffersNames[Eu];
        void 0 === ju || qu._BaseCache[ju] === uu && this._engine._features.useUBOBindingCache || (qu._BaseCache[ju] = uu, this._engine.bindUniformBufferBase(uu, ju, Eu))
      }
      bindUniformBlock(uu, Eu) {
        this._engine.bindUniformBlock(this._pipelineContext, uu, Eu)
      }
      setInt(uu, Eu) {
        return this._pipelineContext.setInt(uu, Eu), this
      }
      setInt2(uu, Eu, ju) {
        return this._pipelineContext.setInt2(uu, Eu, ju), this
      }
      setInt3(uu, Eu, ju, su) {
        return this._pipelineContext.setInt3(uu, Eu, ju, su), this
      }
      setInt4(uu, Eu, ju, su, Uu) {
        return this._pipelineContext.setInt4(uu, Eu, ju, su, Uu), this
      }
      setIntArray(uu, Eu) {
        return this._pipelineContext.setIntArray(uu, Eu), this
      }
      setIntArray2(uu, Eu) {
        return this._pipelineContext.setIntArray2(uu, Eu), this
      }
      setIntArray3(uu, Eu) {
        return this._pipelineContext.setIntArray3(uu, Eu), this
      }
      setIntArray4(uu, Eu) {
        return this._pipelineContext.setIntArray4(uu, Eu), this
      }
      setUInt(uu, Eu) {
        return this._pipelineContext.setUInt(uu, Eu), this
      }
      setUInt2(uu, Eu, ju) {
        return this._pipelineContext.setUInt2(uu, Eu, ju), this
      }
      setUInt3(uu, Eu, ju, su) {
        return this._pipelineContext.setUInt3(uu, Eu, ju, su), this
      }
      setUInt4(uu, Eu, ju, su, Uu) {
        return this._pipelineContext.setUInt4(uu, Eu, ju, su, Uu), this
      }
      setUIntArray(uu, Eu) {
        return this._pipelineContext.setUIntArray(uu, Eu), this
      }
      setUIntArray2(uu, Eu) {
        return this._pipelineContext.setUIntArray2(uu, Eu), this
      }
      setUIntArray3(uu, Eu) {
        return this._pipelineContext.setUIntArray3(uu, Eu), this
      }
      setUIntArray4(uu, Eu) {
        return this._pipelineContext.setUIntArray4(uu, Eu), this
      }
      setFloatArray(uu, Eu) {
        return this._pipelineContext.setArray(uu, Eu), this
      }
      setFloatArray2(uu, Eu) {
        return this._pipelineContext.setArray2(uu, Eu), this
      }
      setFloatArray3(uu, Eu) {
        return this._pipelineContext.setArray3(uu, Eu), this
      }
      setFloatArray4(uu, Eu) {
        return this._pipelineContext.setArray4(uu, Eu), this
      }
      setArray(uu, Eu) {
        return this._pipelineContext.setArray(uu, Eu), this
      }
      setArray2(uu, Eu) {
        return this._pipelineContext.setArray2(uu, Eu), this
      }
      setArray3(uu, Eu) {
        return this._pipelineContext.setArray3(uu, Eu), this
      }
      setArray4(uu, Eu) {
        return this._pipelineContext.setArray4(uu, Eu), this
      }
      setMatrices(uu, Eu) {
        return this._pipelineContext.setMatrices(uu, Eu), this
      }
      setMatrix(uu, Eu) {
        return this._pipelineContext.setMatrix(uu, Eu), this
      }
      setMatrix3x3(uu, Eu) {
        return this._pipelineContext.setMatrix3x3(uu, Eu), this
      }
      setMatrix2x2(uu, Eu) {
        return this._pipelineContext.setMatrix2x2(uu, Eu), this
      }
      setFloat(uu, Eu) {
        return this._pipelineContext.setFloat(uu, Eu), this
      }
      setBool(uu, Eu) {
        return this._pipelineContext.setInt(uu, Eu ? 1 : 0), this
      }
      setVector2(uu, Eu) {
        return this._pipelineContext.setVector2(uu, Eu), this
      }
      setFloat2(uu, Eu, ju) {
        return this._pipelineContext.setFloat2(uu, Eu, ju), this
      }
      setVector3(uu, Eu) {
        return this._pipelineContext.setVector3(uu, Eu), this
      }
      setFloat3(uu, Eu, ju, su) {
        return this._pipelineContext.setFloat3(uu, Eu, ju, su), this
      }
      setVector4(uu, Eu) {
        return this._pipelineContext.setVector4(uu, Eu), this
      }
      setQuaternion(uu, Eu) {
        return this._pipelineContext.setQuaternion(uu, Eu), this
      }
      setFloat4(uu, Eu, ju, su, Uu) {
        return this._pipelineContext.setFloat4(uu, Eu, ju, su, Uu), this
      }
      setColor3(uu, Eu) {
        return this._pipelineContext.setColor3(uu, Eu), this
      }
      setColor4(uu, Eu, ju) {
        return this._pipelineContext.setColor4(uu, Eu, ju), this
      }
      setDirectColor4(uu, Eu) {
        return this._pipelineContext.setDirectColor4(uu, Eu), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (qu.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, Xu.h)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        Eu && (Zu.b.GetShadersStore(su)[`${uu}PixelShader`] = Eu), ju && (Zu.b.GetShadersStore(su)[`${uu}VertexShader`] = ju)
      }
      static ResetCache() {
        qu._BaseCache = {}
      }
    }
    qu.LogShaderCodeOnCompilationError = !0, qu.PersistentMode = !1, qu.AutomaticallyClearCodeCache = !1, qu._UniqueIdSeed = 0, qu._BaseCache = {}, qu.ShadersStore = Zu.b.ShadersStore, qu.IncludesShadersStore = Zu.b.IncludesShadersStore
  },
  40412: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Cu,
      f: () => wu,
      i: () => pu
    });
    var su = ju(40121),
      Uu = ju(37494),
      Zu = ju(37525),
      Xu = ju(40390);
    const lu = new Uu.e,
      qu = new Uu.e,
      fu = new Uu.e,
      Cu = {
        hV: () => {},
        eyeAtCamera: !0
      };

    function bu(uu, Eu, ju) {
      const su = ju.Osu(),
        Uu = Eu.Osu();
      for (let Zu = 0; Zu < 16; Zu++) su[Zu] = Uu[Zu];
      return su[12] -= uu.x, su[13] -= uu.y, su[14] -= uu.z, ju.markAsUpdated(), ju
    }

    function cu(uu, Eu, ju) {
      return (0, Zu.i)(Eu, qu), bu(uu, qu, fu), (0, Zu.i)(fu, ju), ju
    }

    function Nu(uu, Eu, ju) {
      if (!Cu.eyeAtCamera) return cu(uu, Eu, ju);
      const su = ju.Osu(),
        Uu = Eu.Osu();
      for (let Zu = 0; Zu < 16; Zu++) su[Zu] = Uu[Zu];
      return su[12] = 0, su[13] = 0, su[14] = 0, ju.markAsUpdated(), ju
    }

    function Ou(uu, Eu, ju, su) {
      return (0, Zu.q)(Nu(uu, Eu, su), ju, su), su
    }

    function Yu(uu, Eu, ju, su) {
      return (0, Zu.i)(ju, qu), (0, Zu.q)(Eu, qu, fu), bu(uu, fu, qu), Nu(uu, ju, fu), (0, Zu.q)(qu, fu, su), su
    }

    function hu(uu, Eu, ju, su, Uu, Xu) {
      return (0, Zu.i)(ju, qu), (0, Zu.q)(Eu, qu, fu), bu(uu, fu, qu), Ou(uu, su, Uu, fu), (0, Zu.q)(qu, fu, Xu), Xu
    }

    function Du(uu, Eu) {
      const ju = Cu.hV();
      if (!ju || lu === Eu) return Eu;
      lu.updateFlag = Eu.updateFlag;
      const su = ju.floatingOriginOffset;
      switch (uu) {
        case "world":
          return bu(su, Eu, lu);
        case "view":
          return Nu(su, Eu, lu);
        case "worldView":
          return Yu(su, Eu, ju.getViewMatrix(), lu);
        case "viewProjection":
          return Ou(su, ju.getViewMatrix(), ju.getProjectionMatrix(), lu);
        case "worldViewProjection":
          return hu(su, Eu, ju.getTransformMatrix(), ju.getViewMatrix(), ju.getProjectionMatrix(), lu);
        default:
          if (uu.startsWith("u_")) {
            const Uu = uu.toLowerCase();
            if (Uu.startsWith("u_worldviewprojection")) return hu(su, Eu, ju.getTransformMatrix(), ju.getViewMatrix(), ju.getProjectionMatrix(), lu);
            if (Uu.startsWith("u_viewprojection")) return Ou(su, ju.getViewMatrix(), ju.getProjectionMatrix(), lu);
            if (Uu.startsWith("u_worldview")) return Yu(su, Eu, ju.getViewMatrix(), lu);
            if (Uu.startsWith("u_world")) return bu(su, Eu, lu);
            if (Uu.startsWith("u_view")) return Nu(su, Eu, lu)
          }
          return Eu
      }
    }
    const gu = Xu.d,
      Mu = su.b,
      eu = gu.prototype._updateMatrixForUniform,
      Gu = su.b.prototype.setMatrix;

    function pu() {
      su.b.prototype.setMatrix = Gu, Mu._setMatrixOverride = void 0, gu.prototype._updateMatrixForUniform = eu, gu.prototype._updateMatrixForUniformOverride = void 0
    }

    function wu() {
      Mu.prototype._setMatrixOverride = Gu, Mu.prototype.setMatrix = function(uu, Eu) {
        return this._setMatrixOverride(uu, Du(uu, Eu)), this
      }, gu.prototype._updateMatrixForUniformOverride = eu, gu.prototype._updateMatrixForUniform = function(uu, Eu) {
        this._updateMatrixForUniformOverride(uu, Du(uu, Eu))
      }
    }
  },
  40381: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Zu,
      f: () => Uu
    });
    var su = ju(40377);

    function Uu(uu, Eu) {
      Eu.WHITEBALANCE && uu.push("whiteBalanceMatrix"), Eu.EXPOSURE && uu.push("exposureLinear"), Eu.CONTRAST && uu.push("contrast"), Eu.COLORGRADING && uu.push("colorTransformSettings"), (Eu.VIGNETTE || Eu.DITHER) && uu.push("vInverseScreenSize"), Eu.VIGNETTE && (uu.push("vignetteSettings1"), uu.push("vignetteSettings2")), Eu.COLORCURVES && (0, su.c)(uu), Eu.DITHER && uu.push("ditherIntensity")
    }

    function Zu(uu, Eu) {
      Eu.COLORGRADING && uu.push("txColorTransform")
    }
  },
  40373: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => ou,
      g: () => vu
    });
    var su = ju(40255),
      Uu = ju(40258),
      Zu = ju(37514),
      Xu = ju(37680),
      lu = ju(37519),
      qu = ju(37494);
    const fu = [
        [0, .18006, .26352, -.24341],
        [10, .18066, .26589, -.25479],
        [20, .18133, .26846, -.26876],
        [30, .18208, .27119, -.28539],
        [40, .18293, .27407, -.3047],
        [50, .18388, .27709, -.32675],
        [60, .18494, .28021, -.35156],
        [70, .18611, .28342, -.37915],
        [80, .1874, .28668, -.40955],
        [90, .1888, .28997, -.44278],
        [100, .19032, .29326, -.47888],
        [125, .19462, .30141, -.58204],
        [150, .19962, .30921, -.70471],
        [175, .20525, .31647, -.84901],
        [200, .21142, .32312, -1.0182],
        [225, .21807, .32909, -1.2168],
        [250, .22511, .33439, -1.4512],
        [275, .23247, .33904, -1.7298],
        [300, .2401, .34308, -2.0637],
        [325, .24792, .34655, -2.4681],
        [350, .25591, .34951, -2.9641],
        [375, .264, .352, -3.5814],
        [400, .27218, .35407, -4.3633],
        [425, .28039, .35577, -5.3762],
        [450, .28863, .35714, -6.7262],
        [475, .29685, .35823, -8.5955],
        [500, .30505, .35907, -11.324],
        [525, .3132, .35968, -15.628],
        [550, .32129, .36011, -23.325],
        [575, .32931, .36038, -40.77],
        [600, .33724, .36051, -116.45]
      ],
      Cu = 1e6 / fu[fu.length - 1][0],
      bu = 150;

    function cu(uu, Eu) {
      const ju = Number.isNaN(uu) ? Cu : Math.max(uu, Cu),
        su = (0, lu.Clamp)(1e6 / ju, fu[0][0], fu[fu.length - 1][0]);
      let Uu = 0,
        Zu = fu.length - 1;
      for (; Zu - Uu > 1;) {
        const uu = Uu + Zu >> 1;
        fu[uu][0] <= su ? Uu = uu : Zu = uu
      }
      const Xu = Uu,
        [cu, Nu, Ou, Yu] = fu[Xu],
        [hu, Du, gu, Mu] = fu[Xu + 1],
        eu = (su - cu) / (hu - cu),
        Gu = qu.p.Lerp(new qu.p(Nu, Ou), new qu.p(Du, gu), eu),
        pu = qu.p.Normalize(new qu.p(1, Yu)),
        wu = qu.p.Normalize(new qu.p(1, Mu)),
        Ju = qu.p.Normalize(qu.p.Lerp(pu, wu, eu)),
        du = (0, lu.Clamp)(Eu, -150, bu);
      Gu.Qsu(Ju.scale(du / 3e3));
      const au = 2 * Gu.x - 8 * Gu.y + 4,
        Pu = 3 * Gu.x / au,
        ou = 2 * Gu.y / au;
      return new qu.t(Pu / ou, 1, (1 - Pu - ou) / ou)
    }
    const Nu = qu.e.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      Ou = qu.e.Invert(Nu);

    function Yu(uu, Eu) {
      const ju = Eu > 0 ? uu / Eu : 10;
      return (0, lu.Clamp)(ju, .1, 10)
    }

    function hu(uu, Eu) {
      const ju = qu.t.TransformNormal(uu, Nu),
        su = qu.t.TransformNormal(Eu, Nu),
        Uu = qu.e.FromArray([Yu(su.x, ju.x), 0, 0, 0, 0, Yu(su.y, ju.y), 0, 0, 0, 0, Yu(su.z, ju.z), 0, 0, 0, 0, 1]);
      return Nu.multiply(Uu).multiply(Ou)
    }
    const Du = new qu.t(.95047, 1, 1.08883),
      gu = qu.e.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(hu(Du, cu(6500, 0))),
      Mu = qu.e.Invert(gu),
      eu = qu.t.TransformNormal(new qu.t(1, 1, 1), gu);
    var Gu = ju(40272),
      pu = ju(40377);
    let wu = (() => {
      var uu;
      let Eu, ju, Zu, lu, qu, fu, Cu, bu, cu, Nu, Ou, Yu, hu = [],
        Du = [],
        gu = [],
        Mu = [],
        eu = [],
        wu = [],
        Ju = [],
        du = [],
        au = [],
        Pu = [],
        ou = [],
        ku = [],
        mu = [],
        vu = [],
        Ku = [],
        Vu = [],
        ru = [],
        Qu = [],
        iu = [],
        Wu = [],
        Su = [],
        Iu = [],
        Fu = [],
        Bu = [];
      return uu = class {
        constructor() {
          this._dirty = !0, this._tempColor = new Xu.g(0, 0, 0, 0), this._globalCurve = new Xu.g(0, 0, 0, 0), this._highlightsCurve = new Xu.g(0, 0, 0, 0), this._midtonesCurve = new Xu.g(0, 0, 0, 0), this._shadowsCurve = new Xu.g(0, 0, 0, 0), this._positiveCurve = new Xu.g(0, 0, 0, 0), this._negativeCurve = new Xu.g(0, 0, 0, 0), this._globalHue = (0, su.g)(this, hu, 30), this._globalDensity = ((0, su.g)(this, Du), (0, su.g)(this, gu, 0)), this._globalSaturation = ((0, su.g)(this, Mu), (0, su.g)(this, eu, 0)), this._globalExposure = ((0, su.g)(this, wu), (0, su.g)(this, Ju, 0)), this._highlightsHue = ((0, su.g)(this, du), (0, su.g)(this, au, 30)), this._highlightsDensity = ((0, su.g)(this, Pu), (0, su.g)(this, ou, 0)), this._highlightsSaturation = ((0, su.g)(this, ku), (0, su.g)(this, mu, 0)), this._highlightsExposure = ((0, su.g)(this, vu), (0, su.g)(this, Ku, 0)), this._midtonesHue = ((0, su.g)(this, Vu), (0, su.g)(this, ru, 30)), this._midtonesDensity = ((0, su.g)(this, Qu), (0, su.g)(this, iu, 0)), this._midtonesSaturation = ((0, su.g)(this, Wu), (0, su.g)(this, Su, 0)), this._midtonesExposure = ((0, su.g)(this, Iu), (0, su.g)(this, Fu, 0)), this._shadowsHue = ((0, su.g)(this, Bu), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
        }
        get globalHue() {
          return this._globalHue
        }
        set globalHue(uu) {
          this._globalHue = uu, this._dirty = !0
        }
        get globalDensity() {
          return this._globalDensity
        }
        set globalDensity(uu) {
          this._globalDensity = uu, this._dirty = !0
        }
        get globalSaturation() {
          return this._globalSaturation
        }
        set globalSaturation(uu) {
          this._globalSaturation = uu, this._dirty = !0
        }
        get globalExposure() {
          return this._globalExposure
        }
        set globalExposure(uu) {
          this._globalExposure = uu, this._dirty = !0
        }
        get highlightsHue() {
          return this._highlightsHue
        }
        set highlightsHue(uu) {
          this._highlightsHue = uu, this._dirty = !0
        }
        get highlightsDensity() {
          return this._highlightsDensity
        }
        set highlightsDensity(uu) {
          this._highlightsDensity = uu, this._dirty = !0
        }
        get highlightsSaturation() {
          return this._highlightsSaturation
        }
        set highlightsSaturation(uu) {
          this._highlightsSaturation = uu, this._dirty = !0
        }
        get highlightsExposure() {
          return this._highlightsExposure
        }
        set highlightsExposure(uu) {
          this._highlightsExposure = uu, this._dirty = !0
        }
        get midtonesHue() {
          return this._midtonesHue
        }
        set midtonesHue(uu) {
          this._midtonesHue = uu, this._dirty = !0
        }
        get midtonesDensity() {
          return this._midtonesDensity
        }
        set midtonesDensity(uu) {
          this._midtonesDensity = uu, this._dirty = !0
        }
        get midtonesSaturation() {
          return this._midtonesSaturation
        }
        set midtonesSaturation(uu) {
          this._midtonesSaturation = uu, this._dirty = !0
        }
        get midtonesExposure() {
          return this._midtonesExposure
        }
        set midtonesExposure(uu) {
          this._midtonesExposure = uu, this._dirty = !0
        }
        get shadowsHue() {
          return this._shadowsHue
        }
        set shadowsHue(uu) {
          this._shadowsHue = uu, this._dirty = !0
        }
        get shadowsDensity() {
          return this._shadowsDensity
        }
        set shadowsDensity(uu) {
          this._shadowsDensity = uu, this._dirty = !0
        }
        get shadowsSaturation() {
          return this._shadowsSaturation
        }
        set shadowsSaturation(uu) {
          this._shadowsSaturation = uu, this._dirty = !0
        }
        get shadowsExposure() {
          return this._shadowsExposure
        }
        set shadowsExposure(uu) {
          this._shadowsExposure = uu, this._dirty = !0
        }
        getClassName() {
          return "ColorCurves"
        }
        _getColorGradingDataToRef(Eu, ju, su, Uu, Zu) {
          null != Eu && (Eu = uu._Clamp(Eu, 0, 360), ju = uu._Clamp(ju, -100, 100), su = uu._Clamp(su, -100, 100), Uu = uu._Clamp(Uu, -100, 100), ju = uu._ApplyColorGradingSliderNonlinear(ju), ju *= .5, Uu = uu._ApplyColorGradingSliderNonlinear(Uu), ju < 0 && (ju *= -1, Eu = (Eu + 180) % 360), uu._FromHSBToRef(Eu, ju, 50 + .25 * Uu, Zu), Zu.scaleToRef(2, Zu), Zu.a = 1 + .01 * su)
        }
        static _ApplyColorGradingSliderNonlinear(uu) {
          uu /= 100;
          let Eu = Math.abs(uu);
          return Eu = Math.pow(Eu, 2), uu < 0 && (Eu *= -1), Eu *= 100, Eu
        }
        static _FromHSBToRef(Eu, ju, su, Uu) {
          let Zu = uu._Clamp(Eu, 0, 360);
          const Xu = uu._Clamp(ju / 100, 0, 1),
            lu = uu._Clamp(su / 100, 0, 1);
          if (0 === Xu) Uu.r = lu, Uu.g = lu, Uu.b = lu;
          else {
            Zu /= 60;
            const uu = Math.floor(Zu),
              Eu = Zu - uu,
              ju = lu * (1 - Xu),
              su = lu * (1 - Xu * Eu),
              qu = lu * (1 - Xu * (1 - Eu));
            switch (uu) {
              case 0:
                Uu.r = lu, Uu.g = qu, Uu.b = ju;
                break;
              case 1:
                Uu.r = su, Uu.g = lu, Uu.b = ju;
                break;
              case 2:
                Uu.r = ju, Uu.g = lu, Uu.b = qu;
                break;
              case 3:
                Uu.r = ju, Uu.g = su, Uu.b = lu;
                break;
              case 4:
                Uu.r = qu, Uu.g = ju, Uu.b = lu;
                break;
              default:
                Uu.r = lu, Uu.g = ju, Uu.b = su
            }
          }
          Uu.a = 1
        }
        static _Clamp(uu, Eu, ju) {
          return Math.min(Math.max(uu, Eu), ju)
        }
        clone() {
          return Gu.e.Clone((() => new uu), this)
        }
        serialize() {
          return Gu.e.Serialize(this)
        }
        _bind(uu) {
          let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), uu && (uu.setFloat4(Eu, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), uu.setFloat4(ju, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), uu.setFloat4(su, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const Xu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Eu = [(0, Uu.E)()], ju = [(0, Uu.E)()], Zu = [(0, Uu.E)()], lu = [(0, Uu.E)()], qu = [(0, Uu.E)()], fu = [(0, Uu.E)()], Cu = [(0, Uu.E)()], bu = [(0, Uu.E)()], cu = [(0, Uu.E)()], Nu = [(0, Uu.E)()], Ou = [(0, Uu.E)()], Yu = [(0, Uu.E)()], (0, su.e)(null, null, Eu, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: uu => "_globalHue" in uu,
            get: uu => uu._globalHue,
            set: (uu, Eu) => {
              uu._globalHue = Eu
            }
          },
          metadata: Xu
        }, hu, Du), (0, su.e)(null, null, ju, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: uu => "_globalDensity" in uu,
            get: uu => uu._globalDensity,
            set: (uu, Eu) => {
              uu._globalDensity = Eu
            }
          },
          metadata: Xu
        }, gu, Mu), (0, su.e)(null, null, Zu, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: uu => "_globalSaturation" in uu,
            get: uu => uu._globalSaturation,
            set: (uu, Eu) => {
              uu._globalSaturation = Eu
            }
          },
          metadata: Xu
        }, eu, wu), (0, su.e)(null, null, lu, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: uu => "_globalExposure" in uu,
            get: uu => uu._globalExposure,
            set: (uu, Eu) => {
              uu._globalExposure = Eu
            }
          },
          metadata: Xu
        }, Ju, du), (0, su.e)(null, null, qu, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: uu => "_highlightsHue" in uu,
            get: uu => uu._highlightsHue,
            set: (uu, Eu) => {
              uu._highlightsHue = Eu
            }
          },
          metadata: Xu
        }, au, Pu), (0, su.e)(null, null, fu, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: uu => "_highlightsDensity" in uu,
            get: uu => uu._highlightsDensity,
            set: (uu, Eu) => {
              uu._highlightsDensity = Eu
            }
          },
          metadata: Xu
        }, ou, ku), (0, su.e)(null, null, Cu, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: uu => "_highlightsSaturation" in uu,
            get: uu => uu._highlightsSaturation,
            set: (uu, Eu) => {
              uu._highlightsSaturation = Eu
            }
          },
          metadata: Xu
        }, mu, vu), (0, su.e)(null, null, bu, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: uu => "_highlightsExposure" in uu,
            get: uu => uu._highlightsExposure,
            set: (uu, Eu) => {
              uu._highlightsExposure = Eu
            }
          },
          metadata: Xu
        }, Ku, Vu), (0, su.e)(null, null, cu, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: uu => "_midtonesHue" in uu,
            get: uu => uu._midtonesHue,
            set: (uu, Eu) => {
              uu._midtonesHue = Eu
            }
          },
          metadata: Xu
        }, ru, Qu), (0, su.e)(null, null, Nu, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: uu => "_midtonesDensity" in uu,
            get: uu => uu._midtonesDensity,
            set: (uu, Eu) => {
              uu._midtonesDensity = Eu
            }
          },
          metadata: Xu
        }, iu, Wu), (0, su.e)(null, null, Ou, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: uu => "_midtonesSaturation" in uu,
            get: uu => uu._midtonesSaturation,
            set: (uu, Eu) => {
              uu._midtonesSaturation = Eu
            }
          },
          metadata: Xu
        }, Su, Iu), (0, su.e)(null, null, Yu, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: uu => "_midtonesExposure" in uu,
            get: uu => uu._midtonesExposure,
            set: (uu, Eu) => {
              uu._midtonesExposure = Eu
            }
          },
          metadata: Xu
        }, Fu, Bu), Xu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Xu
        })
      })(), uu.PrepareUniforms = pu.c, uu
    })();

    function Ju(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      uu._bind(Eu, ju, su, Uu)
    }
    var du = ju(40192),
      au = ju(40381),
      Pu = ju(37532);
    let ou = (() => {
        var uu;
        let Eu, ju, fu, Nu, Ou, Yu, Du, pu, Pu, ou, ku, mu, vu, Ku, Vu, ru, Qu, iu, Wu, Su, Iu, Fu, Bu, Lu, tu, xu, Tu, Hu, Au = [],
          nu = [],
          yu = [],
          zu = [],
          Ru = [],
          uE = [],
          EE = [],
          jE = [],
          sE = [],
          UE = [],
          ZE = [],
          XE = [],
          lE = [],
          qE = [],
          fE = [],
          CE = [],
          bE = [],
          cE = [],
          NE = [],
          OE = [],
          YE = [],
          hE = [],
          DE = [],
          gE = [],
          ME = [],
          eE = [],
          GE = [],
          pE = [],
          wE = [],
          JE = [],
          dE = [],
          aE = [],
          PE = [],
          oE = [],
          kE = [],
          mE = [],
          vE = [],
          KE = [],
          VE = [],
          rE = [],
          QE = [],
          iE = [],
          WE = [],
          SE = [],
          IE = [],
          FE = [],
          BE = [],
          LE = [],
          tE = [],
          xE = [],
          TE = [],
          HE = [],
          AE = [],
          nE = [],
          yE = [],
          zE = [];
        return uu = class {
          constructor() {
            this.colorCurves = (0, su.g)(this, Au, new wu), this._colorCurvesEnabled = ((0, su.g)(this, nu), (0, su.g)(this, yu, !1)), this._colorGradingTexture = ((0, su.g)(this, zu), (0, su.g)(this, Ru, void 0)), this._colorGradingEnabled = ((0, su.g)(this, uE), (0, su.g)(this, EE, !1)), this._colorGradingWithGreenDepth = ((0, su.g)(this, jE), (0, su.g)(this, sE, !0)), this._colorGradingBGR = ((0, su.g)(this, UE), (0, su.g)(this, ZE, !0)), this._exposure = ((0, su.g)(this, XE), (0, su.g)(this, lE, 1)), this._toneMappingEnabled = ((0, su.g)(this, qE), (0, su.g)(this, fE, !1)), this._toneMappingType = ((0, su.g)(this, CE), (0, su.g)(this, bE, uu.TONEMAPPING_STANDARD)), this._contrast = ((0, su.g)(this, cE), (0, su.g)(this, NE, 1)), this._whiteBalanceEnabled = ((0, su.g)(this, OE), (0, su.g)(this, YE, !1)), this._temperature = ((0, su.g)(this, hE), (0, su.g)(this, DE, 6500)), this._tint = ((0, su.g)(this, gE), (0, su.g)(this, ME, 0)), this._whiteBalanceMatrix = ((0, su.g)(this, eE), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, su.g)(this, GE, 0), this.vignetteCenterX = ((0, su.g)(this, pE), (0, su.g)(this, wE, 0)), this.vignetteCenterY = ((0, su.g)(this, JE), (0, su.g)(this, dE, 0)), this.vignetteWeight = ((0, su.g)(this, aE), (0, su.g)(this, PE, 1.5)), this.vignetteColor = ((0, su.g)(this, oE), (0, su.g)(this, kE, new Xu.g(0, 0, 0, 0))), this.vignetteCameraFov = ((0, su.g)(this, mE), (0, su.g)(this, vE, .5)), this._vignetteBlendMode = ((0, su.g)(this, KE), (0, su.g)(this, VE, uu.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, su.g)(this, rE), (0, su.g)(this, QE, !1)), this._ditheringEnabled = ((0, su.g)(this, iE), (0, su.g)(this, WE, !1)), this._ditheringIntensity = ((0, su.g)(this, SE), (0, su.g)(this, IE, 1 / 255)), this._skipFinalColorClamp = ((0, su.g)(this, FE), (0, su.g)(this, BE, !1)), this._applyByPostProcess = ((0, su.g)(this, LE), (0, su.g)(this, tE, !1)), this._isEnabled = ((0, su.g)(this, xE), (0, su.g)(this, TE, !0)), this.outputTextureWidth = ((0, su.g)(this, HE), (0, su.g)(this, AE, 0)), this.outputTextureHeight = ((0, su.g)(this, nE), (0, su.g)(this, yE, 0)), this.onUpdateParameters = ((0, su.g)(this, zE), new Zu.d)
          }
          get colorCurvesEnabled() {
            return this._colorCurvesEnabled
          }
          set colorCurvesEnabled(uu) {
            this._colorCurvesEnabled !== uu && (this._colorCurvesEnabled = uu, this._updateParameters())
          }
          get colorGradingTexture() {
            return this._colorGradingTexture
          }
          set colorGradingTexture(uu) {
            this._colorGradingTexture !== uu && (this._colorGradingTexture = uu, this._updateParameters())
          }
          get colorGradingEnabled() {
            return this._colorGradingEnabled
          }
          set colorGradingEnabled(uu) {
            this._colorGradingEnabled !== uu && (this._colorGradingEnabled = uu, this._updateParameters())
          }
          get colorGradingWithGreenDepth() {
            return this._colorGradingWithGreenDepth
          }
          set colorGradingWithGreenDepth(uu) {
            this._colorGradingWithGreenDepth !== uu && (this._colorGradingWithGreenDepth = uu, this._updateParameters())
          }
          get colorGradingBGR() {
            return this._colorGradingBGR
          }
          set colorGradingBGR(uu) {
            this._colorGradingBGR !== uu && (this._colorGradingBGR = uu, this._updateParameters())
          }
          get exposure() {
            return this._exposure
          }
          set exposure(uu) {
            this._exposure !== uu && (this._exposure = uu, this._updateParameters())
          }
          get toneMappingEnabled() {
            return this._toneMappingEnabled
          }
          set toneMappingEnabled(uu) {
            this._toneMappingEnabled !== uu && (this._toneMappingEnabled = uu, this._updateParameters())
          }
          get toneMappingType() {
            return this._toneMappingType
          }
          set toneMappingType(uu) {
            this._toneMappingType !== uu && (this._toneMappingType = uu, this._updateParameters())
          }
          get contrast() {
            return this._contrast
          }
          set contrast(uu) {
            this._contrast !== uu && (this._contrast = uu, this._updateParameters())
          }
          get whiteBalanceEnabled() {
            return this._whiteBalanceEnabled
          }
          set whiteBalanceEnabled(uu) {
            this._whiteBalanceEnabled !== uu && (this._whiteBalanceEnabled = uu, this._updateParameters())
          }
          get temperature() {
            return this._temperature
          }
          set temperature(uu) {
            uu = Number.isNaN(uu) ? Cu : Math.max(uu, Cu), this._temperature !== uu && (this._temperature = uu, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(uu) {
            uu = (0, lu.Clamp)(uu, -150, bu), this._tint !== uu && (this._tint = uu, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(uu, Eu) {
              const ju = hu(cu(uu, Eu), eu),
                su = gu.multiply(ju).multiply(Mu);
              return qu.e.GetAsMatrix3x3(su)
            }(this._temperature, this._tint)), this._whiteBalanceMatrix
          }
          get vignetteCentreY() {
            return this.vignetteCenterY
          }
          set vignetteCentreY(uu) {
            this.vignetteCenterY = uu
          }
          get vignetteCentreX() {
            return this.vignetteCenterX
          }
          set vignetteCentreX(uu) {
            this.vignetteCenterX = uu
          }
          get vignetteBlendMode() {
            return this._vignetteBlendMode
          }
          set vignetteBlendMode(uu) {
            this._vignetteBlendMode !== uu && (this._vignetteBlendMode = uu, this._updateParameters())
          }
          get vignetteEnabled() {
            return this._vignetteEnabled
          }
          set vignetteEnabled(uu) {
            this._vignetteEnabled !== uu && (this._vignetteEnabled = uu, this._updateParameters())
          }
          get ditheringEnabled() {
            return this._ditheringEnabled
          }
          set ditheringEnabled(uu) {
            this._ditheringEnabled !== uu && (this._ditheringEnabled = uu, this._updateParameters())
          }
          get ditheringIntensity() {
            return this._ditheringIntensity
          }
          set ditheringIntensity(uu) {
            this._ditheringIntensity !== uu && (this._ditheringIntensity = uu, this._updateParameters())
          }
          get skipFinalColorClamp() {
            return this._skipFinalColorClamp
          }
          set skipFinalColorClamp(uu) {
            this._skipFinalColorClamp !== uu && (this._skipFinalColorClamp = uu, this._updateParameters())
          }
          get applyByPostProcess() {
            return this._applyByPostProcess
          }
          set applyByPostProcess(uu) {
            this._applyByPostProcess !== uu && (this._applyByPostProcess = uu, this._updateParameters())
          }
          get isEnabled() {
            return this._isEnabled
          }
          set isEnabled(uu) {
            this._isEnabled !== uu && (this._isEnabled = uu, this._updateParameters())
          }
          _updateParameters() {
            this.onUpdateParameters.notifyObservers(this)
          }
          getClassName() {
            return "ImageProcessingConfiguration"
          }
          prepareDefines(Eu) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return Eu.WHITEBALANCE = !1, Eu.VIGNETTE = !1, Eu.TONEMAPPING = 0, Eu.CONTRAST = !1, Eu.EXPOSURE = !1, Eu.COLORCURVES = !1, Eu.COLORGRADING = !1, Eu.COLORGRADING3D = !1, Eu.DITHER = !1, Eu.IMAGEPROCESSING = !1, Eu.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(Eu.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (Eu.WHITEBALANCE = this._whiteBalanceEnabled, Eu.VIGNETTE = this.vignetteEnabled, Eu.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === uu._VIGNETTEMODE_MULTIPLY, Eu.VIGNETTEBLENDMODEOPAQUE = !Eu.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case uu.TONEMAPPING_KHR_PBR_NEUTRAL:
                Eu.TONEMAPPING = 3;
                break;
              case uu.TONEMAPPING_ACES:
                Eu.TONEMAPPING = 2;
                break;
              default:
                Eu.TONEMAPPING = 1
            } else Eu.TONEMAPPING = 0;
            Eu.CONTRAST = 1 !== this.contrast, Eu.EXPOSURE = 1 !== this.exposure, Eu.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, Eu.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, Eu.COLORGRADING ? Eu.COLORGRADING3D = this.colorGradingTexture.is3D : Eu.COLORGRADING3D = !1, Eu.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, Eu.SAMPLER3DBGRMAP = this.colorGradingBGR, Eu.DITHER = this._ditheringEnabled, Eu.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, Eu.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, Eu.IMAGEPROCESSING = Eu.WHITEBALANCE || Eu.VIGNETTE || !!Eu.TONEMAPPING || Eu.CONTRAST || Eu.EXPOSURE || Eu.COLORCURVES || Eu.COLORGRADING || Eu.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(uu, Eu) {
            if (this._whiteBalanceEnabled && uu.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && Ju(this.colorCurves, uu), this._vignetteEnabled || this._ditheringEnabled) {
              const ju = 1 / (this.outputTextureWidth || uu.wO().getRenderWidth()),
                su = 1 / (this.outputTextureHeight || uu.wO().getRenderHeight());
              if (uu.setFloat2("vInverseScreenSize", ju, su), this._ditheringEnabled && uu.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const Uu = null != Eu ? Eu : su / ju;
                let Zu = Math.tan(.5 * this.vignetteCameraFov),
                  Xu = Zu * Uu;
                const lu = Math.sqrt(Xu * Zu);
                Xu = (0, du.n)(Xu, lu, this.vignetteStretch), Zu = (0, du.n)(Zu, lu, this.vignetteStretch), uu.setFloat4("vignetteSettings1", Xu, Zu, -Xu * this.vignetteCenterX, -Zu * this.vignetteCenterY);
                const qu = -2 * this.vignetteWeight;
                uu.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, qu)
              }
            }
            if (uu.setFloat("exposureLinear", this.exposure), uu.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              uu.setTexture("txColorTransform", this.colorGradingTexture);
              const Eu = this.colorGradingTexture.getSize().height;
              uu.setFloat4("colorTransformSettings", (Eu - 1) / Eu, .5 / Eu, Eu, this.colorGradingTexture.level)
            }
          }
          clone() {
            return Gu.e.Clone((() => new uu), this)
          }
          serialize() {
            return Gu.e.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const Zu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Eu = [(0, Uu.i)()], ju = [(0, Uu.E)()], fu = [(0, Uu.y)("colorGradingTexture")], Nu = [(0, Uu.E)()], Ou = [(0, Uu.E)()], Yu = [(0, Uu.E)()], Du = [(0, Uu.E)()], pu = [(0, Uu.E)()], Pu = [(0, Uu.E)()], ou = [(0, Uu.E)()], ku = [(0, Uu.E)()], mu = [(0, Uu.E)()], vu = [(0, Uu.E)()], Ku = [(0, Uu.E)()], Vu = [(0, Uu.E)()], ru = [(0, Uu.E)()], Qu = [(0, Uu.E)()], iu = [(0, Uu.m)()], Wu = [(0, Uu.E)()], Su = [(0, Uu.E)()], Iu = [(0, Uu.E)()], Fu = [(0, Uu.E)()], Bu = [(0, Uu.E)()], Lu = [(0, Uu.E)()], tu = [(0, Uu.E)()], xu = [(0, Uu.E)()], Tu = [(0, Uu.E)()], Hu = [(0, Uu.E)()], (0, su.e)(null, null, Eu, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: uu => "colorCurves" in uu,
              get: uu => uu.colorCurves,
              set: (uu, Eu) => {
                uu.colorCurves = Eu
              }
            },
            metadata: Zu
          }, Au, nu), (0, su.e)(null, null, ju, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: uu => "_colorCurvesEnabled" in uu,
              get: uu => uu._colorCurvesEnabled,
              set: (uu, Eu) => {
                uu._colorCurvesEnabled = Eu
              }
            },
            metadata: Zu
          }, yu, zu), (0, su.e)(null, null, fu, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "_colorGradingTexture" in uu,
              get: uu => uu._colorGradingTexture,
              set: (uu, Eu) => {
                uu._colorGradingTexture = Eu
              }
            },
            metadata: Zu
          }, Ru, uE), (0, su.e)(null, null, Nu, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: uu => "_colorGradingEnabled" in uu,
              get: uu => uu._colorGradingEnabled,
              set: (uu, Eu) => {
                uu._colorGradingEnabled = Eu
              }
            },
            metadata: Zu
          }, EE, jE), (0, su.e)(null, null, Ou, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: uu => "_colorGradingWithGreenDepth" in uu,
              get: uu => uu._colorGradingWithGreenDepth,
              set: (uu, Eu) => {
                uu._colorGradingWithGreenDepth = Eu
              }
            },
            metadata: Zu
          }, sE, UE), (0, su.e)(null, null, Yu, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: uu => "_colorGradingBGR" in uu,
              get: uu => uu._colorGradingBGR,
              set: (uu, Eu) => {
                uu._colorGradingBGR = Eu
              }
            },
            metadata: Zu
          }, ZE, XE), (0, su.e)(null, null, Du, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: uu => "_exposure" in uu,
              get: uu => uu._exposure,
              set: (uu, Eu) => {
                uu._exposure = Eu
              }
            },
            metadata: Zu
          }, lE, qE), (0, su.e)(null, null, pu, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: uu => "_toneMappingEnabled" in uu,
              get: uu => uu._toneMappingEnabled,
              set: (uu, Eu) => {
                uu._toneMappingEnabled = Eu
              }
            },
            metadata: Zu
          }, fE, CE), (0, su.e)(null, null, Pu, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: uu => "_toneMappingType" in uu,
              get: uu => uu._toneMappingType,
              set: (uu, Eu) => {
                uu._toneMappingType = Eu
              }
            },
            metadata: Zu
          }, bE, cE), (0, su.e)(null, null, ou, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: uu => "_contrast" in uu,
              get: uu => uu._contrast,
              set: (uu, Eu) => {
                uu._contrast = Eu
              }
            },
            metadata: Zu
          }, NE, OE), (0, su.e)(null, null, ku, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: uu => "_whiteBalanceEnabled" in uu,
              get: uu => uu._whiteBalanceEnabled,
              set: (uu, Eu) => {
                uu._whiteBalanceEnabled = Eu
              }
            },
            metadata: Zu
          }, YE, hE), (0, su.e)(null, null, mu, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: uu => "_temperature" in uu,
              get: uu => uu._temperature,
              set: (uu, Eu) => {
                uu._temperature = Eu
              }
            },
            metadata: Zu
          }, DE, gE), (0, su.e)(null, null, vu, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: uu => "_tint" in uu,
              get: uu => uu._tint,
              set: (uu, Eu) => {
                uu._tint = Eu
              }
            },
            metadata: Zu
          }, ME, eE), (0, su.e)(null, null, Ku, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: uu => "vignetteStretch" in uu,
              get: uu => uu.vignetteStretch,
              set: (uu, Eu) => {
                uu.vignetteStretch = Eu
              }
            },
            metadata: Zu
          }, GE, pE), (0, su.e)(null, null, Vu, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: uu => "vignetteCenterX" in uu,
              get: uu => uu.vignetteCenterX,
              set: (uu, Eu) => {
                uu.vignetteCenterX = Eu
              }
            },
            metadata: Zu
          }, wE, JE), (0, su.e)(null, null, ru, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: uu => "vignetteCenterY" in uu,
              get: uu => uu.vignetteCenterY,
              set: (uu, Eu) => {
                uu.vignetteCenterY = Eu
              }
            },
            metadata: Zu
          }, dE, aE), (0, su.e)(null, null, Qu, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: uu => "vignetteWeight" in uu,
              get: uu => uu.vignetteWeight,
              set: (uu, Eu) => {
                uu.vignetteWeight = Eu
              }
            },
            metadata: Zu
          }, PE, oE), (0, su.e)(null, null, iu, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: uu => "vignetteColor" in uu,
              get: uu => uu.vignetteColor,
              set: (uu, Eu) => {
                uu.vignetteColor = Eu
              }
            },
            metadata: Zu
          }, kE, mE), (0, su.e)(null, null, Wu, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: uu => "vignetteCameraFov" in uu,
              get: uu => uu.vignetteCameraFov,
              set: (uu, Eu) => {
                uu.vignetteCameraFov = Eu
              }
            },
            metadata: Zu
          }, vE, KE), (0, su.e)(null, null, Su, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: uu => "_vignetteBlendMode" in uu,
              get: uu => uu._vignetteBlendMode,
              set: (uu, Eu) => {
                uu._vignetteBlendMode = Eu
              }
            },
            metadata: Zu
          }, VE, rE), (0, su.e)(null, null, Iu, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: uu => "_vignetteEnabled" in uu,
              get: uu => uu._vignetteEnabled,
              set: (uu, Eu) => {
                uu._vignetteEnabled = Eu
              }
            },
            metadata: Zu
          }, QE, iE), (0, su.e)(null, null, Fu, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: uu => "_ditheringEnabled" in uu,
              get: uu => uu._ditheringEnabled,
              set: (uu, Eu) => {
                uu._ditheringEnabled = Eu
              }
            },
            metadata: Zu
          }, WE, SE), (0, su.e)(null, null, Bu, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: uu => "_ditheringIntensity" in uu,
              get: uu => uu._ditheringIntensity,
              set: (uu, Eu) => {
                uu._ditheringIntensity = Eu
              }
            },
            metadata: Zu
          }, IE, FE), (0, su.e)(null, null, Lu, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: uu => "_skipFinalColorClamp" in uu,
              get: uu => uu._skipFinalColorClamp,
              set: (uu, Eu) => {
                uu._skipFinalColorClamp = Eu
              }
            },
            metadata: Zu
          }, BE, LE), (0, su.e)(null, null, tu, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: uu => "_applyByPostProcess" in uu,
              get: uu => uu._applyByPostProcess,
              set: (uu, Eu) => {
                uu._applyByPostProcess = Eu
              }
            },
            metadata: Zu
          }, tE, xE), (0, su.e)(null, null, xu, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: uu => "_isEnabled" in uu,
              get: uu => uu._isEnabled,
              set: (uu, Eu) => {
                uu._isEnabled = Eu
              }
            },
            metadata: Zu
          }, TE, HE), (0, su.e)(null, null, Tu, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: uu => "outputTextureWidth" in uu,
              get: uu => uu.outputTextureWidth,
              set: (uu, Eu) => {
                uu.outputTextureWidth = Eu
              }
            },
            metadata: Zu
          }, AE, nE), (0, su.e)(null, null, Hu, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: uu => "outputTextureHeight" in uu,
              get: uu => uu.outputTextureHeight,
              set: (uu, Eu) => {
                uu.outputTextureHeight = Eu
              }
            },
            metadata: Zu
          }, yE, zE), Zu && Object.defineProperty(uu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Zu
          })
        })(), uu.TONEMAPPING_STANDARD = 0, uu.TONEMAPPING_ACES = 1, uu.TONEMAPPING_KHR_PBR_NEUTRAL = 2, uu.PrepareUniforms = au.f, uu.PrepareSamplers = au.b, uu._VIGNETTEMODE_MULTIPLY = 0, uu._VIGNETTEMODE_OPAQUE = 1, uu
      })(),
      ku = !1;

    function mu(uu) {
      const Eu = Gu.e.Parse((() => new ou), uu, null, null);
      return void 0 !== uu.vignetteCentreX && (Eu.vignetteCenterX = uu.vignetteCentreX), void 0 !== uu.vignetteCentreY && (Eu.vignetteCenterY = uu.vignetteCentreY), Eu
    }

    function vu() {
      ku || (ku = !0, ou.Parse = mu, Gu.e._ImageProcessingConfigurationParser = mu, (0, Pu.f)("BABYLON.ImageProcessingConfiguration", ou))
    }
  },
  40390: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Zu
    });
    var su = ju(39032),
      Uu = ju(40356);
    class Zu {
      constructor(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          su = arguments.length > 3 ? arguments[3] : void 0,
          Uu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Zu = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = uu, this._noUBO = !uu.supportsUniformBuffers || Uu, this._dynamic = ju, this._name = su ?? "no-name", this._data = Eu || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === Zu && this._engine._features.trackUbosInFrame || !0 === Zu) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.y_ = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.y_ = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
      }
      get useUbo() {
        return !this._noUBO
      }
      get isSync() {
        return !this._needSync
      }
      isDynamic() {
        return this._dynamic
      }
      getData() {
        return this._bufferData
      }
      getBuffer() {
        return this._buffer
      }
      getUniformNames() {
        return this._uniformNames
      }
      _fillAlignment(uu) {
        let Eu;
        if (Eu = uu <= 2 ? uu : 4, this._uniformLocationPointer % Eu !== 0) {
          const uu = this._uniformLocationPointer;
          this._uniformLocationPointer += Eu - this._uniformLocationPointer % Eu;
          const ju = this._uniformLocationPointer - uu;
          for (let Eu = 0; Eu < ju; Eu++) this._data.push(0)
        }
      }
      addUniform(uu, Eu) {
        let ju, su = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (su > 0 && "number" === typeof Eu && (this._uniformArraySizes[uu] = {
            strideSize: Eu,
            arraySize: su
          }), void 0 === this._uniformLocations[uu] && (this._uniformNames.push(uu), !this._noUBO)) {
          if (su > 0) {
            if (Eu instanceof Array) throw "addUniform should not be use with Array in UBO: " + uu;
            if (this._fillAlignment(4), 16 == Eu) Eu *= su;
            else {
              Eu = Eu * su + (4 - Eu) * su
            }
            ju = [];
            for (let uu = 0; uu < Eu; uu++) ju.push(0)
          } else {
            if (Eu instanceof Array) ju = Eu, Eu = ju.length;
            else {
              ju = [];
              for (let uu = 0; uu < Eu; uu++) ju.push(0)
            }
            this._fillAlignment(Eu)
          }
          this._uniformSizes[uu] = Eu, this._uniformLocations[uu] = this._uniformLocationPointer, this._uniformLocationPointer += Eu;
          for (let uu = 0; uu < Eu; uu++) this._data.push(ju[uu]);
          this._needSync = !0
        }
      }
      addMatrix(uu, Eu) {
        this.addUniform(uu, Array.prototype.slice.call(Eu.Osu()))
      }
      addFloat2(uu, Eu, ju) {
        const su = [Eu, ju];
        this.addUniform(uu, su)
      }
      addFloat3(uu, Eu, ju, su) {
        const Uu = [Eu, ju, su];
        this.addUniform(uu, Uu)
      }
      addColor3(uu, Eu) {
        const ju = [Eu.r, Eu.g, Eu.b];
        this.addUniform(uu, ju)
      }
      addColor4(uu, Eu, ju) {
        const su = [Eu.r, Eu.g, Eu.b, ju];
        this.addUniform(uu, su)
      }
      addVector3(uu, Eu) {
        const ju = [Eu.x, Eu.y, Eu.z];
        this.addUniform(uu, ju)
      }
      addMatrix3x3(uu) {
        this.addUniform(uu, 12)
      }
      addMatrix2x2(uu) {
        this.addUniform(uu, 8)
      }
      create() {
        this._noUBO || this._buffer || (this._fillAlignment(4), this._bufferData = new Float32Array(this._data), this._dataGeneration++, this._rebuild(), this._needSync = !0)
      }
      _getNamesDebug() {
        const uu = [];
        let Eu = 0;
        for (const ju in this._uniformLocations)
          if (uu.push(ju), 10 === ++Eu) break;
        return uu.join(",")
      }
      _rebuild() {
        !this._noUBO && this._bufferData && (this._dynamic ? this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()) : this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()), this._trackUBOsInFrame && (this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : void 0]), this._bufferIndex = this._buffers.length - 1, this._createBufferOnWrite = !1))
      }
      _rebuildAfterContextLost() {
        this._trackUBOsInFrame && (this._buffers = [], this._currentFrameId = 0, this._resetOwnerSlots()), this._rebuild()
      }
      _resetOwnerSlots() {
        if (this._ownerListsBySlot)
          for (const uu of this._ownerListsBySlot.values()) this._removeOwnerBacklink(uu);
        this._ownerListsBySlot = new Map, this._slotByOwner = new WeakMap, this._slotFrameId = [], this._ownerCount = 0, this._freeSlots = [], this._slotGeneration = []
      }
      get _numBuffers() {
        return this._buffers.length
      }
      get _indexBuffer() {
        return this._bufferIndex
      }
      get name() {
        return this._name
      }
      set name(uu) {
        this._name = uu
      }
      get currentEffect() {
        return this._currentEffect
      }
      _buffersEqual(uu, Eu) {
        for (let ju = 0; ju < uu.length; ++ju)
          if (uu[ju] !== Eu[ju]) return !1;
        return !0
      }
      _copyBuffer(uu, Eu) {
        for (let ju = 0; ju < uu.length; ++ju) Eu[ju] = uu[ju]
      }
      update() {
        if (!this._noUBO)
          if (this.bindUniformBuffer(), this._buffer)
            if (this._dynamic || this._needSync) {
              if (this._buffers && this._buffers.length > 1 && this._buffers[this._bufferIndex][1]) {
                if (this._buffersEqual(this._bufferData, this._buffers[this._bufferIndex][1])) return this._needSync = !1, void(this._createBufferOnWrite = this._trackUBOsInFrame);
                this._copyBuffer(this._bufferData, this._buffers[this._bufferIndex][1])
              }
              this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData), this._needSync = !1, this._createBufferOnWrite = this._trackUBOsInFrame
            } else this._createBufferOnWrite = this._trackUBOsInFrame;
        else this.create()
      }
      _updateOwnerKeyed(uu) {
        if (this._noUBO || !this._trackUBOsInFrame) return void this.update();
        this._buffer || this.create(), this._checkNewFrame();
        let Eu = this._slotByOwner.get(uu);
        if (void 0 === Eu && (Eu = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(uu, Eu), this._ownerCount++, uu._uniformBuffersWithOwnedSlot || (uu._uniformBuffersWithOwnedSlot = []), uu._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(Eu, uu._uniformBuffersWithOwnedSlot)), this._slotGeneration[Eu] === this._dataGeneration) return this._bufferIndex = Eu, this._buffer = this._buffers[Eu][0], this.bindUniformBuffer(), this._slotFrameId[Eu] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const ju = this._buffers[Eu][1];
        this._slotFrameId[Eu] === this._currentFrameId && ju && !this._buffersEqual(this._bufferData, ju) && (Eu = this._takeFreeSlot(!1)), this._bufferIndex = Eu, this._buffer = this._buffers[Eu][0], this.bindUniformBuffer();
        const su = this._buffers[Eu][1];
        su && this._buffersEqual(this._bufferData, su) || (su && this._copyBuffer(this._bufferData, su), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[Eu] = this._currentFrameId, this._slotGeneration[Eu] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(uu) {
        for (let ju = 0; ju < this._freeSlots.length; ++ju) {
          const Eu = this._freeSlots[ju];
          if (this._slotFrameId[Eu] !== this._currentFrameId) return uu && (this._freeSlots[ju] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), Eu
        }
        this._rebuild();
        const Eu = this._buffers.length - 1;
        return uu || this._freeSlots.push(Eu), Eu
      }
      _releaseOwnerSlot(uu) {
        const Eu = this._slotByOwner?.get(uu);
        if (void 0 === Eu) return;
        this._slotByOwner.delete(uu);
        const ju = this._ownerListsBySlot.get(Eu);
        ju && (this._removeOwnerBacklink(ju), this._ownerListsBySlot.delete(Eu)), this._ownerCount--, this._freeSlots.push(Eu)
      }
      _removeOwnerBacklink(uu) {
        const Eu = uu.indexOf(this); - 1 !== Eu && (uu[Eu] = uu[uu.length - 1], uu.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(uu, Eu, ju) {
        this._checkNewFrame();
        let Uu = this._uniformLocations[uu];
        if (void 0 === Uu) {
          if (this._buffer) return void su.b.Error("Cannot add an uniform after UBO has been created. uniformName=" + uu);
          this.addUniform(uu, ju), Uu = this._uniformLocations[uu]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let uu = 0; uu < ju; uu++) this._bufferData[Uu + uu] = Eu[uu];
          this._dataGeneration++
        } else {
          let uu = !1;
          for (let su = 0; su < ju; su++)(16 === ju && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[Uu + su] !== Math.fround(Eu[su])) && (uu = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[Uu + su] = Eu[su]);
          this._needSync = this._needSync || uu, uu && this._dataGeneration++
        }
      }
      updateUniformArray(uu, Eu, ju) {
        this._checkNewFrame();
        const Zu = this._uniformLocations[uu];
        if (void 0 === Zu) return void su.b.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const Xu = this._uniformArraySizes[uu];
        if (this._dynamic) {
          for (let uu = 0; uu < ju; uu++) this._bufferData[Zu + uu] = Eu[uu];
          this._dataGeneration++
        } else {
          let uu = !1,
            su = 0,
            lu = 0;
          for (let qu = 0; qu < ju; qu++)
            if (this._bufferData[Zu + 4 * lu + su] !== Uu.h.FloatRound(Eu[qu]) && (uu = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[Zu + 4 * lu + su] = Eu[qu]), su++, su === Xu.strideSize) {
              for (; su < 4; su++) this._bufferData[Zu + 4 * lu + su] = 0;
              su = 0, lu++
            } this._needSync = this._needSync || uu, uu && this._dataGeneration++
        }
      }
      _cacheMatrix(uu, Eu) {
        this._checkNewFrame();
        const ju = this._valueCache[uu],
          su = Eu.updateFlag;
        return (void 0 === ju || ju !== su) && (this._valueCache[uu] = su, !0)
      }
      _updateMatrix3x3ForUniform(uu, Eu) {
        for (let ju = 0; ju < 3; ju++) Zu._TempBuffer[4 * ju] = Eu[3 * ju], Zu._TempBuffer[4 * ju + 1] = Eu[3 * ju + 1], Zu._TempBuffer[4 * ju + 2] = Eu[3 * ju + 2], Zu._TempBuffer[4 * ju + 3] = 0;
        this.updateUniform(uu, Zu._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(uu, Eu) {
        this._currentEffect.setMatrix3x3(uu, Eu)
      }
      _updateMatrix2x2ForEffect(uu, Eu) {
        this._currentEffect.setMatrix2x2(uu, Eu)
      }
      _updateMatrix2x2ForUniform(uu, Eu) {
        for (let ju = 0; ju < 2; ju++) Zu._TempBuffer[4 * ju] = Eu[2 * ju], Zu._TempBuffer[4 * ju + 1] = Eu[2 * ju + 1], Zu._TempBuffer[4 * ju + 2] = 0, Zu._TempBuffer[4 * ju + 3] = 0;
        this.updateUniform(uu, Zu._TempBuffer, 8)
      }
      _updateFloatForEffect(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(uu + ju, Eu)
      }
      _updateFloatForUniform(uu, Eu) {
        Zu._TempBuffer[0] = Eu, this.updateUniform(uu, Zu._TempBuffer, 1)
      }
      _updateFloat2ForEffect(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(uu + su, Eu, ju)
      }
      _updateFloat2ForUniform(uu, Eu, ju) {
        Zu._TempBuffer[0] = Eu, Zu._TempBuffer[1] = ju, this.updateUniform(uu, Zu._TempBuffer, 2)
      }
      _updateFloat3ForEffect(uu, Eu, ju, su) {
        let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(uu + Uu, Eu, ju, su)
      }
      _updateFloat3ForUniform(uu, Eu, ju, su) {
        Zu._TempBuffer[0] = Eu, Zu._TempBuffer[1] = ju, Zu._TempBuffer[2] = su, this.updateUniform(uu, Zu._TempBuffer, 3)
      }
      _updateFloat4ForEffect(uu, Eu, ju, su, Uu) {
        let Zu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(uu + Zu, Eu, ju, su, Uu)
      }
      _updateFloat4ForUniform(uu, Eu, ju, su, Uu) {
        Zu._TempBuffer[0] = Eu, Zu._TempBuffer[1] = ju, Zu._TempBuffer[2] = su, Zu._TempBuffer[3] = Uu, this.updateUniform(uu, Zu._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[uu]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(uu + ju, Eu);
            break;
          case 3:
            this._currentEffect.setFloatArray3(uu + ju, Eu);
            break;
          case 4:
            this._currentEffect.setFloatArray4(uu + ju, Eu);
            break;
          default:
            this._currentEffect.setFloatArray(uu + ju, Eu)
        }
      }
      _updateFloatArrayForUniform(uu, Eu) {
        this.updateUniformArray(uu, Eu, Eu.length)
      }
      _updateArrayForEffect(uu, Eu) {
        this._currentEffect.setArray(uu, Eu)
      }
      _updateArrayForUniform(uu, Eu) {
        this.updateUniformArray(uu, Eu, Eu.length)
      }
      _updateIntArrayForEffect(uu, Eu) {
        this._currentEffect.setIntArray(uu, Eu)
      }
      _updateIntArrayForUniform(uu, Eu) {
        Zu._TempBufferInt32View.set(Eu), this.updateUniformArray(uu, Zu._TempBuffer, Eu.length)
      }
      _updateUIntArrayForEffect(uu, Eu) {
        this._currentEffect.setUIntArray(uu, Eu)
      }
      _updateUIntArrayForUniform(uu, Eu) {
        Zu._TempBufferUInt32View.set(Eu), this.updateUniformArray(uu, Zu._TempBuffer, Eu.length)
      }
      _updateMatrixForEffect(uu, Eu) {
        this._currentEffect.setMatrix(uu, Eu)
      }
      _updateMatrixForUniform(uu, Eu) {
        this._cacheMatrix(uu, Eu) && this.updateUniform(uu, Eu.Osu(), 16)
      }
      _updateMatricesForEffect(uu, Eu) {
        this._currentEffect.setMatrices(uu, Eu)
      }
      _updateMatricesForUniform(uu, Eu) {
        this.updateUniform(uu, Eu, Eu.length)
      }
      _updateVector3ForEffect(uu, Eu) {
        this._currentEffect.setVector3(uu, Eu)
      }
      _updateVector3ForUniform(uu, Eu) {
        Zu._TempBuffer[0] = Eu.x, Zu._TempBuffer[1] = Eu.y, Zu._TempBuffer[2] = Eu.z, this.updateUniform(uu, Zu._TempBuffer, 3)
      }
      _updateVector4ForEffect(uu, Eu) {
        this._currentEffect.setVector4(uu, Eu)
      }
      _updateVector4ForUniform(uu, Eu) {
        Zu._TempBuffer[0] = Eu.x, Zu._TempBuffer[1] = Eu.y, Zu._TempBuffer[2] = Eu.z, Zu._TempBuffer[3] = Eu.w, this.updateUniform(uu, Zu._TempBuffer, 4)
      }
      _updateColor3ForEffect(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(uu + ju, Eu)
      }
      _updateColor3ForUniform(uu, Eu) {
        Zu._TempBuffer[0] = Eu.r, Zu._TempBuffer[1] = Eu.g, Zu._TempBuffer[2] = Eu.b, this.updateUniform(uu, Zu._TempBuffer, 3)
      }
      _updateColor4ForEffect(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(uu + su, Eu, ju)
      }
      _updateDirectColor4ForEffect(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(uu + ju, Eu)
      }
      _updateColor4ForUniform(uu, Eu, ju) {
        Zu._TempBuffer[0] = Eu.r, Zu._TempBuffer[1] = Eu.g, Zu._TempBuffer[2] = Eu.b, Zu._TempBuffer[3] = ju, this.updateUniform(uu, Zu._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(uu, Eu) {
        Zu._TempBuffer[0] = Eu.r, Zu._TempBuffer[1] = Eu.g, Zu._TempBuffer[2] = Eu.b, Zu._TempBuffer[3] = Eu.a, this.updateUniform(uu, Zu._TempBuffer, 4)
      }
      _updateIntForEffect(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(uu + ju, Eu)
      }
      _updateIntForUniform(uu, Eu) {
        Zu._TempBufferInt32View[0] = Eu, this.updateUniform(uu, Zu._TempBuffer, 1)
      }
      _updateInt2ForEffect(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(uu + su, Eu, ju)
      }
      _updateInt2ForUniform(uu, Eu, ju) {
        Zu._TempBufferInt32View[0] = Eu, Zu._TempBufferInt32View[1] = ju, this.updateUniform(uu, Zu._TempBuffer, 2)
      }
      _updateInt3ForEffect(uu, Eu, ju, su) {
        let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(uu + Uu, Eu, ju, su)
      }
      _updateInt3ForUniform(uu, Eu, ju, su) {
        Zu._TempBufferInt32View[0] = Eu, Zu._TempBufferInt32View[1] = ju, Zu._TempBufferInt32View[2] = su, this.updateUniform(uu, Zu._TempBuffer, 3)
      }
      _updateInt4ForEffect(uu, Eu, ju, su, Uu) {
        let Zu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(uu + Zu, Eu, ju, su, Uu)
      }
      _updateInt4ForUniform(uu, Eu, ju, su, Uu) {
        Zu._TempBufferInt32View[0] = Eu, Zu._TempBufferInt32View[1] = ju, Zu._TempBufferInt32View[2] = su, Zu._TempBufferInt32View[3] = Uu, this.updateUniform(uu, Zu._TempBuffer, 4)
      }
      _updateUIntForEffect(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(uu + ju, Eu)
      }
      _updateUIntForUniform(uu, Eu) {
        Zu._TempBufferUInt32View[0] = Eu, this.updateUniform(uu, Zu._TempBuffer, 1)
      }
      _updateUInt2ForEffect(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(uu + su, Eu, ju)
      }
      _updateUInt2ForUniform(uu, Eu, ju) {
        Zu._TempBufferUInt32View[0] = Eu, Zu._TempBufferUInt32View[1] = ju, this.updateUniform(uu, Zu._TempBuffer, 2)
      }
      _updateUInt3ForEffect(uu, Eu, ju, su) {
        let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(uu + Uu, Eu, ju, su)
      }
      _updateUInt3ForUniform(uu, Eu, ju, su) {
        Zu._TempBufferUInt32View[0] = Eu, Zu._TempBufferUInt32View[1] = ju, Zu._TempBufferUInt32View[2] = su, this.updateUniform(uu, Zu._TempBuffer, 3)
      }
      _updateUInt4ForEffect(uu, Eu, ju, su, Uu) {
        let Zu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(uu + Zu, Eu, ju, su, Uu)
      }
      _updateUInt4ForUniform(uu, Eu, ju, su, Uu) {
        Zu._TempBufferUInt32View[0] = Eu, Zu._TempBufferUInt32View[1] = ju, Zu._TempBufferUInt32View[2] = su, Zu._TempBufferUInt32View[3] = Uu, this.updateUniform(uu, Zu._TempBuffer, 4)
      }
      setTexture(uu, Eu) {
        this._currentEffect.setTexture(uu, Eu)
      }
      setTextureArray(uu, Eu) {
        this._currentEffect.setTextureArray(uu, Eu)
      }
      bindTexture(uu, Eu) {
        this._currentEffect._bindTexture(uu, Eu)
      }
      updateUniformDirectly(uu, Eu) {
        this.updateUniform(uu, Eu, Eu.length), this.update()
      }
      bindToEffect(uu, Eu) {
        this._currentEffect = uu, this._currentEffectName = Eu
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(uu) {
        if (!this._buffers) return this._buffer === uu;
        for (let Eu = 0; Eu < this._buffers.length; ++Eu) {
          if (this._buffers[Eu][0] === uu) return this._bufferIndex = Eu, this._buffer = uu, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[Eu][1] && (this._bufferData.set(this._buffers[Eu][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(uu) {
        return void 0 !== this._uniformLocations[uu]
      }
      dispose() {
        if (this._noUBO) return;
        const uu = this._engine._uniformBuffers,
          Eu = uu.indexOf(this);
        if (-1 !== Eu && (uu[Eu] = uu[uu.length - 1], uu.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let uu = 0; uu < this._buffers.length; ++uu) {
            const Eu = this._buffers[uu][0];
            this._engine._releaseBuffer(Eu)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    Zu._MAX_UNIFORM_SIZE = 256, Zu._TempBuffer = new Float32Array(Zu._MAX_UNIFORM_SIZE), Zu._TempBufferInt32View = new Int32Array(Zu._TempBuffer.buffer), Zu._TempBufferUInt32View = new Uint32Array(Zu._TempBuffer.buffer)
  },
  40184: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Uu
    });
    var su = ju(40186);
    class Uu extends su.e {
      constructor(uu) {
        super(), this._buffer = uu
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  40264: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => qu,
      f: () => fu
    });
    const su = "__bjs_serializable__",
      Uu = new WeakMap;

    function Zu(uu, Eu) {
      return Object.prototype.hasOwnProperty.call(uu, Eu)
    }
    const Xu = function() {
      let uu = Symbol.metadata;
      return uu || (uu = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: uu
      })), uu
    }();

    function lu(uu) {
      return "function" === typeof uu ? uu : uu?.constructor
    }

    function qu(uu) {
      if (!uu) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(Xu)}) polyfill must run before decorated classes are evaluated.`);
      return Zu(uu, su) || (uu[su] = {}), uu[su]
    }

    function fu(uu) {
      const Eu = lu(uu),
        ju = Eu ? Eu[Xu] : void 0;
      if (!ju) return {};
      const qu = Uu.get(ju);
      if (qu) return qu;
      const fu = {},
        Cu = [];
      let bu = ju;
      for (; bu;) Cu.push(bu), bu = Object.getPrototypeOf(bu);
      for (const Uu of Cu)
        if (Zu(Uu, su)) {
          const uu = Uu[su];
          for (const Eu in uu) fu[Eu] = uu[Eu]
        } return Uu.set(ju, fu), fu
    }
  },
  40258: (uu, Eu, ju) => {
    ju.d(Eu, {
      A: () => bu,
      E: () => Xu,
      d: () => Mu,
      e: () => Zu,
      f: () => gu,
      i: () => Nu,
      j: () => qu,
      m: () => Ou,
      p: () => fu,
      r: () => hu,
      u: () => cu,
      x: () => Yu,
      y: () => lu,
      z: () => Cu
    });
    var su = ju(40264);

    function Uu(uu, Eu) {
      return (ju, Uu) => {
        if (!Uu.metadata) return;
        const Zu = String(Uu.name),
          Xu = (0, su.b)(Uu.metadata);
        Xu[Zu] || (Xu[Zu] = {
          type: uu,
          sourceName: Eu
        })
      }
    }

    function Zu(uu) {
      return function(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (ju, su) => {
          const Uu = Eu || "_" + String(su.name);
          return {
            init(uu) {
              return void 0 === uu && Uu in this || (this[Uu] = uu), uu
            },
            get() {
              return this[Uu]
            },
            set(Eu) {
              "function" === typeof this[Uu]?.equals && this[Uu].equals(Eu) || this[Uu] !== Eu && (this[Uu] = Eu, this[uu]())
            }
          }
        }
      }(uu, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function Xu(uu) {
      return Uu(0, uu)
    }

    function lu(uu) {
      return Uu(1, uu)
    }

    function qu(uu) {
      return Uu(2, uu)
    }

    function fu(uu) {
      return Uu(3, uu)
    }

    function Cu(uu) {
      return Uu(4, uu)
    }

    function bu(uu) {
      return Uu(5, uu)
    }

    function cu(uu) {
      return Uu(6, uu)
    }

    function Nu(uu) {
      return Uu(7, uu)
    }

    function Ou(uu) {
      return Uu(8, uu)
    }

    function Yu(uu) {
      return Uu(10, uu)
    }

    function hu(uu) {
      return Uu(12, uu)
    }

    function Du(uu, Eu, ju) {
      const su = String(Eu.name);
      let Uu = null;
      const Zu = function() {
        if (null === Uu) {
          Uu = uu, "undefined" !== typeof _native && _native[su] && (Uu = ju(_native[su], uu));
          const Xu = this && (Eu.static ? this : Object.getPrototypeOf(this));
          Xu?.[su] === Zu && (Xu[su] = Uu)
        }
        for (var Xu = arguments.length, lu = new Array(Xu), qu = 0; qu < Xu; qu++) lu[qu] = arguments[qu];
        return Uu.apply(this, lu)
      };
      return Zu
    }

    function gu(uu, Eu) {
      return Du(uu, Eu, (uu => uu))
    }

    function Mu(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (ju, su) => {
        const Uu = Eu || "_" + String(su.name);
        return {
          get() {
            return this[Uu]?.value
          },
          set(Eu) {
            "function" === typeof this[Uu]?.value?.equals && this[Uu].value.equals(Eu) || this[Uu].value !== Eu && (this[Uu].value = Eu, this[uu]())
          }
        }
      }
    }
    gu.filter = function(uu) {
      return (Eu, ju) => Du(Eu, ju, ((Eu, ju) => function() {
        for (var su = arguments.length, Uu = new Array(su), Zu = 0; Zu < su; Zu++) Uu[Zu] = arguments[Zu];
        return uu(...Uu) ? Eu(...Uu) : ju.apply(this, Uu)
      }))
    }
  },
  40272: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => fu
    });
    var su = ju(40153),
      Uu = ju(40281),
      Zu = ju(37680),
      Xu = ju(37494),
      lu = ju(40264);
    const qu = function(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Zu = uu();
      Uu.c && Uu.c.HasTags(Eu) && Uu.c.AddTagsTo(Zu, Uu.c.GetTags(Eu, !0));
      const Xu = (0, lu.f)(Zu),
        qu = {};
      for (const Uu in Xu) {
        const uu = Xu[Uu],
          lu = Eu[Uu],
          Cu = uu.type;
        if (void 0 !== lu && null !== lu && ("uniqueId" !== Uu || fu.AllowLoadingUniqueId)) switch (Cu) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof lu.slice ? Zu[Uu] = lu.slice() : Zu[Uu] = lu;
            break;
          case 1:
            su.cloneTexturesOnlyOnce && qu[lu.uniqueId] ? Zu[Uu] = qu[lu.uniqueId] : (Zu[Uu] = ju || lu.isRenderTarget ? lu : lu.clone(), qu[lu.uniqueId] = Zu[Uu]);
            break;
          case 2:
          case 3:
          case 4:
          case 5:
          case 7:
          case 8:
          case 10:
          case 12:
          case 13:
            Zu[Uu] = ju ? lu : lu.clone()
        }
      }
      return Zu
    };
    class fu {
      static AppendSerializedAnimations(uu, Eu) {
        if (uu.animations) {
          Eu.animations = [];
          for (let ju = 0; ju < uu.animations.length; ju++) {
            const su = uu.animations[ju];
            Eu.animations.push(su.serialize())
          }
        }
      }
      static Serialize(uu, Eu) {
        Eu || (Eu = {}), Uu.c && (Eu.tags = Uu.c.GetTags(uu));
        const ju = (0, lu.f)(uu);
        for (const su in ju) {
          const Uu = ju[su],
            Zu = Uu.sourceName || su,
            Xu = Uu.type,
            lu = uu[su];
          if (void 0 !== lu && null !== lu && ("uniqueId" !== su || fu.AllowLoadingUniqueId)) switch (Xu) {
            case 0:
              Array.isArray(lu) ? Eu[Zu] = lu.slice() : Eu[Zu] = lu;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              Eu[Zu] = lu.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              Eu[Zu] = lu.Osu();
              break;
            case 6:
            case 11:
              Eu[Zu] = lu.id
          }
        }
        return Eu
      }
      static ParseProperties(uu, Eu, ju, su) {
        su || (su = "");
        const Uu = (0, lu.f)(Eu);
        for (const lu in Uu) {
          const qu = Uu[lu],
            Cu = uu[qu.sourceName || lu],
            bu = qu.type;
          if (void 0 !== Cu && null !== Cu && ("uniqueId" !== lu || fu.AllowLoadingUniqueId)) {
            const uu = Eu;
            switch (bu) {
              case 0:
                uu[lu] = Cu;
                break;
              case 1:
                ju && (uu[lu] = fu._TextureParser(Cu, ju, su));
                break;
              case 2:
                uu[lu] = Zu.c.FromArray(Cu);
                break;
              case 3:
                uu[lu] = fu._FresnelParametersParser(Cu);
                break;
              case 4:
                uu[lu] = Xu.p.FromArray(Cu);
                break;
              case 5:
                uu[lu] = Xu.t.FromArray(Cu);
                break;
              case 6:
                ju && (uu[lu] = ju.getLastMeshById(Cu));
                break;
              case 7:
                uu[lu] = fu._ColorCurvesParser(Cu);
                break;
              case 8:
                uu[lu] = Zu.g.FromArray(Cu);
                break;
              case 9:
                uu[lu] = fu._ImageProcessingConfigurationParser(Cu);
                break;
              case 10:
                uu[lu] = Xu.i.FromArray(Cu);
                break;
              case 11:
                ju && (uu[lu] = ju.getCameraById(Cu));
                break;
              case 12:
                uu[lu] = Xu.e.FromArray(Cu);
                break;
              case 13:
                uu[lu] = Xu.u.FromArray(Cu)
            }
          }
        }
      }
      static Parse(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Zu = uu();
        return Uu.c && Uu.c.AddTagsTo(Zu, Eu.tags), fu.ParseProperties(Eu, Zu, ju, su), Zu
      }
      static Clone(uu, Eu) {
        return qu(uu, Eu, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(uu, Eu) {
        return qu(uu, Eu, !0)
      }
    }
    fu.AllowLoadingUniqueId = !1, fu._ImageProcessingConfigurationParser = uu => {
      throw (0, su.h)("ImageProcessingConfiguration")
    }, fu._FresnelParametersParser = uu => {
      throw (0, su.h)("FresnelParameters")
    }, fu._ColorCurvesParser = uu => {
      throw (0, su.h)("ColorCurves")
    }, fu._TextureParser = (uu, Eu, ju) => {
      throw (0, su.h)("Texture")
    }
  },
  40209: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Uu
    });
    var su = ju(40170);
    class Uu {
      get min() {
        return this._min
      }
      get max() {
        return this._max
      }
      get average() {
        return this._average
      }
      get lastSecAverage() {
        return this._lastSecAverage
      }
      get current() {
        return this._current
      }
      get total() {
        return this._totalAccumulated
      }
      get count() {
        return this._totalValueCount
      }
      constructor() {
        this._startMonitoringTime = 0, this._min = 0, this._max = 0, this._hasResult = !1, this._hasCurrentValue = !1, this._average = 0, this._lastSecAverage = 0, this._current = 0, this._totalValueCount = 0, this._totalAccumulated = 0, this._lastSecAccumulated = 0, this._lastSecTime = 0, this._lastSecValueCount = 0
      }
      fetchNewFrame() {
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = Uu.Enabled, this._lastSecValueCount++
      }
      addCount(uu, Eu) {
        Uu.Enabled && (this._current += uu, this._hasCurrentValue = !0, Eu && this._fetchResult())
      }
      beginMonitoring() {
        Uu.Enabled && (this._startMonitoringTime = su.c.Now)
      }
      endMonitoring() {
        let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!Uu.Enabled) return;
        uu && this.fetchNewFrame();
        const Eu = su.c.Now;
        this._current = Eu - this._startMonitoringTime, this._hasCurrentValue = !0, uu && this._fetchResult()
      }
      JG() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const uu = su.c.Now;
        uu - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = uu, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    Uu.Enabled = !0
  },
  40366: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Uu,
      f: () => su
    });
    class su {
      constructor(uu) {
        this.length = 0, this.data = new Array(uu), this._id = su._GlobalId++
      }
      push(uu) {
        this.data[this.length++] = uu, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(uu) {
        for (let Eu = 0; Eu < this.length; Eu++) uu(this.data[Eu])
      }
      sort(uu) {
        this.data.sort(uu)
      }
      reset() {
        this.length = 0
      }
      dispose() {
        this.reset(), this.data && (this.data.length = 0)
      }
      concat(uu) {
        if (0 !== uu.length) {
          this.length + uu.length > this.data.length && (this.data.length = 2 * (this.length + uu.length));
          for (let Eu = 0; Eu < uu.length; Eu++) this.data[this.length++] = (uu.data || uu)[Eu]
        }
      }
      indexOf(uu) {
        const Eu = this.data.indexOf(uu);
        return Eu >= this.length ? -1 : Eu
      }
      contains(uu) {
        return -1 !== this.indexOf(uu)
      }
    }
    su._GlobalId = 0;
    class Uu extends su {
      constructor() {
        super(...arguments), this._duplicateId = 0
      }
      push(uu) {
        super.push(uu), uu.__smartArrayFlags || (uu.__smartArrayFlags = {}), uu.__smartArrayFlags[this._id] = this._duplicateId
      }
      pushNoDuplicate(uu) {
        return (!uu.__smartArrayFlags || uu.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(uu), !0)
      }
      reset() {
        super.reset(), this._duplicateId++
      }
      concatWithNoDuplicate(uu) {
        if (0 !== uu.length) {
          this.length + uu.length > this.data.length && (this.data.length = 2 * (this.length + uu.length));
          for (let Eu = 0; Eu < uu.length; Eu++) {
            const ju = (uu.data || uu)[Eu];
            this.pushNoDuplicate(ju)
          }
        }
      }
    }
  },
  40281: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Uu
    });
    class su {
      static Eval(uu, Eu) {
        return "true" === (uu = uu.match(/\([^()]*\)/g) ? uu.replace(/\([^()]*\)/g, (uu => (uu = uu.slice(1, uu.length - 1), su._HandleParenthesisContent(uu, Eu)))) : su._HandleParenthesisContent(uu, Eu)) || "false" !== uu && su.Eval(uu, Eu)
      }
      static _HandleParenthesisContent(uu, Eu) {
        let ju;
        Eu = Eu || (uu => "true" === uu);
        const Uu = uu.split("||");
        for (const Zu in Uu)
          if (Object.prototype.hasOwnProperty.call(Uu, Zu)) {
            let uu = su._SimplifyNegation(Uu[Zu].trim());
            const Xu = uu.split("&&");
            if (Xu.length > 1)
              for (let Uu = 0; Uu < Xu.length; ++Uu) {
                const Zu = su._SimplifyNegation(Xu[Uu].trim());
                if (ju = "true" !== Zu && "false" !== Zu ? "!" === Zu[0] ? !Eu(Zu.substring(1)) : Eu(Zu) : "true" === Zu, !ju) {
                  uu = "false";
                  break
                }
              }
            if (ju || "true" === uu) {
              ju = !0;
              break
            }
            ju = "true" !== uu && "false" !== uu ? "!" === uu[0] ? !Eu(uu.substring(1)) : Eu(uu) : "true" === uu
          } return ju ? "true" : "false"
      }
      static _SimplifyNegation(uu) {
        return "!true" === (uu = (uu = uu.replace(/^[\s!]+/, (uu => (uu = uu.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? uu = "false" : "!false" === uu && (uu = "true"), uu
      }
    }
    class Uu {
      static EnableFor(uu) {
        uu._tags = uu._tags || {}, uu.hasTags = () => Uu.HasTags(uu), uu.addTags = Eu => Uu.AddTagsTo(uu, Eu), uu.removeTags = Eu => Uu.RemoveTagsFrom(uu, Eu), uu.matchesTagsQuery = Eu => Uu.MatchesQuery(uu, Eu)
      }
      static DisableFor(uu) {
        delete uu._tags, delete uu.hasTags, delete uu.addTags, delete uu.removeTags, delete uu.matchesTagsQuery
      }
      static HasTags(uu) {
        if (!uu._tags) return !1;
        const Eu = uu._tags;
        for (const ju in Eu)
          if (Object.prototype.hasOwnProperty.call(Eu, ju)) return !0;
        return !1
      }
      static GetTags(uu) {
        let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!uu._tags) return null;
        if (Eu) {
          const Eu = [];
          for (const ju in uu._tags) Object.prototype.hasOwnProperty.call(uu._tags, ju) && !0 === uu._tags[ju] && Eu.push(ju);
          return Eu.join(" ")
        }
        return uu._tags
      }
      static AddTagsTo(uu, Eu) {
        if (!Eu) return;
        if ("string" !== typeof Eu) return;
        const ju = Eu.split(" ");
        for (const su of ju) Uu._AddTagTo(uu, su)
      }
      static _AddTagTo(uu, Eu) {
        "" !== (Eu = Eu.trim()) && "true" !== Eu && "false" !== Eu && (Eu.match(/[\s]/) || Eu.match(/^([!]|([|]|[&]){2})/) || (Uu.EnableFor(uu), uu._tags[Eu] = !0))
      }
      static RemoveTagsFrom(uu, Eu) {
        if (!Uu.HasTags(uu)) return;
        const ju = Eu.split(" ");
        for (const su in ju) Uu._RemoveTagFrom(uu, ju[su])
      }
      static _RemoveTagFrom(uu, Eu) {
        delete uu._tags[Eu]
      }
      static MatchesQuery(uu, Eu) {
        return void 0 === Eu || ("" === Eu ? Uu.HasTags(uu) : su.Eval(Eu, (Eu => Uu.HasTags(uu) && uu._tags[Eu])))
      }
    }
  },
  40403: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Zu
    });
    var su = ju(40399),
      Uu = ju(37514);
    class Zu {
      constructor(uu) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new Uu.d, this._scene = uu
      }
      _prepareBuffers() {
        if (this._vertexBuffers[su.j.PositionKind]) return;
        const uu = [];
        uu.push(1, 1), uu.push(-1, 1), uu.push(-1, -1), uu.push(1, -1), this._vertexBuffers[su.j.PositionKind] = new su.j(this._scene.wO(), uu, su.j.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const uu = [];
        uu.push(0), uu.push(1), uu.push(2), uu.push(0), uu.push(2), uu.push(3), this._indexBuffer = this._scene.wO().createIndexBuffer(uu)
      }
      _getActivePostProcesses(uu) {
        const Eu = this._activePostProcesses;
        Eu.length = 0;
        for (let ju = 0; ju < uu.length; ju++) {
          const su = uu[ju];
          su && Eu.push(su)
        }
        return Eu
      }
      _rebuild() {
        const uu = this._vertexBuffers[su.j.PositionKind];
        uu && (uu._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ju = this._scene.activeCamera;
        return !!ju && (Eu = Eu || this._getActivePostProcesses(ju._postProcesses), !(!Eu || 0 === Eu.length || !this._scene.postProcessesEnabled) && (Eu[0].activate(ju, uu, null !== Eu && void 0 !== Eu), !0))
      }
      directRender(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          Zu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Xu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : uu.length;
        const lu = this._scene.wO();
        for (let qu = 0; qu < Xu; qu++) {
          qu < uu.length - 1 ? uu[qu + 1].activate(this._scene.activeCamera || this._scene, Eu?.texture) : (Eu ? lu.bindFramebuffer(Eu, su, void 0, void 0, ju, Uu) : Zu || lu.restoreDefaultFramebuffer(), lu._debugInsertMarker?.(`post process ${uu[qu].name} output`));
          const Xu = uu[qu],
            fu = Xu.apply();
          fu && (Xu.onBeforeRenderObservable.notifyObservers(fu), this._prepareBuffers(), lu.bindBuffers(this._vertexBuffers, this._indexBuffer, fu), lu.drawElementsType(0, 0, 6), Xu.onAfterRenderObservable.notifyObservers(fu))
        }
        lu.setDepthBuffer(!0), lu.setDepthWrite(!0)
      }
      _finalizeFrame(uu, Eu, ju, su) {
        let Uu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Zu = this._scene.activeCamera;
        if (!Zu) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (su = su || this._getActivePostProcesses(Zu._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const Xu = this._scene.wO();
        for (let lu = 0, qu = su.length; lu < qu; lu++) {
          const fu = su[lu];
          if (lu < qu - 1 ? fu._outputTexture = su[lu + 1].activate(Zu, Eu?.texture) : (Eu ? (Xu.bindFramebuffer(Eu, ju, void 0, void 0, Uu), fu._outputTexture = Eu) : (Xu.restoreDefaultFramebuffer(), fu._outputTexture = null), Xu._debugInsertMarker?.(`post process ${su[lu].name} output`)), uu) break;
          const Cu = fu.apply();
          Cu && (fu.onBeforeRenderObservable.notifyObservers(Cu), this._prepareBuffers(), Xu.bindBuffers(this._vertexBuffers, this._indexBuffer, Cu), Xu.drawElementsType(0, 0, 6), fu.onAfterRenderObservable.notifyObservers(Cu))
        }
        Xu.setDepthBuffer(!0), Xu.setDepthWrite(!0), Xu.setAlphaMode(0)
      }
      dispose() {
        const uu = this._vertexBuffers[su.j.PositionKind];
        uu && (uu.dispose(), this._vertexBuffers[su.j.PositionKind] = null), this._indexBuffer && (this._scene.wO()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  40420: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => fu
    });
    var su = ju(40366),
      Uu = ju(37494);
    const Zu = [],
      Xu = [];
    let lu = !1;

    function qu(uu, Eu) {
      for (; uu.length < Eu;) uu.push(void 0)
    }
    class fu {
      set opaqueSortCompareFn(uu) {
        this._opaqueSortCompareFn = uu || fu.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(uu) {
        this._alphaTestSortCompareFn = uu || fu.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(uu) {
        this._transparentSortCompareFn = uu || fu.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Uu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Zu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = uu, this._opaqueSubMeshes = new su.f(256), this._transparentSubMeshes = new su.f(256), this._alphaTestSubMeshes = new su.f(256), this._depthOnlySubMeshes = new su.f(256), this._particleSystems = new su.f(256), this._spriteManagers = new su.f(256), this._empty = !0, this._edgesRenderers = new su.e(16), this.disableDepthPrePass = !1, this._scene = Eu, this.opaqueSortCompareFn = ju, this.alphaTestSortCompareFn = Uu, this.transparentSortCompareFn = Zu
      }
      render(uu, Eu, ju, su) {
        let Uu = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Zu = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Xu = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          lu = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          qu = arguments.length > 8 ? arguments[8] : void 0;
        if (uu) return void uu(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const fu = this._scene.wO();
        Uu && 0 !== this._depthOnlySubMeshes.length && (fu.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), fu.setColorWrite(!0)), Zu && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), Xu && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const Cu = fu.getStencilBuffer();
        if (fu.setStencilBuffer(!1), Eu && this._renderSprites(), ju && this._renderParticles(su), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), lu && (qu || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (fu.setStencilBuffer(Cu), qu) qu(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const uu = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            uu.length && this._renderTransparent(uu)
          } else this._renderTransparent(this._transparentSubMeshes);
          fu.setAlphaMode(0)
        }
        if (fu.setStencilBuffer(!1), Zu && this._edgesRenderers.length) {
          for (let uu = 0; uu < this._edgesRenderers.length; uu++) this._edgesRenderers.data[uu].render();
          fu.setAlphaMode(0)
        }
        fu.setStencilBuffer(Cu)
      }
      _renderOpaqueSorted(uu) {
        fu._RenderSorted(uu, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(uu) {
        fu._RenderSorted(uu, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(uu) {
        fu._RenderSorted(uu, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(uu, Eu, ju, su, Zu) {
        let Cu, bu = 0;
        const cu = ju ? ju.globalPosition : fu._ZeroVector;
        if (su && Eu !== fu.PainterSortCompare)
          for (; bu < uu.length; bu++) Cu = uu.data[bu], Cu._alphaIndex = Cu.getMesh().alphaIndex, Cu._distanceToCamera = Uu.t.Distance(Cu.EW().Isu.centerWorld, cu);
        const Nu = uu.length;
        let Ou = uu.data;
        const Yu = Nu !== Ou.length && !lu;
        if (Yu) {
          for (lu = !0, qu(Xu, Nu), bu = 0; bu < Nu; bu++) Xu[bu] = Ou[bu];
          Ou = Xu
        } else Nu !== Ou.length && (Ou = Ou.slice(0, Nu));
        try {
          Eu && fu._StableSort(Ou, Nu, Eu), fu._DrawSorted(Ou, Nu, su, Zu)
        } finally {
          Yu && (Xu.fill(void 0, 0, Nu), lu = !1)
        }
      }
      static _DrawSorted(uu, Eu, ju, su) {
        let Uu;
        const Zu = uu[0].getMesh().hV();
        for (let Xu = 0; Xu < Eu; Xu++) {
          if (Uu = uu[Xu], Zu._activeMeshesFrozenButKeepClipping && !Uu.isInFrustum(Zu._frustumPlanes)) continue;
          let Eu = !1;
          if (ju) {
            const uu = Uu.oO();
            if (uu && uu.needDepthPrePass && !su) {
              Eu = !0;
              const ju = uu.hV().wO();
              ju.setColorWrite(!1), ju.setAlphaMode(0), Uu.render(!1), ju.setColorWrite(!0)
            }
          }
          const lu = Uu._renderingMesh;
          !Eu && lu._renderRunFollower(Uu, ju) || Uu.render(ju)
        }
      }
      static _StableSort(uu, Eu, ju) {
        for (let su = 0; su < Eu; su += 16) {
          const Uu = Math.min(su + 16, Eu);
          for (let Eu = su + 1; Eu < Uu; Eu++) {
            const Uu = uu[Eu];
            let Zu = su,
              Xu = Eu;
            for (; Zu < Xu;) {
              const Eu = Zu + Xu >>> 1;
              ju(Uu, uu[Eu]) < 0 ? Xu = Eu : Zu = Eu + 1
            }
            for (let ju = Eu; ju > Zu; ju--) uu[ju] = uu[ju - 1];
            uu[Zu] = Uu
          }
        }
        if (!(Eu <= 16)) {
          qu(Zu, Eu);
          try {
            let su = uu,
              Uu = Zu;
            for (let uu = 16; uu < Eu; uu *= 2) {
              for (let Xu = 0; Xu < Eu; Xu += 2 * uu) {
                const Zu = Math.min(Xu + uu, Eu),
                  lu = Math.min(Xu + 2 * uu, Eu);
                let qu = Xu,
                  fu = Zu,
                  Cu = Xu;
                if (Zu < lu && ju(su[Zu], su[Zu - 1]) < 0)
                  for (; qu < Zu && fu < lu;) Uu[Cu++] = ju(su[fu], su[qu]) < 0 ? su[fu++] : su[qu++];
                for (; qu < Zu;) Uu[Cu++] = su[qu++];
                for (; fu < lu;) Uu[Cu++] = su[fu++]
              }
              const Zu = Uu;
              Uu = su, su = Zu
            }
            if (su !== uu)
              for (let ju = 0; ju < Eu; ju++) uu[ju] = su[ju]
          } finally {
            Zu.fill(void 0, 0, Eu)
          }
        }
      }
      static defaultTransparentSortCompare(uu, Eu) {
        return uu._alphaIndex > Eu._alphaIndex ? 1 : uu._alphaIndex < Eu._alphaIndex ? -1 : fu.backToFrontSortCompare(uu, Eu)
      }
      static backToFrontSortCompare(uu, Eu) {
        return uu._distanceToCamera < Eu._distanceToCamera ? 1 : uu._distanceToCamera > Eu._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(uu, Eu) {
        return uu._distanceToCamera < Eu._distanceToCamera ? -1 : uu._distanceToCamera > Eu._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(uu, Eu) {
        const ju = uu.getMesh(),
          su = Eu.getMesh();
        return ju.material && su.material ? ju.material.uniqueId - su.material.uniqueId : ju.uniqueId - su.uniqueId
      }
      prepare() {
        this._opaqueSubMeshes.reset(), this._transparentSubMeshes.reset(), this._alphaTestSubMeshes.reset(), this._depthOnlySubMeshes.reset(), this._particleSystems.reset(), this.prepareSprites(), this._edgesRenderers.reset(), this._empty = !0
      }
      prepareSprites() {
        this._spriteManagers.reset()
      }
      dispose() {
        this._opaqueSubMeshes.dispose(), this._transparentSubMeshes.dispose(), this._alphaTestSubMeshes.dispose(), this._depthOnlySubMeshes.dispose(), this._particleSystems.dispose(), this._spriteManagers.dispose(), this._edgesRenderers.dispose()
      }
      dispatch(uu, Eu, ju) {
        void 0 === Eu && (Eu = uu.getMesh()), void 0 === ju && (ju = uu.oO()), null !== ju && void 0 !== ju && (ju.needAlphaBlendingForMesh(Eu) ? this._transparentSubMeshes.push(uu) : ju.needAlphaTestingForMesh(Eu) ? (ju.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(uu), this._alphaTestSubMeshes.push(uu)) : (ju.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(uu), this._opaqueSubMeshes.push(uu)), Eu._renderingGroup = this, Eu._edgesRenderer && Eu.isEnabled() && Eu.isVisible && Eu._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(Eu._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(uu) {
        this._spriteManagers.push(uu), this._empty = !1
      }
      dispatchParticles(uu) {
        this._particleSystems.push(uu), this._empty = !1
      }
      _renderParticles(uu) {
        if (0 === this._particleSystems.length) return;
        const Eu = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let ju = 0; ju < this._particleSystems.length; ju++) {
          const su = this._particleSystems.data[ju];
          if (0 === (Eu && Eu.layerMask & su.layerMask)) continue;
          const Uu = su.emitter;
          Uu.position && uu && -1 === uu.indexOf(Uu) || this._scene._activeParticles.addCount(su.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const uu = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let Eu = 0; Eu < this._spriteManagers.length; Eu++) {
          const ju = this._spriteManagers.data[Eu];
          0 !== (uu && uu.layerMask & ju.layerMask) && ju.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    fu._ZeroVector = Uu.t.Zero()
  },
  40417: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Zu
    });
    var su = ju(40420);
    class Uu {}
    class Zu {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(uu) {
        this._disableDepthPrePass = uu;
        for (const Eu of this._renderingGroups) Eu.disableDepthPrePass = uu
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(uu) {
        uu !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = uu, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const uu of this._scene.meshes)
          if (uu.iG)
            for (const Eu of uu.iG) Eu._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const uu of this._scene.spriteManagers) uu._wasDispatched = !1;
        for (const uu of this._scene.WG) uu._wasDispatched = !1
      }
      constructor(uu) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new Uu, this._maintainStateBetweenFrames = !1, this._scene = uu;
        for (let Eu = Zu.MIN_RENDERINGGROUPS; Eu < Zu.MAX_RENDERINGGROUPS; Eu++) this._autoClearDepthStencil[Eu] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(uu) {
        const Eu = uu || 0;
        return this._prepareRenderingGroup(Eu), this._renderingGroups[Eu]
      }
      _clearDepthStencilBuffer() {
        let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.wO().clear(null, !1, uu, Eu), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(uu, Eu, ju, su) {
        let Uu = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Xu = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          lu = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          qu = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          fu = arguments.length > 8 ? arguments[8] : void 0,
          Cu = arguments.length > 9 ? arguments[9] : void 0;
        const bu = this._renderingGroupInfo;
        bu.vY = this._scene, bu.camera = this._scene.activeCamera, bu.renderingManager = this;
        const cu = Cu ?? this._scene.spriteManagers;
        if (cu && su)
          for (let Zu = 0; Zu < cu.length; Zu++) {
            const uu = cu[Zu];
            this.dispatchSprites(uu)
          }
        for (let Nu = Zu.MIN_RENDERINGGROUPS; Nu < Zu.MAX_RENDERINGGROUPS; Nu++) {
          this._depthStencilBufferAlreadyCleaned = Nu === Zu.MIN_RENDERINGGROUPS;
          const Cu = this._renderingGroups[Nu];
          if (!Cu || Cu._empty) continue;
          const cu = 1 << Nu;
          if (bu.renderingGroupId = Nu, this._scene.onBeforeRenderingGroupObservable.notifyObservers(bu, cu), Zu.AUTOCLEAR) {
            const uu = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(Nu) : this._autoClearDepthStencil[Nu];
            uu && uu.autoClear && this._clearDepthStencilBuffer(uu.depth, uu.stencil)
          }
          for (let uu = 0, Eu = this._scene._beforeRenderingGroupDrawStage; uu < Eu.length; uu++) {
            Eu[uu].action(Nu)
          }
          Cu.render(uu, su, ju, Eu, Uu, Xu, lu, qu, fu);
          for (let uu = 0, Eu = this._scene._afterRenderingGroupDrawStage; uu < Eu.length; uu++) {
            Eu[uu].action(Nu)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(bu, cu)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let uu = Zu.MIN_RENDERINGGROUPS; uu < Zu.MAX_RENDERINGGROUPS; uu++) {
            const Eu = this._renderingGroups[uu];
            Eu && Eu.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let uu = Zu.MIN_RENDERINGGROUPS; uu < Zu.MAX_RENDERINGGROUPS; uu++) {
            const Eu = this._renderingGroups[uu];
            Eu && Eu.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let uu = Zu.MIN_RENDERINGGROUPS; uu < Zu.MAX_RENDERINGGROUPS; uu++) {
          const Eu = this._renderingGroups[uu];
          Eu && Eu.dispose()
        }
      }
      _prepareRenderingGroup(uu) {
        void 0 === this._renderingGroups[uu] && (this._renderingGroups[uu] = new su.d(uu, this._scene, this._customOpaqueSortCompareFn[uu], this._customAlphaTestSortCompareFn[uu], this._customTransparentSortCompareFn[uu]), this._renderingGroups[uu].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(uu) {
        this.maintainStateBetweenFrames && uu._wasDispatched || (uu._wasDispatched = !0, this.getRenderingGroup(uu.renderingGroupId).dispatchSprites(uu))
      }
      dispatchParticles(uu) {
        this.maintainStateBetweenFrames && uu._wasDispatched || (uu._wasDispatched = !0, this.getRenderingGroup(uu.renderingGroupId).dispatchParticles(uu))
      }
      dispatch(uu, Eu, ju) {
        void 0 === Eu && (Eu = uu.getMesh()), this.maintainStateBetweenFrames && uu._wasDispatched || (uu._wasDispatched = !0, this.getRenderingGroup(Eu.renderingGroupId).dispatch(uu, Eu, ju))
      }
      setRenderingOrder(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[uu] = Eu, this._customAlphaTestSortCompareFn[uu] = ju, this._customTransparentSortCompareFn[uu] = su, this._renderingGroups[uu]) {
          const Eu = this._renderingGroups[uu];
          Eu.opaqueSortCompareFn = this._customOpaqueSortCompareFn[uu], Eu.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[uu], Eu.transparentSortCompareFn = this._customTransparentSortCompareFn[uu]
        }
      }
      setRenderingAutoClearDepthStencil(uu, Eu) {
        let ju = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          su = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[uu] = {
          autoClear: Eu,
          depth: ju,
          stencil: su
        }
      }
      getAutoClearDepthStencilSetup(uu) {
        return this._autoClearDepthStencil[uu]
      }
    }
    Zu.MAX_RENDERINGGROUPS = 4, Zu.MIN_RENDERINGGROUPS = 0, Zu.AUTOCLEAR = !0
  },
  40172: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => su
    });
    class su {
      constructor(uu) {
        this._supportBlendParametersPerTarget = uu, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled = 0, this._isAlphaBlendDirty = !1, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1, this.reset()
      }
      get isDirty() {
        return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
      }
      get alphaBlend() {
        return this._numTargetEnabled > 0
      }
      set alphaBlend(uu) {
        this.setAlphaBlend(uu)
      }
      setAlphaBlend(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[Eu] !== uu && (uu ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[Eu] = uu, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(uu, Eu, ju, su) {
        this._blendConstants[0] === uu && this._blendConstants[1] === Eu && this._blendConstants[2] === ju && this._blendConstants[3] === su || (this._blendConstants[0] = uu, this._blendConstants[1] = Eu, this._blendConstants[2] = ju, this._blendConstants[3] = su, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(uu, Eu, ju, su) {
        const Uu = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[Uu + 0] === uu && this._blendFunctionParameters[Uu + 1] === Eu && this._blendFunctionParameters[Uu + 2] === ju && this._blendFunctionParameters[Uu + 3] === su || (this._blendFunctionParameters[Uu + 0] = uu, this._blendFunctionParameters[Uu + 1] = Eu, this._blendFunctionParameters[Uu + 2] = ju, this._blendFunctionParameters[Uu + 3] = su, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(uu, Eu) {
        const ju = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[ju + 0] === uu && this._blendEquationParameters[ju + 1] === Eu || (this._blendEquationParameters[ju + 0] = uu, this._blendEquationParameters[ju + 1] = Eu, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== Eu && (this._numTargets = Eu, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== ju && (this._blendDisabledTargetsMask = ju, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (uu.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === Eu || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (Eu > 1 && 0 !== ju && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & ju) ? uu.enable(uu.BLEND) : uu.disable(uu.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (uu.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (uu.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const su = uu;
        if (this._isAlphaBlendDirty) {
          for (let Uu = 0; Uu < Eu; Uu++) {
            const Eu = Uu < this._numTargetEnabled ? Uu : 0;
            this._alphaBlend[Eu] && 0 === (ju & 1 << Uu) ? su.enableIndexed(uu.BLEND, Uu) : su.disableIndexed(uu.BLEND, Uu)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let uu = 0; uu < Eu; uu++) {
            const Eu = uu < this._numTargetEnabled ? 4 * uu : 0;
            su.blendFuncSeparateIndexed(uu, this._blendFunctionParameters[Eu + 0], this._blendFunctionParameters[Eu + 1], this._blendFunctionParameters[Eu + 2], this._blendFunctionParameters[Eu + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let uu = 0; uu < Eu; uu++) {
            const Eu = uu < this._numTargetEnabled ? 2 * uu : 0;
            su.blendEquationSeparateIndexed(uu, this._blendEquationParameters[Eu + 0], this._blendEquationParameters[Eu + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(uu, Eu) {
        let ju = 32774;
        switch (uu) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, Eu);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, Eu);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, Eu);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, Eu);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, Eu);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, Eu);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, Eu);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, Eu);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, Eu);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, Eu);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, Eu);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, Eu);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, Eu);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, Eu);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, Eu);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, Eu);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, Eu), ju = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, Eu), ju = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, Eu);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, Eu)
        }
        this.setAlphaEquationParameters(ju, ju, Eu)
      }
    }
  },
  40448: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => su
    });
    class su {}
    su._IsPickingAvailable = !1
  },
  40350: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => lj,
      f: () => Zj
    });
    var su = ju(40356),
      Uu = ju(40164),
      Zu = ju(40170),
      Xu = ju(37514),
      lu = ju(40366);
    class qu {
      constructor() {
        this._count = 0, this._data = {}
      }
      yJ(uu) {
        this.clear(), uu.forEach(((uu, Eu) => this.add(uu, Eu)))
      }
      get(uu) {
        const Eu = this._data[uu];
        if (void 0 !== Eu) return Eu
      }
      getOrAddWithFactory(uu, Eu) {
        let ju = this.get(uu);
        return void 0 !== ju || (ju = Eu(uu), ju && this.add(uu, ju)), ju
      }
      getOrAdd(uu, Eu) {
        const ju = this.get(uu);
        return void 0 !== ju ? ju : (this.add(uu, Eu), Eu)
      }
      contains(uu) {
        return void 0 !== this._data[uu]
      }
      add(uu, Eu) {
        return void 0 === this._data[uu] && (this._data[uu] = Eu, ++this._count, !0)
      }
      set(uu, Eu) {
        return void 0 !== this._data[uu] && (this._data[uu] = Eu, !0)
      }
      getAndRemove(uu) {
        const Eu = this.get(uu);
        return void 0 !== Eu ? (delete this._data[uu], --this._count, Eu) : null
      }
      remove(uu) {
        return !!this.contains(uu) && (delete this._data[uu], --this._count, !0)
      }
      clear() {
        this._data = {}, this._count = 0
      }
      get count() {
        return this._count
      }
      forEach(uu) {
        for (const Eu in this._data) {
          uu(Eu, this._data[Eu])
        }
      }
      first(uu) {
        for (const Eu in this._data) {
          const ju = uu(Eu, this._data[Eu]);
          if (ju) return ju
        }
        return null
      }
    }
    var fu = ju(40281),
      Cu = ju(37494),
      bu = ju(40373),
      cu = ju(40390),
      Nu = ju(40393);
    class Ou {
      constructor(uu, Eu, ju, su, Uu, Zu) {
        this.source = uu, this.pointerX = Eu, this.pointerY = ju, this.meshUnderPointer = su, this.sourceEvent = Uu, this.additionalData = Zu
      }
      static CreateNew(uu, Eu, ju) {
        const su = uu.hV();
        return new Ou(uu, su.pointerX, su.pointerY, su.meshUnderPointer || uu, Eu, ju)
      }
      static CreateNewFromSprite(uu, Eu, ju, su) {
        return new Ou(uu, Eu.pointerX, Eu.pointerY, Eu.meshUnderPointer, ju, su)
      }
      static CreateNewFromScene(uu, Eu) {
        return new Ou(null, uu.pointerX, uu.pointerY, uu.meshUnderPointer, Eu)
      }
      static CreateNewFromPrimitive(uu, Eu, ju, su) {
        return new Ou(uu, Eu.x, Eu.y, null, ju, su)
      }
    }
    var Yu = ju(40403),
      hu = ju(40412),
      Du = ju(40417),
      gu = ju(40422),
      Mu = ju(40138),
      eu = ju(37506),
      Gu = ju(40153),
      pu = ju(40430);
    class wu {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const uu in wu.Triggers)
          if (Object.prototype.hasOwnProperty.call(wu.Triggers, uu)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const uu in wu.Triggers)
          if (Object.prototype.hasOwnProperty.call(wu.Triggers, uu)) {
            const Eu = parseInt(uu);
            if (Eu >= 1 && Eu <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(uu) {
        for (const Eu in wu.Triggers)
          if (Object.prototype.hasOwnProperty.call(wu.Triggers, Eu)) {
            if (parseInt(Eu) === uu) return !0
          } return !1
      }
    }
    wu.Triggers = {};
    var Ju, du, au, Pu, ou, ku, mu, vu = ju(40434);
    ! function(uu) {
      uu[uu.Generic = 0] = "Generic", uu[uu.Keyboard = 1] = "Keyboard", uu[uu.Mouse = 2] = "Mouse", uu[uu.Touch = 3] = "Touch", uu[uu.DualShock = 4] = "DualShock", uu[uu.Xbox = 5] = "Xbox", uu[uu.Switch = 6] = "Switch", uu[uu.DualSense = 7] = "DualSense"
    }(Ju || (Ju = {})),
    function(uu) {
      uu[uu.Horizontal = 0] = "Horizontal", uu[uu.Vertical = 1] = "Vertical", uu[uu.LeftClick = 2] = "LeftClick", uu[uu.MiddleClick = 3] = "MiddleClick", uu[uu.RightClick = 4] = "RightClick", uu[uu.BrowserBack = 5] = "BrowserBack", uu[uu.BrowserForward = 6] = "BrowserForward", uu[uu.MouseWheelX = 7] = "MouseWheelX", uu[uu.MouseWheelY = 8] = "MouseWheelY", uu[uu.MouseWheelZ = 9] = "MouseWheelZ", uu[uu.Move = 12] = "Move"
    }(du || (du = {})),
    function(uu) {
      uu[uu.Horizontal = 0] = "Horizontal", uu[uu.Vertical = 1] = "Vertical", uu[uu.LeftClick = 2] = "LeftClick", uu[uu.MiddleClick = 3] = "MiddleClick", uu[uu.RightClick = 4] = "RightClick", uu[uu.BrowserBack = 5] = "BrowserBack", uu[uu.BrowserForward = 6] = "BrowserForward", uu[uu.MouseWheelX = 7] = "MouseWheelX", uu[uu.MouseWheelY = 8] = "MouseWheelY", uu[uu.MouseWheelZ = 9] = "MouseWheelZ", uu[uu.DeltaHorizontal = 10] = "DeltaHorizontal", uu[uu.DeltaVertical = 11] = "DeltaVertical"
    }(au || (au = {})),
    function(uu) {
      uu[uu.Cross = 0] = "Cross", uu[uu.Circle = 1] = "Circle", uu[uu.Square = 2] = "Square", uu[uu.Triangle = 3] = "Triangle", uu[uu.L1 = 4] = "L1", uu[uu.R1 = 5] = "R1", uu[uu.L2 = 6] = "L2", uu[uu.R2 = 7] = "R2", uu[uu.Share = 8] = "Share", uu[uu.Options = 9] = "Options", uu[uu.L3 = 10] = "L3", uu[uu.R3 = 11] = "R3", uu[uu.DPadUp = 12] = "DPadUp", uu[uu.DPadDown = 13] = "DPadDown", uu[uu.DPadLeft = 14] = "DPadLeft", uu[uu.DPadRight = 15] = "DPadRight", uu[uu.Home = 16] = "Home", uu[uu.TouchPad = 17] = "TouchPad", uu[uu.LStickXAxis = 18] = "LStickXAxis", uu[uu.LStickYAxis = 19] = "LStickYAxis", uu[uu.RStickXAxis = 20] = "RStickXAxis", uu[uu.RStickYAxis = 21] = "RStickYAxis"
    }(Pu || (Pu = {})),
    function(uu) {
      uu[uu.Cross = 0] = "Cross", uu[uu.Circle = 1] = "Circle", uu[uu.Square = 2] = "Square", uu[uu.Triangle = 3] = "Triangle", uu[uu.L1 = 4] = "L1", uu[uu.R1 = 5] = "R1", uu[uu.L2 = 6] = "L2", uu[uu.R2 = 7] = "R2", uu[uu.Create = 8] = "Create", uu[uu.Options = 9] = "Options", uu[uu.L3 = 10] = "L3", uu[uu.R3 = 11] = "R3", uu[uu.DPadUp = 12] = "DPadUp", uu[uu.DPadDown = 13] = "DPadDown", uu[uu.DPadLeft = 14] = "DPadLeft", uu[uu.DPadRight = 15] = "DPadRight", uu[uu.Home = 16] = "Home", uu[uu.TouchPad = 17] = "TouchPad", uu[uu.LStickXAxis = 18] = "LStickXAxis", uu[uu.LStickYAxis = 19] = "LStickYAxis", uu[uu.RStickXAxis = 20] = "RStickXAxis", uu[uu.RStickYAxis = 21] = "RStickYAxis"
    }(ou || (ou = {})),
    function(uu) {
      uu[uu.A = 0] = "A", uu[uu.B = 1] = "B", uu[uu.X = 2] = "X", uu[uu.Y = 3] = "Y", uu[uu.LB = 4] = "LB", uu[uu.RB = 5] = "RB", uu[uu.LT = 6] = "LT", uu[uu.RT = 7] = "RT", uu[uu.Back = 8] = "Back", uu[uu.Start = 9] = "Start", uu[uu.LS = 10] = "LS", uu[uu.RS = 11] = "RS", uu[uu.DPadUp = 12] = "DPadUp", uu[uu.DPadDown = 13] = "DPadDown", uu[uu.DPadLeft = 14] = "DPadLeft", uu[uu.DPadRight = 15] = "DPadRight", uu[uu.Home = 16] = "Home", uu[uu.LStickXAxis = 17] = "LStickXAxis", uu[uu.LStickYAxis = 18] = "LStickYAxis", uu[uu.RStickXAxis = 19] = "RStickXAxis", uu[uu.RStickYAxis = 20] = "RStickYAxis"
    }(ku || (ku = {})),
    function(uu) {
      uu[uu.B = 0] = "B", uu[uu.A = 1] = "A", uu[uu.Y = 2] = "Y", uu[uu.X = 3] = "X", uu[uu.L = 4] = "L", uu[uu.R = 5] = "R", uu[uu.ZL = 6] = "ZL", uu[uu.ZR = 7] = "ZR", uu[uu.Minus = 8] = "Minus", uu[uu.Plus = 9] = "Plus", uu[uu.LS = 10] = "LS", uu[uu.RS = 11] = "RS", uu[uu.DPadUp = 12] = "DPadUp", uu[uu.DPadDown = 13] = "DPadDown", uu[uu.DPadLeft = 14] = "DPadLeft", uu[uu.DPadRight = 15] = "DPadRight", uu[uu.Home = 16] = "Home", uu[uu.Capture = 17] = "Capture", uu[uu.LStickXAxis = 18] = "LStickXAxis", uu[uu.LStickYAxis = 19] = "LStickYAxis", uu[uu.RStickXAxis = 20] = "RStickXAxis", uu[uu.RStickYAxis = 21] = "RStickYAxis"
    }(mu || (mu = {}));
    var Ku = ju(40442);
    class Vu {
      static CreateDeviceEvent(uu, Eu, ju, su, Uu, Zu, Xu) {
        switch (uu) {
          case Ju.Keyboard:
            return this._CreateKeyboardEvent(ju, su, Uu, Zu);
          case Ju.Mouse:
            if (ju === du.MouseWheelX || ju === du.MouseWheelY || ju === du.MouseWheelZ) return this._CreateWheelEvent(uu, Eu, ju, su, Uu, Zu);
          case Ju.Touch:
            return this._CreatePointerEvent(uu, Eu, ju, su, Uu, Zu, Xu);
          default:
            throw `Unable to generate event for device ${Ju[uu]}`
        }
      }
      static _CreatePointerEvent(uu, Eu, ju, su, Uu, Zu, Xu) {
        const lu = this._CreateMouseEvent(uu, Eu, ju, su, Uu, Zu);
        uu === Ju.Mouse ? (lu.deviceType = Ju.Mouse, lu.pointerId = 1, lu.pointerType = "mouse") : (lu.deviceType = Ju.Touch, lu.pointerId = Xu ?? Eu, lu.pointerType = "touch");
        let qu = 0;
        return qu += Uu.pollInput(uu, Eu, du.LeftClick), qu += 2 * Uu.pollInput(uu, Eu, du.RightClick), qu += 4 * Uu.pollInput(uu, Eu, du.MiddleClick), lu.buttons = qu, ju === du.Move ? lu.type = "pointermove" : ju >= du.LeftClick && ju <= du.RightClick && (lu.type = 1 === su ? "pointerdown" : "pointerup", lu.button = ju - 2), lu
      }
      static _CreateWheelEvent(uu, Eu, ju, su, Uu, Zu) {
        const Xu = this._CreateMouseEvent(uu, Eu, ju, su, Uu, Zu);
        switch (Xu.pointerId = 1, Xu.type = "wheel", Xu.deltaMode = Ku.d.DOM_DELTA_PIXEL, Xu.deltaX = 0, Xu.deltaY = 0, Xu.deltaZ = 0, ju) {
          case du.MouseWheelX:
            Xu.deltaX = su;
            break;
          case du.MouseWheelY:
            Xu.deltaY = su;
            break;
          case du.MouseWheelZ:
            Xu.deltaZ = su
        }
        return Xu
      }
      static _CreateMouseEvent(uu, Eu, ju, su, Uu, Zu) {
        const Xu = this._CreateEvent(Zu),
          lu = Uu.pollInput(uu, Eu, du.Horizontal),
          qu = Uu.pollInput(uu, Eu, du.Vertical);
        return Zu ? (Xu.movementX = 0, Xu.movementY = 0, Xu.offsetX = Xu.movementX - Zu.getBoundingClientRect().x, Xu.offsetY = Xu.movementY - Zu.getBoundingClientRect().y) : (Xu.movementX = Uu.pollInput(uu, Eu, 10), Xu.movementY = Uu.pollInput(uu, Eu, 11), Xu.offsetX = 0, Xu.offsetY = 0), this._CheckNonCharacterKeys(Xu, Uu), Xu.clientX = lu, Xu.clientY = qu, Xu.x = lu, Xu.y = qu, Xu.deviceType = uu, Xu.deviceSlot = Eu, Xu.inputIndex = ju, Xu
      }
      static _CreateKeyboardEvent(uu, Eu, ju, su) {
        const Uu = this._CreateEvent(su);
        return this._CheckNonCharacterKeys(Uu, ju), Uu.deviceType = Ju.Keyboard, Uu.deviceSlot = 0, Uu.inputIndex = uu, Uu.type = 1 === Eu ? "keydown" : "keyup", Uu.key = String.fromCharCode(uu), Uu.keyCode = uu, Uu
      }
      static _CheckNonCharacterKeys(uu, Eu) {
        const ju = Eu.isDeviceAvailable(Ju.Keyboard),
          su = ju && 1 === Eu.pollInput(Ju.Keyboard, 0, 18),
          Uu = ju && 1 === Eu.pollInput(Ju.Keyboard, 0, 17),
          Zu = ju && (1 === Eu.pollInput(Ju.Keyboard, 0, 91) || 1 === Eu.pollInput(Ju.Keyboard, 0, 92) || 1 === Eu.pollInput(Ju.Keyboard, 0, 93)),
          Xu = ju && 1 === Eu.pollInput(Ju.Keyboard, 0, 16);
        uu.altKey = su, uu.ctrlKey = Uu, uu.metaKey = Zu, uu.shiftKey = Xu
      }
      static _CreateEvent(uu) {
        const Eu = {
          preventDefault: () => {}
        };
        return Eu.target = uu, Eu
      }
    }
    class ru {
      constructor(uu, Eu, ju) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(uu, Eu, ((uu, Eu, su, Uu) => {
          const Zu = Vu.CreateDeviceEvent(uu, Eu, su, Uu, this);
          ju(uu, Eu, Zu)
        })) : this._createDummyNativeInput()
      }
      pollInput(uu, Eu, ju) {
        return this._nativeInput.pollInput(uu, Eu, ju)
      }
      isDeviceAvailable(uu) {
        return uu === Ju.Mouse || uu === Ju.Touch
      }
      dispose() {
        this._nativeInput.dispose()
      }
      _createDummyNativeInput() {
        return {
          pollInput: () => 0,
          isDeviceAvailable: () => !1,
          dispose: () => {}
        }
      }
    }
    const Qu = Object.keys(du).length / 2;
    class iu {
      constructor(uu, Eu, ju, Uu) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = su.h.IsSafari(), this._usingMacOs = (0, Mu.i)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = uu => {}, this._keyboardUpEvent = uu => {}, this._keyboardBlurEvent = uu => {}, this._pointerMoveEvent = uu => {}, this._pointerDownEvent = uu => {}, this._pointerUpEvent = uu => {}, this._pointerCancelEvent = uu => {}, this._pointerCancelTouch = uu => {}, this._pointerLeaveEvent = uu => {}, this._pointerWheelEvent = uu => {}, this._pointerBlurEvent = uu => {}, this._pointerMacOsChromeOutEvent = uu => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, Mu.i)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, Mu.i)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = uu => {}, this._gamepadDisconnectedEvent = uu => {}, this._eventPrefix = su.h.GetPointerPrefix(uu), this._engine = uu, this._onDeviceConnected = Eu, this._onDeviceDisconnected = ju, this._onInputChanged = Uu, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(uu, Eu, ju) {
        const Uu = this._inputs[uu][Eu];
        if (!Uu) throw `Unable to find device ${Ju[uu]}`;
        uu >= Ju.DualShock && uu <= Ju.DualSense && this._updateDevice(uu, Eu, ju);
        const Zu = Uu[ju];
        if (void 0 === Zu) throw `Unable to find input ${ju} for device ${Ju[uu]} in slot ${Eu}`;
        return ju === du.Move && su.h.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), Zu
      }
      isDeviceAvailable(uu) {
        return void 0 !== this._inputs[uu]
      }
      dispose() {
        this._onDeviceConnected = () => {}, this._onDeviceDisconnected = () => {}, this._onInputChanged = () => {}, delete this._engine._onEngineViewChanged, this._elementToAttachTo && this._disableEvents()
      }
      _enableEvents() {
        const uu = this?._engine.getInputElement();
        if (uu && (!this._eventsAttached || this._elementToAttachTo !== uu)) {
          if (this._disableEvents(), this._inputs)
            for (const uu of this._inputs)
              if (uu)
                for (const Eu in uu) {
                  const ju = uu[+Eu];
                  if (ju)
                    for (let uu = 0; uu < ju.length; uu++) ju[uu] = 0
                }
          this._elementToAttachTo = uu, this._elementToAttachTo.tabIndex = -1 !== this._elementToAttachTo.tabIndex ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex, this._handleKeyActions(), this._handlePointerActions(), this._handleGamepadActions(), this._eventsAttached = !0, this._checkForConnectedDevices()
        }
      }
      _disableEvents() {
        this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent), this._usingMacOs && this._isUsingChromium && this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent), window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent), window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)), this._pointerInputClearObserver && this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver), this._eventsAttached = !1
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const uu = navigator.getGamepads();
          for (const Eu of uu) Eu && this._addGamePad(Eu)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(Ju.Mouse, 0, 0, 0)
      }
      _addGamePad(uu) {
        const Eu = this._getGamepadDeviceType(uu.id),
          ju = uu.index;
        this._gamepads = this._gamepads || new Array(uu.index + 1), this._registerDevice(Eu, ju, uu.buttons.length + uu.axes.length), this._gamepads[ju] = Eu
      }
      _addPointerDevice(uu, Eu, ju, su) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(uu, Eu, Qu);
        const Uu = this._inputs[uu][Eu];
        Uu[0] = ju, Uu[1] = su
      }
      _registerDevice(uu, Eu, ju) {
        if (void 0 === Eu) throw `Unable to register device ${Ju[uu]} to undefined slot.`;
        if (this._inputs[uu] || (this._inputs[uu] = {}), !this._inputs[uu][Eu]) {
          const su = new Array(ju);
          su.fill(0), this._inputs[uu][Eu] = su, this._onDeviceConnected(uu, Eu)
        }
      }
      _unregisterDevice(uu, Eu) {
        this._inputs[uu][Eu] && (delete this._inputs[uu][Eu], this._onDeviceDisconnected(uu, Eu))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = uu => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(Ju.Keyboard, 0, 255));
          const Eu = this._inputs[Ju.Keyboard][0];
          if (Eu) {
            Eu[uu.keyCode] = 1;
            const ju = uu;
            ju.inputIndex = uu.keyCode, this._usingMacOs && uu.metaKey && "Meta" !== uu.key && (this._metaKeys.includes(uu.keyCode) || this._metaKeys.push(uu.keyCode)), this._onInputChanged(Ju.Keyboard, 0, ju)
          }
        }, this._keyboardUpEvent = uu => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(Ju.Keyboard, 0, 255));
          const Eu = this._inputs[Ju.Keyboard][0];
          if (Eu) {
            Eu[uu.keyCode] = 0;
            const ju = uu;
            if (ju.inputIndex = uu.keyCode, this._usingMacOs && "Meta" === uu.key && this._metaKeys.length > 0) {
              for (const uu of this._metaKeys) {
                const ju = Vu.CreateDeviceEvent(Ju.Keyboard, 0, uu, 0, this, this._elementToAttachTo);
                Eu[uu] = 0, this._onInputChanged(Ju.Keyboard, 0, ju)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(Ju.Keyboard, 0, ju)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const uu = this._inputs[Ju.Keyboard][0];
            for (let Eu = 0; Eu < uu.length; Eu++)
              if (0 !== uu[Eu]) {
                uu[Eu] = 0;
                const ju = Vu.CreateDeviceEvent(Ju.Keyboard, 0, Eu, 0, this, this._elementToAttachTo);
                this._onInputChanged(Ju.Keyboard, 0, ju)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, Mu.i)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let su = 0; su < this._maxTouchPoints; su++) this._activeTouchIds[su] = -1;
        this._pointerMoveEvent = uu => {
          const Eu = this._getPointerType(uu);
          let ju = Eu === Ju.Mouse ? 0 : this._activeTouchIds.indexOf(uu.pointerId);
          if (Eu === Ju.Touch && -1 === ju) {
            if (0 === uu.buttons) return;
            const Uu = this._activeTouchIds.indexOf(-1);
            if (!(Uu >= 0)) return void su.h.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            ju = Uu, this._activeTouchIds[Uu] = uu.pointerId, this._onDeviceConnected(Eu, ju)
          }
          this._inputs[Eu] || (this._inputs[Eu] = {}), this._inputs[Eu][ju] || this._addPointerDevice(Eu, ju, uu.clientX, uu.clientY);
          const Uu = this._inputs[Eu][ju];
          if (Uu) {
            const su = uu;
            su.inputIndex = du.Move, Uu[du.Horizontal] = uu.clientX, Uu[du.Vertical] = uu.clientY, Eu === Ju.Touch && 0 === Uu[du.LeftClick] && (Uu[du.LeftClick] = 1), void 0 === uu.pointerId && (uu.pointerId = this._mouseId), this._onInputChanged(Eu, ju, su), this._usingSafari || -1 === uu.button || (su.inputIndex = uu.button + 2, Uu[uu.button + 2] = Uu[uu.button + 2] ? 0 : 1, this._onInputChanged(Eu, ju, su))
          }
        }, this._pointerDownEvent = uu => {
          const Eu = this._getPointerType(uu);
          let ju = Eu === Ju.Mouse ? 0 : uu.pointerId;
          if (Eu === Ju.Touch) {
            let Eu = this._activeTouchIds.indexOf(uu.pointerId);
            if (-1 === Eu && (Eu = this._activeTouchIds.indexOf(-1)), !(Eu >= 0)) return void su.h.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            ju = Eu, this._activeTouchIds[Eu] = uu.pointerId
          }
          this._inputs[Eu] || (this._inputs[Eu] = {}), this._inputs[Eu][ju] ? Eu === Ju.Touch && this._onDeviceConnected(Eu, ju) : this._addPointerDevice(Eu, ju, uu.clientX, uu.clientY);
          const Uu = this._inputs[Eu][ju];
          if (Uu) {
            const su = Uu[du.Horizontal],
              Xu = Uu[du.Vertical];
            if (Eu === Ju.Mouse) {
              if (void 0 === uu.pointerId && (uu.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (Zu) {}
            } else if (uu.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(uu.pointerId)
            } catch (Zu) {}
            Uu[du.Horizontal] = uu.clientX, Uu[du.Vertical] = uu.clientY, Uu[uu.button + 2] = 1;
            const lu = uu;
            lu.inputIndex = uu.button + 2, this._onInputChanged(Eu, ju, lu), su === uu.clientX && Xu === uu.clientY || (lu.inputIndex = du.Move, this._onInputChanged(Eu, ju, lu))
          }
        }, this._pointerUpEvent = uu => {
          const Eu = this._getPointerType(uu),
            ju = Eu === Ju.Mouse ? 0 : this._activeTouchIds.indexOf(uu.pointerId);
          if (Eu === Ju.Touch) {
            if (-1 === ju) return;
            this._activeTouchIds[ju] = -1
          }
          const su = this._inputs[Eu]?.[ju];
          let Uu = uu.button,
            Zu = su && 0 !== su[Uu + 2];
          if (!Zu && this._isUsingFirefox && this._usingMacOs && su && (Uu = 2 === Uu ? 0 : 2, Zu = 0 !== su[Uu + 2]), Zu) {
            const Zu = su[du.Horizontal],
              Xu = su[du.Vertical];
            su[du.Horizontal] = uu.clientX, su[du.Vertical] = uu.clientY, su[Uu + 2] = 0;
            const lu = uu;
            void 0 === uu.pointerId && (uu.pointerId = this._mouseId), Zu === uu.clientX && Xu === uu.clientY || (lu.inputIndex = du.Move, this._onInputChanged(Eu, ju, lu)), lu.inputIndex = Uu + 2, Eu === Ju.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : uu.pointerId && this._elementToAttachTo.hasPointerCapture?.(uu.pointerId) && this._elementToAttachTo.releasePointerCapture(uu.pointerId), this._onInputChanged(Eu, ju, lu), Eu === Ju.Touch && this._onDeviceDisconnected(Eu, ju)
          }
        }, this._pointerCancelTouch = uu => {
          const Eu = this._activeTouchIds.indexOf(uu);
          if (-1 === Eu) return;
          this._elementToAttachTo.hasPointerCapture?.(uu) && this._elementToAttachTo.releasePointerCapture(uu), this._inputs[Ju.Touch][Eu][du.LeftClick] = 0;
          const ju = Vu.CreateDeviceEvent(Ju.Touch, Eu, du.LeftClick, 0, this, this._elementToAttachTo, uu);
          this._onInputChanged(Ju.Touch, Eu, ju), this._activeTouchIds[Eu] = -1, this._onDeviceDisconnected(Ju.Touch, Eu)
        }, this._pointerCancelEvent = uu => {
          if ("mouse" === uu.pointerType) {
            const uu = this._inputs[Ju.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let Eu = du.LeftClick; Eu <= du.BrowserForward; Eu++)
              if (1 === uu[Eu]) {
                uu[Eu] = 0;
                const ju = Vu.CreateDeviceEvent(Ju.Mouse, 0, Eu, 0, this, this._elementToAttachTo);
                this._onInputChanged(Ju.Mouse, 0, ju)
              }
          } else this._pointerCancelTouch(uu.pointerId)
        }, this._pointerLeaveEvent = uu => {
          "pen" === uu.pointerType && this._pointerCancelTouch(uu.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let uu = !1;
        const Eu = function() {};
        try {
          const ju = Object.defineProperty({}, "passive", {
            get: function() {
              uu = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", Eu, ju), this._elementToAttachTo.removeEventListener("test", Eu, ju)
        } catch (ju) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(Ju.Mouse)) {
            const uu = this._inputs[Ju.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let Eu = du.LeftClick; Eu <= du.BrowserForward; Eu++)
              if (1 === uu[Eu]) {
                uu[Eu] = 0;
                const ju = Vu.CreateDeviceEvent(Ju.Mouse, 0, Eu, 0, this, this._elementToAttachTo);
                this._onInputChanged(Ju.Mouse, 0, ju)
              }
          }
          if (this.isDeviceAvailable(Ju.Touch)) {
            const uu = this._inputs[Ju.Touch];
            for (let Eu = 0; Eu < this._activeTouchIds.length; Eu++) {
              const ju = this._activeTouchIds[Eu];
              if (this._elementToAttachTo.hasPointerCapture?.(ju) && this._elementToAttachTo.releasePointerCapture(ju), -1 !== ju && 1 === uu[Eu]?.[du.LeftClick]) {
                uu[Eu][du.LeftClick] = 0;
                const su = Vu.CreateDeviceEvent(Ju.Touch, Eu, du.LeftClick, 0, this, this._elementToAttachTo, ju);
                this._onInputChanged(Ju.Touch, Eu, su), this._activeTouchIds[Eu] = -1, this._onDeviceDisconnected(Ju.Touch, Eu)
              }
            }
          }
        }, this._pointerWheelEvent = uu => {
          const Eu = Ju.Mouse;
          this._inputs[Eu] || (this._inputs[Eu] = []), this._inputs[Eu][0] || (this._pointerActive = !0, this._registerDevice(Eu, 0, Qu));
          const ju = this._inputs[Eu][0];
          if (ju) {
            ju[du.MouseWheelX] = uu.deltaX || 0, ju[du.MouseWheelY] = uu.deltaY || uu.wheelDelta || 0, ju[du.MouseWheelZ] = uu.deltaZ || 0;
            const su = uu;
            void 0 === uu.pointerId && (uu.pointerId = this._mouseId), 0 !== ju[du.MouseWheelX] && (su.inputIndex = du.MouseWheelX, this._onInputChanged(Eu, 0, su)), 0 !== ju[du.MouseWheelY] && (su.inputIndex = du.MouseWheelY, this._onInputChanged(Eu, 0, su)), 0 !== ju[du.MouseWheelZ] && (su.inputIndex = du.MouseWheelZ, this._onInputChanged(Eu, 0, su))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = uu => {
          uu.buttons > 1 && this._pointerCancelEvent(uu)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!uu && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(Ju.Mouse)) {
            const uu = this._inputs[Ju.Mouse][0];
            uu[du.MouseWheelX] = 0, uu[du.MouseWheelY] = 0, uu[du.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = uu => {
          this._addGamePad(uu.gamepad)
        }, this._gamepadDisconnectedEvent = uu => {
          if (this._gamepads) {
            const Eu = this._getGamepadDeviceType(uu.gamepad.id),
              ju = uu.gamepad.index;
            this._unregisterDevice(Eu, ju), delete this._gamepads[ju]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(uu, Eu, ju) {
        const su = navigator.getGamepads()[Eu];
        if (su && uu === this._gamepads[Eu]) {
          const Uu = this._inputs[uu][Eu];
          ju >= su.buttons.length ? Uu[ju] = su.axes[ju - su.buttons.length].valueOf() : Uu[ju] = su.buttons[ju].value
        }
      }
      _getGamepadDeviceType(uu) {
        return -1 !== uu.indexOf("054c") ? -1 !== uu.indexOf("0ce6") ? Ju.DualSense : Ju.DualShock : -1 !== uu.indexOf("Xbox One") || -1 !== uu.search("Xbox 360") || -1 !== uu.search("xinput") || -1 !== uu.indexOf("045e") && -1 === uu.indexOf("Surface Dock") ? Ju.Xbox : -1 !== uu.indexOf("057e") ? Ju.Switch : Ju.Generic
      }
      _getPointerType(uu) {
        let Eu = Ju.Mouse;
        return ("touch" === uu.pointerType || "pen" === uu.pointerType || uu.touches) && (Eu = Ju.Touch), Eu
      }
    }
    class Wu {
      constructor(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = Eu, this.deviceSlot = ju, this.onInputChangedObservable = new Xu.d, this._deviceInputSystem = uu
      }
      getInput(uu) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, uu)
      }
    }
    class Su {
      constructor(uu) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = uu => {
          for (let Eu = 0; Eu < this._devices.length; Eu++) {
            const ju = this._devices[Eu];
            for (const su in ju) {
              const ju = +su;
              uu._addDevice(new Wu(this._deviceInputSystem, Eu, ju))
            }
          }
          this._registeredManagers.push(uu)
        }, this.unregisterManager = uu => {
          const Eu = this._registeredManagers.indexOf(uu);
          Eu > -1 && this._registeredManagers.splice(Eu, 1)
        };
        const Eu = Object.keys(Ju).length / 2;
        this._devices = new Array(Eu);
        const ju = (uu, Eu) => {
            this._devices[uu] || (this._devices[uu] = new Array), this._devices[uu][Eu] || (this._devices[uu][Eu] = Eu);
            for (const ju of this._registeredManagers) {
              const su = new Wu(this._deviceInputSystem, uu, Eu);
              ju._addDevice(su)
            }
          },
          su = (uu, Eu) => {
            this._devices[uu]?.[Eu] && delete this._devices[uu][Eu];
            for (const ju of this._registeredManagers) ju._removeDevice(uu, Eu)
          },
          Uu = (uu, Eu, ju) => {
            if (ju)
              for (const su of this._registeredManagers) su._onInputChanged(uu, Eu, ju)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new ru(ju, su, Uu) : this._deviceInputSystem = new iu(uu, ju, su, Uu)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class Iu {
      getDeviceSource(uu, Eu) {
        if (void 0 === Eu) {
          if (void 0 === this._firstDevice[uu]) return null;
          Eu = this._firstDevice[uu]
        }
        return this._devices[uu] && void 0 !== this._devices[uu][Eu] ? this._devices[uu][Eu] : null
      }
      getDeviceSources(uu) {
        return this._devices[uu] ? this._devices[uu].filter((uu => !!uu)) : []
      }
      constructor(uu) {
        const Eu = Object.keys(Ju).length / 2;
        this._devices = new Array(Eu), this._firstDevice = new Array(Eu), this._engine = uu, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new Su(uu)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new Xu.d((uu => {
          for (const Eu of this._devices)
            if (Eu)
              for (const ju of Eu) ju && this.onDeviceConnectedObservable.notifyObserver(uu, ju)
        })), this.onDeviceDisconnectedObservable = new Xu.d, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = uu.wV.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.wV.remove(this._onDisposeObserver)
      }
      _addDevice(uu) {
        this._devices[uu.deviceType] || (this._devices[uu.deviceType] = []), this._devices[uu.deviceType][uu.deviceSlot] || (this._devices[uu.deviceType][uu.deviceSlot] = uu, this._updateFirstDevices(uu.deviceType)), this.onDeviceConnectedObservable.notifyObservers(uu)
      }
      _removeDevice(uu, Eu) {
        const ju = this._devices[uu]?.[Eu];
        this.onDeviceDisconnectedObservable.notifyObservers(ju), this._devices[uu]?.[Eu] && delete this._devices[uu][Eu], this._updateFirstDevices(uu)
      }
      _onInputChanged(uu, Eu, ju) {
        this._devices[uu]?.[Eu]?.onInputChangedObservable.notifyObservers(ju)
      }
      _updateFirstDevices(uu) {
        switch (uu) {
          case Ju.Keyboard:
          case Ju.Mouse:
            this._firstDevice[uu] = 0;
            break;
          case Ju.Touch:
          case Ju.DualSense:
          case Ju.DualShock:
          case Ju.Xbox:
          case Ju.Switch:
          case Ju.Generic: {
            delete this._firstDevice[uu];
            const Eu = this._devices[uu];
            if (Eu)
              for (let ju = 0; ju < Eu.length; ju++)
                if (Eu[ju]) {
                  this._firstDevice[uu] = ju;
                  break
                } break
          }
        }
      }
    }
    var Fu = ju(40448);
    class Bu {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get BC() {
        return this._doubleClick
      }
      get hasSwiped() {
        return this._hasSwiped
      }
      get ignore() {
        return this._ignore
      }
      set singleClick(uu) {
        this._singleClick = uu
      }
      set BC(uu) {
        this._doubleClick = uu
      }
      set hasSwiped(uu) {
        this._hasSwiped = uu
      }
      set ignore(uu) {
        this._ignore = uu
      }
    }
    class Lu {
      constructor(uu) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new Cu.p(0, 0), this._previousStartingPointerPosition = new Cu.p(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = uu || eu.b.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(uu) {
        return this._meshUnderPointerId[uu] || null
      }
      get unTranslatedPointer() {
        return new Cu.p(this._unTranslatedPointerX, this._unTranslatedPointerY)
      }
      get pointerX() {
        return this._pointerX
      }
      set pointerX(uu) {
        this._pointerX = uu
      }
      get pointerY() {
        return this._pointerY
      }
      set pointerY(uu) {
        this._pointerY = uu
      }
      _updatePointerPosition(uu) {
        const Eu = this._scene.wO().getInputElementClientRect();
        Eu && (this._pointerX = uu.clientX - Eu.left, this._pointerY = uu.clientY - Eu.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(uu, Eu) {
        const ju = this._scene,
          su = ju.wO(),
          Uu = su.getInputElement();
        Uu && (Uu.tabIndex = su.canvasTabIndex, ju.doNotHandleCursors || (Uu.style.cursor = ju.defaultCursor)), this._setCursorAndPointerOverMesh(uu, Eu, ju);
        for (const lu of ju._pointerMoveStage) {
          uu = uu || this._pickMove(Eu);
          const ju = !!uu?.pickedMesh;
          uu = lu.action(this._unTranslatedPointerX, this._unTranslatedPointerY, uu, ju, Uu)
        }
        const Zu = Eu.inputIndex >= du.MouseWheelX && Eu.inputIndex <= du.MouseWheelZ ? pu.d.POINTERWHEEL : pu.d.POINTERMOVE;
        let Xu;
        ju.onPointerMove && (uu = uu || this._pickMove(Eu), ju.onPointerMove(Eu, uu, Zu)), uu ? (Xu = new pu.h(Zu, Eu, uu), this._setRayOnPointerInfo(uu, Eu)) : (Xu = new pu.h(Zu, Eu, null, this), this._movePointerInfo = Xu), ju.onPointerObservable.hasObservers() && ju.onPointerObservable.notifyObservers(Xu, Zu)
      }
      _setRayOnPointerInfo(uu, Eu) {
        const ju = this._scene;
        uu && Fu.d._IsPickingAvailable && (uu.ray || (uu.ray = ju.createPickingRay(Eu.offsetX, Eu.offsetY, Cu.e.Identity(), ju.activeCamera)))
      }
      _addCameraPointerObserver(uu, Eu) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(uu, Eu)
      }
      _removeCameraPointerObserver(uu) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(uu)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(uu, Eu, ju) {
        const su = this._scene,
          Uu = new pu.g(ju, Eu, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return uu && (Uu.originalPickingInfo = uu, Uu.ray = uu.ray, "xr-near" === Eu.pointerType && uu.originMesh && (Uu.nearInteractionPickingInfo = uu)), su.onPrePointerObservable.notifyObservers(Uu, ju), !!Uu.skipOnPointerObservable
      }
      _pickMove(uu) {
        const Eu = this._scene,
          ju = Eu.Hc(this._unTranslatedPointerX, this._unTranslatedPointerY, Eu.pointerMovePredicate, Eu.pointerMoveFastCheck, Eu.cameraToUseForPointers, Eu.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(ju, uu, Eu), ju
      }
      _updateMeshUnderPointer() {
        const uu = this._scene;
        if (!uu.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || uu.skipPointerMovePicking || !uu.cameraToUseForPointers && !uu.activeCamera) return;
        this._ensurePointerMovePredicate();
        const Eu = this._pointerX,
          ju = this._pointerY,
          su = this._unTranslatedPointerX,
          Uu = this._unTranslatedPointerY;
        for (const Zu of this._latestPointerMoveEvents.values()) this._pointerX = Zu.pointerX, this._pointerY = Zu.pointerY, this._unTranslatedPointerX = Zu.unTranslatedPointerX, this._unTranslatedPointerY = Zu.unTranslatedPointerY, this._pickMove(Zu.event);
        this._pointerX = Eu, this._pointerY = ju, this._unTranslatedPointerX = su, this._unTranslatedPointerY = Uu
      }
      _ensurePointerMovePredicate() {
        const uu = this._scene;
        uu.pointerMovePredicate || (uu.pointerMovePredicate = Eu => (Eu._isPointerMovePickable ?? Eu.VY) && Eu.isVisible && Eu.isReady() && Eu.isEnabled() && (Eu.enablePointerMoveEvents || uu.constantlyUpdateMeshUnderPointer || null !== Eu._getActionManagerForTrigger()) && (!uu.cameraToUseForPointers || 0 !== (uu.cameraToUseForPointers.layerMask & Eu.layerMask)))
      }
      _setCursorAndPointerOverMesh(uu, Eu, ju) {
        const su = ju.wO().getInputElement();
        if (uu?.pickedMesh) {
          if (this.setPointerOverMesh(uu.pickedMesh, Eu.pointerId, uu, Eu), !ju.doNotHandleCursors && su && this._pointerOverMesh) {
            const uu = this._pointerOverMesh._getActionManagerForTrigger();
            uu && uu.hasPointerTriggers && (su.style.cursor = uu.hoverCursor || ju.hoverCursor)
          }
        } else this.setPointerOverMesh(null, Eu.pointerId, uu, Eu)
      }
      simulatePointerMove(uu, Eu) {
        const ju = new PointerEvent("pointermove", Eu);
        ju.inputIndex = du.Move, this._checkPrePointerObservable(uu, ju, pu.d.POINTERMOVE) || this._processPointerMove(uu, ju)
      }
      simulatePointerDown(uu, Eu) {
        const ju = new PointerEvent("pointerdown", Eu);
        ju.inputIndex = ju.button + 2, this._checkPrePointerObservable(uu, ju, pu.d.POINTERDOWN) || this._processPointerDown(uu, ju)
      }
      _processPointerDown(uu, Eu) {
        const ju = this._scene;
        if (uu?.pickedMesh) {
          this._pickedDownMesh = uu.pickedMesh;
          const su = uu.pickedMesh._getActionManagerForTrigger();
          if (su) {
            if (su.hasPickTriggers) switch (su.processTrigger(5, new Ou(uu.pickedMesh, ju.pointerX, ju.pointerY, uu.pickedMesh, Eu, uu)), Eu.button) {
              case 0:
                su.processTrigger(2, new Ou(uu.pickedMesh, ju.pointerX, ju.pointerY, uu.pickedMesh, Eu, uu));
                break;
              case 1:
                su.processTrigger(4, new Ou(uu.pickedMesh, ju.pointerX, ju.pointerY, uu.pickedMesh, Eu, uu));
                break;
              case 2:
                su.processTrigger(3, new Ou(uu.pickedMesh, ju.pointerX, ju.pointerY, uu.pickedMesh, Eu, uu))
            }
            su.hasSpecificTrigger(8) && window.setTimeout((() => {
              const uu = ju.Hc(this._unTranslatedPointerX, this._unTranslatedPointerY, (uu => uu.VY && uu.isVisible && uu.isReady() && uu.actionManager && uu.actionManager.hasSpecificTrigger(8) && uu === this._pickedDownMesh), !1, ju.cameraToUseForPointers);
              uu?.pickedMesh && su && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > Lu.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, su.processTrigger(8, Ou.CreateNew(uu.pickedMesh, Eu)))
            }), Lu.LongPressDelay)
          }
        } else
          for (const Zu of ju._pointerDownStage) uu = Zu.action(this._unTranslatedPointerX, this._unTranslatedPointerY, uu, Eu, !1);
        let su;
        const Uu = pu.d.POINTERDOWN;
        uu ? (ju.onPointerDown && ju.onPointerDown(Eu, uu, Uu), su = new pu.h(Uu, Eu, uu), this._setRayOnPointerInfo(uu, Eu)) : su = new pu.h(Uu, Eu, null, this), ju.onPointerObservable.hasObservers() && ju.onPointerObservable.notifyObservers(su, Uu)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(uu, Eu, ju) {
        const su = new PointerEvent("pointerup", Eu);
        su.inputIndex = du.Move;
        const Uu = new Bu;
        ju ? Uu.BC = !0 : Uu.singleClick = !0, this._checkPrePointerObservable(uu, su, pu.d.POINTERUP) || this._processPointerUp(uu, su, Uu)
      }
      _processPointerUp(uu, Eu, ju) {
        const su = this._scene;
        if (uu?.pickedMesh) {
          if (this._pickedUpMesh = uu.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (su.onPointerPick && su.onPointerPick(Eu, uu), ju.singleClick && !ju.ignore && su.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const ju = pu.d.POINTERPICK,
              Uu = new pu.h(ju, Eu, uu);
            this._setRayOnPointerInfo(uu, Eu), su.onPointerObservable.notifyObservers(Uu, ju)
          }
          const Uu = uu.pickedMesh._getActionManagerForTrigger();
          if (Uu && !ju.ignore) {
            Uu.processTrigger(7, Ou.CreateNew(uu.pickedMesh, Eu, uu)), !ju.hasSwiped && ju.singleClick && Uu.processTrigger(1, Ou.CreateNew(uu.pickedMesh, Eu, uu));
            const su = uu.pickedMesh._getActionManagerForTrigger(6);
            ju.BC && su && su.processTrigger(6, Ou.CreateNew(uu.pickedMesh, Eu, uu))
          }
        } else if (!ju.ignore)
          for (const Uu of su._pointerUpStage) uu = Uu.action(this._unTranslatedPointerX, this._unTranslatedPointerY, uu, Eu, ju.BC);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const uu = this._pickedDownMesh._getActionManagerForTrigger(16);
          uu && uu.processTrigger(16, Ou.CreateNew(this._pickedDownMesh, Eu))
        }
        if (!ju.ignore) {
          const Uu = new pu.h(pu.d.POINTERUP, Eu, uu);
          if (this._setRayOnPointerInfo(uu, Eu), su.onPointerObservable.notifyObservers(Uu, pu.d.POINTERUP), su.onPointerUp && su.onPointerUp(Eu, uu, pu.d.POINTERUP), !ju.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let Uu = 0;
            if (ju.singleClick ? Uu = pu.d.POINTERTAP : ju.BC && (Uu = pu.d.POINTERDOUBLETAP), Uu) {
              const ju = new pu.h(Uu, Eu, uu);
              su.onPointerObservable.hasObservers() && su.onPointerObservable.hasSpecificMask(Uu) && su.onPointerObservable.notifyObservers(ju, Uu)
            }
          }
        }
      }
      isPointerCaptured() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._pointerCaptures[uu]
      }
      attachControl() {
        let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ju = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Uu = this._scene,
          Zu = Uu.wO();
        su || (su = Zu.getInputElement()), this._alreadyAttached && this.detachControl(), su && (this._alreadyAttachedTo = su), this._deviceSourceManager = new Iu(Zu), this._initActionManager = uu => {
          if (!this._meshPickProceed) {
            const Eu = Uu.skipPointerUpPicking || 0 === Uu._registeredActions && !this._checkForPicking() && !Uu.onPointerUp ? null : Uu.Hc(this._unTranslatedPointerX, this._unTranslatedPointerY, Uu.pointerUpPredicate, Uu.pointerUpFastCheck, Uu.cameraToUseForPointers, Uu.pointerUpTrianglePredicate);
            this._currentPickResult = Eu, Eu && (uu = Eu.hit && Eu.pickedMesh ? Eu.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return uu
        }, this._delayedSimpleClick = (uu, Eu, ju) => {
          if ((Date.now() - this._previousStartingPointerTime > Lu.DoubleClickDelay && !this._doubleClickOccured || uu !== this._previousButtonPressed) && (this._doubleClickOccured = !1, Eu.singleClick = !0, Eu.ignore = !1, this._delayedClicks[uu])) {
            const Eu = this._delayedClicks[uu].evt,
              ju = pu.d.POINTERTAP,
              su = new pu.h(ju, Eu, this._currentPickResult);
            Uu.onPointerObservable.hasObservers() && Uu.onPointerObservable.hasSpecificMask(ju) && Uu.onPointerObservable.notifyObservers(su, ju), this._delayedClicks[uu] = null
          }
        }, this._initClickEvent = (uu, Eu, ju, su) => {
          const Uu = new Bu;
          this._currentPickResult = null;
          let Zu = null,
            Xu = uu.hasSpecificMask(pu.d.POINTERPICK) || Eu.hasSpecificMask(pu.d.POINTERPICK) || uu.hasSpecificMask(pu.d.POINTERTAP) || Eu.hasSpecificMask(pu.d.POINTERTAP) || uu.hasSpecificMask(pu.d.POINTERDOUBLETAP) || Eu.hasSpecificMask(pu.d.POINTERDOUBLETAP);
          !Xu && wu && (Zu = this._initActionManager(Zu, Uu), Zu && (Xu = Zu.hasPickTriggers));
          let lu = !1;
          if (Xu = Xu && !this._isMultiTouchGesture, Xu) {
            const Xu = ju.button;
            if (Uu.hasSwiped = this._isPointerSwiping(), !Uu.hasSwiped) {
              let qu = !Lu.ExclusiveDoubleClickMode;
              if (qu || (qu = !uu.hasSpecificMask(pu.d.POINTERDOUBLETAP) && !Eu.hasSpecificMask(pu.d.POINTERDOUBLETAP), qu && !wu.HasSpecificTrigger(6) && (Zu = this._initActionManager(Zu, Uu), Zu && (qu = !Zu.hasSpecificTrigger(6)))), qu)(Date.now() - this._previousStartingPointerTime > Lu.DoubleClickDelay || Xu !== this._previousButtonPressed) && (Uu.singleClick = !0, su(Uu, this._currentPickResult), lu = !0);
              else {
                const uu = {
                  evt: ju,
                  clickInfo: Uu,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, Xu, Uu, su), Lu.DoubleClickDelay)
                };
                this._delayedClicks[Xu] = uu
              }
              let fu = uu.hasSpecificMask(pu.d.POINTERDOUBLETAP) || Eu.hasSpecificMask(pu.d.POINTERDOUBLETAP);
              !fu && wu.HasSpecificTrigger(6) && (Zu = this._initActionManager(Zu, Uu), Zu && (fu = Zu.hasSpecificTrigger(6))), fu && (Xu === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < Lu.DoubleClickDelay && !this._doubleClickOccured ? (Uu.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = Xu, Lu.ExclusiveDoubleClickMode ? (this._delayedClicks[Xu] && (clearTimeout(this._delayedClicks[Xu]?.timeoutId), this._delayedClicks[Xu] = null), su(Uu, this._previousPickResult)) : su(Uu, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, Uu.BC = !0, Uu.ignore = !1, Lu.ExclusiveDoubleClickMode && this._delayedClicks[Xu] && (clearTimeout(this._delayedClicks[Xu]?.timeoutId), this._delayedClicks[Xu] = null), su(Uu, this._currentPickResult)), lu = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = Xu))
            }
          }
          lu || su(Uu, this._currentPickResult)
        }, this._onPointerMove = uu => {
          if (this._updatePointerPosition(uu), this._latestPointerMoveEvents.set(uu.pointerId, {
              event: uu,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > Lu.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > Lu.DragMovementThreshold), Zu.isPointerLock && Zu._verifyPointerLock(), this._checkPrePointerObservable(null, uu, uu.inputIndex >= du.MouseWheelX && uu.inputIndex <= du.MouseWheelZ ? pu.d.POINTERWHEEL : pu.d.POINTERMOVE)) return;
          if (!Uu.cameraToUseForPointers && !Uu.activeCamera) return;
          if (Uu.skipPointerMovePicking) return void this._processPointerMove(new Nu.b, uu);
          this._ensurePointerMovePredicate();
          const Eu = Uu._registeredActions > 0 || Uu.constantlyUpdateMeshUnderPointer ? this._pickMove(uu) : null;
          this._processPointerMove(Eu, uu)
        }, this._onPointerDown = uu => {
          const Eu = this._activePointerIds.indexOf(-1);
          if (-1 === Eu ? this._activePointerIds.push(uu.pointerId) : this._activePointerIds[Eu] = uu.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, Lu.ExclusiveDoubleClickMode)
            for (let su = 0; su < this._delayedClicks.length; su++)
              if (this._delayedClicks[su])
                if (uu.button === su) clearTimeout(this._delayedClicks[su]?.timeoutId);
                else {
                  const uu = this._delayedClicks[su].clickInfo;
                  this._doubleClickOccured = !1, uu.singleClick = !0, uu.ignore = !1;
                  const Eu = this._delayedClicks[su].evt,
                    ju = pu.d.POINTERTAP,
                    Zu = new pu.h(ju, Eu, this._currentPickResult);
                  Uu.onPointerObservable.hasObservers() && Uu.onPointerObservable.hasSpecificMask(ju) && Uu.onPointerObservable.notifyObservers(Zu, ju), this._delayedClicks[su] = null
                } if (this._updatePointerPosition(uu), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = uu.button), Uu.preventDefaultOnPointerDown && su && (uu.preventDefault(), su.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, uu, pu.d.POINTERDOWN)) return;
          if (!Uu.cameraToUseForPointers && !Uu.activeCamera) return;
          let ju;
          this._pointerCaptures[uu.pointerId] = !0, Uu.pointerDownPredicate || (Uu.pointerDownPredicate = uu => uu.VY && uu.isVisible && uu.isReady() && uu.isEnabled() && (!Uu.cameraToUseForPointers || 0 !== (Uu.cameraToUseForPointers.layerMask & uu.layerMask))), this._pickedDownMesh = null, ju = Uu.skipPointerDownPicking || 0 === Uu._registeredActions && !this._checkForPicking() && !Uu.onPointerDown ? new Nu.b : Uu.Hc(this._unTranslatedPointerX, this._unTranslatedPointerY, Uu.pointerDownPredicate, Uu.pointerDownFastCheck, Uu.cameraToUseForPointers, Uu.pointerDownTrianglePredicate), this._processPointerDown(ju, uu)
        }, this._onPointerUp = uu => {
          const Eu = this._activePointerIds.indexOf(uu.pointerId); - 1 !== Eu && (this._activePointerIds[Eu] = -1, this._activePointerIdsCount--, "touch" === uu.pointerType && this._latestPointerMoveEvents.delete(uu.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(uu), Uu.preventDefaultOnPointerUp && su && (uu.preventDefault(), su.focus()), this._initClickEvent(Uu.onPrePointerObservable, Uu.onPointerObservable, uu, ((Eu, ju) => {
            if (Uu.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !Eu.ignore)) {
              if (this._checkPrePointerObservable(null, uu, pu.d.POINTERUP)) return this._swipeButtonPressed === uu.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === uu.buttons && (this._pointerCaptures[uu.pointerId] = !1));
              Eu.hasSwiped || (Eu.singleClick && Uu.onPrePointerObservable.hasSpecificMask(pu.d.POINTERTAP) && this._checkPrePointerObservable(null, uu, pu.d.POINTERTAP) && (this._skipPointerTap = !0), Eu.BC && Uu.onPrePointerObservable.hasSpecificMask(pu.d.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, uu, pu.d.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[uu.pointerId] ? (0 === uu.buttons && (this._pointerCaptures[uu.pointerId] = !1), (Uu.cameraToUseForPointers || Uu.activeCamera) && (Uu.pointerUpPredicate || (Uu.pointerUpPredicate = uu => uu.VY && uu.isVisible && uu.isReady() && uu.isEnabled() && (!Uu.cameraToUseForPointers || 0 !== (Uu.cameraToUseForPointers.layerMask & uu.layerMask))), !this._meshPickProceed && (wu && wu.HasTriggers || this._checkForPicking() || Uu.onPointerUp) && this._initActionManager(null, Eu), ju || (ju = this._currentPickResult), this._processPointerUp(ju, uu, Eu), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === uu.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === uu.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = uu => {
          const Eu = vu.b.KEYDOWN;
          if (Uu.onPreKeyboardObservable.hasObservers()) {
            const ju = new vu.c(Eu, uu);
            if (Uu.onPreKeyboardObservable.notifyObservers(ju, Eu), ju.skipOnKeyboardObservable) return
          }
          if (Uu.onKeyboardObservable.hasObservers()) {
            const ju = new vu.d(Eu, uu);
            Uu.onKeyboardObservable.notifyObservers(ju, Eu)
          }
          Uu.actionManager && Uu.actionManager.processTrigger(14, Ou.CreateNewFromScene(Uu, uu))
        }, this._onKeyUp = uu => {
          const Eu = vu.b.KEYUP;
          if (Uu.onPreKeyboardObservable.hasObservers()) {
            const ju = new vu.c(Eu, uu);
            if (Uu.onPreKeyboardObservable.notifyObservers(ju, Eu), ju.skipOnKeyboardObservable) return
          }
          if (Uu.onKeyboardObservable.hasObservers()) {
            const ju = new vu.d(Eu, uu);
            Uu.onKeyboardObservable.notifyObservers(ju, Eu)
          }
          Uu.actionManager && Uu.actionManager.processTrigger(15, Ou.CreateNewFromScene(Uu, uu))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((su => {
          su.deviceType === Ju.Mouse ? su.onInputChangedObservable.add((Uu => {
            this._originMouseEvent = Uu, Uu.inputIndex === du.LeftClick || Uu.inputIndex === du.MiddleClick || Uu.inputIndex === du.RightClick || Uu.inputIndex === du.BrowserBack || Uu.inputIndex === du.BrowserForward ? Eu && 1 === su.getInput(Uu.inputIndex) ? this._onPointerDown(Uu) : uu && 0 === su.getInput(Uu.inputIndex) && this._onPointerUp(Uu) : ju && (Uu.inputIndex === du.Move ? this._onPointerMove(Uu) : Uu.inputIndex !== du.MouseWheelX && Uu.inputIndex !== du.MouseWheelY && Uu.inputIndex !== du.MouseWheelZ || this._onPointerMove(Uu))
          })) : su.deviceType === Ju.Touch ? su.onInputChangedObservable.add((Uu => {
            Uu.inputIndex === du.LeftClick && (Eu && 1 === su.getInput(Uu.inputIndex) ? (this._onPointerDown(Uu), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : uu && 0 === su.getInput(Uu.inputIndex) && (this._onPointerUp(Uu), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), ju && Uu.inputIndex === du.Move && this._onPointerMove(Uu)
          })) : su.deviceType === Ju.Keyboard && su.onInputChangedObservable.add((uu => {
            "keydown" === uu.type ? this._onKeyDown(uu) : "keyup" === uu.type && this._onKeyUp(uu)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ju = arguments.length > 2 ? arguments[2] : void 0,
          su = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[Eu] === uu && (!uu || !uu._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const Uu = this._meshUnderPointerId[Eu];
        let Zu;
        Uu && (Zu = Uu._getActionManagerForTrigger(10), Zu && Zu.processTrigger(10, new Ou(Uu, this._pointerX, this._pointerY, uu, su, {
          pointerId: Eu
        }))), uu ? (this._meshUnderPointerId[Eu] = uu, this._pointerOverMesh = uu, Zu = uu._getActionManagerForTrigger(9), Zu && Zu.processTrigger(9, new Ou(uu, this._pointerX, this._pointerY, uu, su, {
          pointerId: Eu,
          pickResult: ju
        }))) : (delete this._meshUnderPointerId[Eu], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: uu,
          pointerId: Eu
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(uu) {
        this._pointerOverMesh === uu && (this._pointerOverMesh = null), this._pickedDownMesh === uu && (this._pickedDownMesh = null), this._pickedUpMesh === uu && (this._pickedUpMesh = null);
        for (const Eu in this._meshUnderPointerId) this._meshUnderPointerId[Eu] === uu && delete this._meshUnderPointerId[Eu]
      }
    }
    Lu.DragMovementThreshold = 10, Lu.LongPressDelay = 500, Lu.DoubleClickDelay = 300, Lu.ExclusiveDoubleClickMode = !1;
    var tu = ju(40209),
      xu = ju(37680),
      Tu = ju(38152);
    class Hu {
      static get UniqueId() {
        const uu = this._UniqueIdCounter;
        return this._UniqueIdCounter++, uu
      }
    }
    Hu._UniqueIdCounter = 1;
    var Au = ju(40294),
      nu = ju(40450),
      yu = ju(37498);
    class zu {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var Ru, uE, EE, jE, sE, UE, ZE, XE, lE, qE, fE, CE, bE, cE, NE, OE, YE, hE, DE, gE, ME, eE, GE, pE, wE, JE, dE, aE, PE, oE, kE, mE, vE, KE, VE, rE, QE, iE, WE, SE, IE, FE, BE, LE, tE, xE, TE, HE, AE, nE, yE, zE, RE, uj = ju(39032),
      Ej = ju(37532);
    const jj = new Cu.u,
      sj = new Cu.u;
    var Uj;
    ! function(uu) {
      uu[uu.BackwardCompatible = 0] = "BackwardCompatible", uu[uu.Intermediate = 1] = "Intermediate", uu[uu.Aggressive = 2] = "Aggressive"
    }(Uj || (Uj = {}));
    class Zj {
      static DefaultMaterialFactory(uu) {
        throw (0, Gu.h)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, Gu.h)("DefaultCollisionCoordinator")
      }
      get clearColor() {
        return this._clearColor
      }
      set clearColor(uu) {
        uu !== this._clearColor && (this._clearColor = uu, this.onClearColorChangedObservable.notifyObservers(this._clearColor))
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      get performancePriority() {
        return this._performancePriority
      }
      set performancePriority(uu) {
        if (uu !== this._performancePriority) {
          switch (this._performancePriority = uu, uu) {
            case 0:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !1, this.autoClear = !0;
              break;
            case 1:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !0, this.autoClear = !1;
              break;
            case 2:
              this.skipFrustumClipping = !0, this._renderingManager.maintainStateBetweenFrames = !0, this.skipPointerMovePicking = !0, this.autoClear = !1
          }
          this.onScenePerformancePriorityChangedObservable.notifyObservers(uu)
        }
      }
      set forceWireframe(uu) {
        this._forceWireframe !== uu && (this._forceWireframe = uu, this.markAllMaterialsAsDirty(16))
      }
      get forceWireframe() {
        return this._forceWireframe
      }
      set skipFrustumClipping(uu) {
        this._skipFrustumClipping !== uu && (this._skipFrustumClipping = uu)
      }
      get skipFrustumClipping() {
        return this._skipFrustumClipping
      }
      set forcePointsCloud(uu) {
        this._forcePointsCloud !== uu && (this._forcePointsCloud = uu, this.markAllMaterialsAsDirty(16))
      }
      get forcePointsCloud() {
        return this._forcePointsCloud
      }
      get environmentTexture() {
        return this._environmentTexture
      }
      set environmentTexture(uu) {
        this._environmentTexture !== uu && (this._environmentTexture = uu, this.onEnvironmentTextureChangedObservable.notifyObservers(uu), this.markAllMaterialsAsDirty(1))
      }
      getNodes() {
        let uu = [];
        uu = uu.concat(this.meshes), uu = uu.concat(this.lights), uu = uu.concat(this.cameras), uu = uu.concat(this.transformNodes);
        for (const Eu of this.skeletons) uu = uu.concat(Eu.bones);
        return uu
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(uu) {
        this._animationPropertiesOverride = uu
      }
      set onDispose(uu) {
        this._onDisposeObserver && this.wV.remove(this._onDisposeObserver), this._onDisposeObserver = this.wV.add(uu)
      }
      set beforeRender(uu) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), uu && (this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(uu))
      }
      set afterRender(uu) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), uu && (this._onAfterRenderObserver = this.onAfterRenderObservable.add(uu))
      }
      set beforeCameraRender(uu) {
        this._onBeforeCameraRenderObserver && this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver), this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(uu)
      }
      set afterCameraRender(uu) {
        this._onAfterCameraRenderObserver && this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver), this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(uu)
      }
      get pointerDownPredicate() {
        return this._pointerPickingConfiguration.pointerDownPredicate
      }
      set pointerDownPredicate(uu) {
        this._pointerPickingConfiguration.pointerDownPredicate = uu
      }
      get pointerUpPredicate() {
        return this._pointerPickingConfiguration.pointerUpPredicate
      }
      set pointerUpPredicate(uu) {
        this._pointerPickingConfiguration.pointerUpPredicate = uu
      }
      get pointerMovePredicate() {
        return this._pointerPickingConfiguration.pointerMovePredicate
      }
      set pointerMovePredicate(uu) {
        this._pointerPickingConfiguration.pointerMovePredicate = uu
      }
      get pointerDownFastCheck() {
        return this._pointerPickingConfiguration.pointerDownFastCheck
      }
      set pointerDownFastCheck(uu) {
        this._pointerPickingConfiguration.pointerDownFastCheck = uu
      }
      get pointerUpFastCheck() {
        return this._pointerPickingConfiguration.pointerUpFastCheck
      }
      set pointerUpFastCheck(uu) {
        this._pointerPickingConfiguration.pointerUpFastCheck = uu
      }
      get pointerMoveFastCheck() {
        return this._pointerPickingConfiguration.pointerMoveFastCheck
      }
      set pointerMoveFastCheck(uu) {
        this._pointerPickingConfiguration.pointerMoveFastCheck = uu
      }
      get skipPointerMovePicking() {
        return this._pointerPickingConfiguration.skipPointerMovePicking
      }
      set skipPointerMovePicking(uu) {
        this._pointerPickingConfiguration.skipPointerMovePicking = uu
      }
      get skipPointerDownPicking() {
        return this._pointerPickingConfiguration.skipPointerDownPicking
      }
      set skipPointerDownPicking(uu) {
        this._pointerPickingConfiguration.skipPointerDownPicking = uu
      }
      get skipPointerUpPicking() {
        return this._pointerPickingConfiguration.skipPointerUpPicking
      }
      set skipPointerUpPicking(uu) {
        this._pointerPickingConfiguration.skipPointerUpPicking = uu
      }
      get unTranslatedPointer() {
        return this._inputManager.unTranslatedPointer
      }
      static get DragMovementThreshold() {
        return Lu.DragMovementThreshold
      }
      static set DragMovementThreshold(uu) {
        Lu.DragMovementThreshold = uu
      }
      static get LongPressDelay() {
        return Lu.LongPressDelay
      }
      static set LongPressDelay(uu) {
        Lu.LongPressDelay = uu
      }
      static get DoubleClickDelay() {
        return Lu.DoubleClickDelay
      }
      static set DoubleClickDelay(uu) {
        Lu.DoubleClickDelay = uu
      }
      static get ExclusiveDoubleClickMode() {
        return Lu.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(uu) {
        Lu.ExclusiveDoubleClickMode = uu
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? Cu.t.ZeroReadOnly
      }
      bindEyePosition(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const su = this._eyePosition,
          Uu = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          Zu = this.floatingOriginOffset,
          Xu = jj.set(su.x, su.y, su.z, Uu ? -1 : 1),
          lu = Xu.subtractFromFloatsToRef(Zu.x, Zu.y, Zu.z, 0, sj);
        return uu && (ju ? uu.setFloat3(Eu, lu.x, lu.y, lu.z) : uu.setVector4(Eu, lu)), Xu
      }
      finalizeSceneUbo() {
        const uu = this.getSceneUniformBuffer(),
          Eu = this.bindEyePosition(null),
          ju = this.floatingOriginOffset;
        return uu.updateFloat4("vEyePosition", Eu.x - ju.x, Eu.y - ju.y, Eu.z - ju.z, Eu.w), uu.update(), uu
      }
      set useRightHandedSystem(uu) {
        this._useRightHandedSystem !== uu && (this._useRightHandedSystem = uu, this.markAllMaterialsAsDirty(16))
      }
      get useRightHandedSystem() {
        return this._useRightHandedSystem
      }
      setStepId(uu) {
        this._currentStepId = uu
      }
      getStepId() {
        return this._currentStepId
      }
      getInternalStep() {
        return this._currentInternalStep
      }
      set fogEnabled(uu) {
        this._fogEnabled !== uu && (this._fogEnabled = uu, this.markAllMaterialsAsDirty(16))
      }
      get fogEnabled() {
        return this._fogEnabled
      }
      set fogMode(uu) {
        this._fogMode !== uu && (this._fogMode = uu, this.markAllMaterialsAsDirty(16))
      }
      get fogMode() {
        return this._fogMode
      }
      get prePass() {
        return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled
      }
      set shadowsEnabled(uu) {
        this._shadowsEnabled !== uu && (this._shadowsEnabled = uu, this.markAllMaterialsAsDirty(2))
      }
      get shadowsEnabled() {
        return this._shadowsEnabled
      }
      set lightsEnabled(uu) {
        this._lightsEnabled !== uu && (this._lightsEnabled = uu, this.markAllMaterialsAsDirty(2))
      }
      get lightsEnabled() {
        return this._lightsEnabled
      }
      get activeCameras() {
        return this._activeCameras
      }
      set activeCameras(uu) {
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), uu && (this._unObserveActiveCameras = (0, yu.k)(uu, (() => {
          this.onActiveCamerasChanged.notifyObservers(this)
        }))), this._activeCameras = uu
      }
      get activeCamera() {
        return this._activeCamera
      }
      set activeCamera(uu) {
        uu !== this._activeCamera && (this._activeCamera = uu, this.onActiveCameraChanged.notifyObservers(this))
      }
      get _hasDefaultMaterial() {
        return Zj.DefaultMaterialFactory !== Zj._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = Zj.DefaultMaterialFactory(this)), this._defaultMaterial
      }
      set defaultMaterial(uu) {
        this._defaultMaterial = uu
      }
      set texturesEnabled(uu) {
        this._texturesEnabled !== uu && (this._texturesEnabled = uu, this.markAllMaterialsAsDirty(1))
      }
      get texturesEnabled() {
        return this._texturesEnabled
      }
      get frameGraph() {
        return this._frameGraph
      }
      set frameGraph(uu) {
        if (this._frameGraph) return this._frameGraph = uu, void(uu || (this.customRenderFunction = this._currentCustomRenderFunction));
        this._frameGraph = uu, uu && (this._currentCustomRenderFunction = this.customRenderFunction, this.customRenderFunction = this._renderWithFrameGraph, this.activeCamera = null)
      }
      set skeletonsEnabled(uu) {
        this._skeletonsEnabled !== uu && (this._skeletonsEnabled = uu, this.markAllMaterialsAsDirty(8))
      }
      get skeletonsEnabled() {
        return this._skeletonsEnabled
      }
      get collisionCoordinator() {
        return this._collisionCoordinator || (this._collisionCoordinator = Zj.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
      }
      get renderingManager() {
        return this._renderingManager
      }
      get frustumPlanes() {
        return this._frustumPlanes
      }
      _registerTransientComponents() {
        if (this._transientComponents.length > 0) {
          for (const uu of this._transientComponents) uu.register();
          this._transientComponents.length = 0
        }
      }
      usu(uu) {
        this._components.push(uu), this._transientComponents.push(uu);
        const Eu = uu;
        Eu.addFromContainer && Eu.serialize && this._serializableComponents.push(Eu)
      }
      _getComponent(uu) {
        for (const Eu of this._components)
          if (Eu.name === uu) return Eu;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(uu, Eu) {
        this._inputManager = new Lu(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new xu.g(.2, .2, .3, 1), this.onClearColorChangedObservable = new Xu.d, this.ambientColor = new xu.c(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new Xu.d, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.WG = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.wV = new Xu.d, this._onDisposeObserver = null, this.onBeforeRenderObservable = new Xu.d, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new Xu.d, this.onAfterRenderCameraObservable = new Xu.d, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new Xu.d, this.onAfterAnimationsObservable = new Xu.d, this.onBeforeDrawPhaseObservable = new Xu.d, this.onAfterDrawPhaseObservable = new Xu.d, this.onReadyObservable = new Xu.d, this.onBeforeCameraRenderObservable = new Xu.d, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new Xu.d, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new Xu.d, this.onAfterActiveMeshesEvaluationObservable = new Xu.d, this.onBeforeParticlesRenderingObservable = new Xu.d, this.onAfterParticlesRenderingObservable = new Xu.d, this.onDataLoadedObservable = new Xu.d, this.onNewCameraAddedObservable = new Xu.d, this.onCameraRemovedObservable = new Xu.d, this.onNewLightAddedObservable = new Xu.d, this.onLightRemovedObservable = new Xu.d, this.onNewGeometryAddedObservable = new Xu.d, this.onGeometryRemovedObservable = new Xu.d, this.onNewTransformNodeAddedObservable = new Xu.d, this.onTransformNodeRemovedObservable = new Xu.d, this.onNewMeshAddedObservable = new Xu.d, this.onMeshRemovedObservable = new Xu.d, this.onNewSkeletonAddedObservable = new Xu.d, this.onSkeletonRemovedObservable = new Xu.d, this.onNewParticleSystemAddedObservable = new Xu.d, this.onParticleSystemRemovedObservable = new Xu.d, this.onNewAnimationGroupAddedObservable = new Xu.d, this.onAnimationGroupRemovedObservable = new Xu.d, this.onNewMaterialAddedObservable = new Xu.d, this.onNewMultiMaterialAddedObservable = new Xu.d, this.onMaterialRemovedObservable = new Xu.d, this.onMultiMaterialRemovedObservable = new Xu.d, this.onNewTextureAddedObservable = new Xu.d, this.onTextureRemovedObservable = new Xu.d, this.onNewFrameGraphAddedObservable = new Xu.d, this.onFrameGraphRemovedObservable = new Xu.d, this.onNewObjectRendererAddedObservable = new Xu.d, this.onObjectRendererRemovedObservable = new Xu.d, this.onNewPostProcessAddedObservable = new Xu.d, this.onPostProcessRemovedObservable = new Xu.d, this.onNewEffectLayerAddedObservable = new Xu.d, this.onEffectLayerRemovedObservable = new Xu.d, this.onBeforeRenderTargetsRenderObservable = new Xu.d, this.onAfterRenderTargetsRenderObservable = new Xu.d, this.onBeforeStepObservable = new Xu.d, this.onAfterStepObservable = new Xu.d, this.onActiveCameraChanged = new Xu.d, this.onActiveCamerasChanged = new Xu.d, this.onBeforeRenderingGroupObservable = new Xu.d, this.onAfterRenderingGroupObservable = new Xu.d, this.onMeshImportedObservable = new Xu.d, this.onAnimationFileImportedObservable = new Xu.d, this.onEnvironmentTextureChangedObservable = new Xu.d, this.onMeshUnderPointerUpdatedObservable = new Xu.d, this._registeredForLateAnimationBindings = new lu.e(256), this._pointerPickingConfiguration = new zu, this.onPrePointerObservable = new Xu.d, this.onPointerObservable = new Xu.d, this.onPreKeyboardObservable = new Xu.d, this.onKeyboardObservable = new Xu.d, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = Zj.FOGMODE_NONE, this.fogColor = new xu.c(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.HI = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new Cu.t(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new lu.e(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new tu.b, this._activeIndices = new tu.b, this._activeParticles = new tu.b, this._activeBones = new tu.b, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new lu.f(256), this._processedMaterials = new lu.f(256), this._renderTargets = new lu.e(256), this._materialsRenderTargets = new lu.e(256), this._activeParticleSystems = new lu.f(256), this._activeSkeletons = new lu.e(32), this._softwareSkinnedMeshes = new lu.e(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = Cu.e.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = gu.e.Create(), this._beforeClearStage = gu.e.Create(), this._beforeRenderTargetClearStage = gu.e.Create(), this._gatherRenderTargetsStage = gu.e.Create(), this._gatherActiveCameraRenderTargetsStage = gu.e.Create(), this._isReadyForMeshStage = gu.e.Create(), this._beforeEvaluateActiveMeshStage = gu.e.Create(), this._evaluateSubMeshStage = gu.e.Create(), this._preActiveMeshStage = gu.e.Create(), this._cameraDrawRenderTargetStage = gu.e.Create(), this._beforeCameraDrawStage = gu.e.Create(), this._beforeRenderTargetDrawStage = gu.e.Create(), this._beforeRenderingGroupDrawStage = gu.e.Create(), this._beforeRenderingMeshStage = gu.e.Create(), this._afterRenderingMeshStage = gu.e.Create(), this._afterRenderingGroupDrawStage = gu.e.Create(), this._afterCameraDrawStage = gu.e.Create(), this._afterCameraPostProcessStage = gu.e.Create(), this._afterRenderTargetDrawStage = gu.e.Create(), this._afterRenderTargetPostProcessStage = gu.e.Create(), this._afterRenderStage = gu.e.Create(), this._pointerMoveStage = gu.e.Create(), this._pointerDownStage = gu.e.Create(), this._pointerUpStage = gu.e.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new Xu.d, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const ju = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...Eu
        };
        this.defaultCameraLayerMask = ju.defaultCameraLayerMask, this.defaultRenderableLayerMask = ju.defaultRenderableLayerMask, uu = this._engine = uu || eu.b.LastCreatedEngine, ju.virtual ? uu._virtualScenes.push(this) : (eu.b._LastCreatedScene = this, uu.scenes.push(this)), (uu.getCreationOptions().useLargeWorldRendering || Eu?.useFloatingOrigin) && ((0, hu.f)(), this._floatingOriginScene = this, hu.b.hV = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new Du.c(this), Yu.c && (this.postProcessManager = new Yu.c(this)), (0, Mu.m)() && this.attachControl(), this._createUbo(), bu.d && (this._imageProcessingConfiguration = new bu.d), this.setDefaultCandidateProviders(), ju.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = ju.useMaterialMeshMap, this.useClonedMeshMap = ju.useClonedMeshMap, Eu && Eu.virtual || uu.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(uu) {
        return this._defaultSubMeshCandidates.data = uu.iG, this._defaultSubMeshCandidates.length = uu.iG.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = uu => this._getDefaultSubMeshCandidates(uu), this.getIntersectingSubMeshCandidates = (uu, Eu) => this._getDefaultSubMeshCandidates(uu), this.getCollidingSubMeshCandidates = (uu, Eu) => this._getDefaultSubMeshCandidates(uu)
      }
      get meshUnderPointer() {
        return this._inputManager.meshUnderPointer
      }
      get pointerX() {
        return this._inputManager.pointerX
      }
      set pointerX(uu) {
        this._inputManager.pointerX = uu
      }
      get pointerY() {
        return this._inputManager.pointerY
      }
      set pointerY(uu) {
        this._inputManager.pointerY = uu
      }
      getCachedMaterial() {
        return this._cachedMaterial
      }
      getCachedEffect() {
        return this._cachedEffect
      }
      getCachedVisibility() {
        return this._cachedVisibility
      }
      isCachedMaterialInvalid(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== Eu || this._cachedMaterial !== uu || this._cachedVisibility !== ju
      }
      wO() {
        return this._engine
      }
      getTotalVertices() {
        return this._totalVertices.current
      }
      get totalVerticesPerfCounter() {
        return this._totalVertices
      }
      getActiveIndices() {
        return this._activeIndices.current
      }
      get totalActiveIndicesPerfCounter() {
        return this._activeIndices
      }
      getActiveParticles() {
        return this._activeParticles.current
      }
      get activeParticlesPerfCounter() {
        return this._activeParticles
      }
      getActiveBones() {
        return this._activeBones.current
      }
      get activeBonesPerfCounter() {
        return this._activeBones
      }
      getActiveMeshes() {
        return this._activeMeshes
      }
      getAnimationRatio() {
        return void 0 !== this._animationRatio ? this._animationRatio : 1
      }
      getRenderId() {
        return this._renderId
      }
      getFrameId() {
        return this._frameId
      }
      incrementRenderId() {
        this._renderId++
      }
      _createUbo() {
        this.setSceneUniformBuffer(this.createSceneUniformBuffer())
      }
      simulatePointerMove(uu, Eu) {
        return this._inputManager.simulatePointerMove(uu, Eu), this
      }
      simulatePointerDown(uu, Eu) {
        return this._inputManager.simulatePointerDown(uu, Eu), this
      }
      simulatePointerUp(uu, Eu, ju) {
        return this._inputManager.simulatePointerUp(uu, Eu, ju), this
      }
      isPointerCaptured() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(uu)
      }
      attachControl() {
        let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ju = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(uu, Eu, ju)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let uu, Eu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const ju = this.wO(),
          su = ju.currentRenderPassId;
        ju.currentRenderPassId = this.activeCamera?.renderPassId ?? su;
        let Uu = !0;
        for (this._pendingData.length > 0 && (Uu = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && Uu && (Uu = this.depthPeelingRenderer.isReady()), Eu && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), uu = 0; uu < this.meshes.length; uu++) {
          const su = this.meshes[uu];
          if (!su.iG || 0 === su.iG.length) continue;
          if (!su.isReady(!0)) {
            Uu = !1;
            continue
          }
          const Zu = su.hasThinInstances || "InstancedMesh" === su.getClassName() || "InstancedLinesMesh" === su.getClassName() || ju.getCaps().instancedArrays && su.instances.length > 0;
          for (let uu = 0, Eu = this._isReadyForMeshStage; uu < Eu.length; uu++) {
            Eu[uu].action(su, Zu) || (Uu = !1)
          }
          if (!Eu) continue;
          const Xu = su.material || this.defaultMaterial;
          if (Xu)
            if (Xu._storeEffectOnSubMeshes)
              for (const uu of su.iG) {
                const Eu = uu.oO();
                Eu && Eu.hasRenderTargetTextures && null != Eu.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(Eu) && (this._processedMaterials.push(Eu), this._materialsRenderTargets.concatWithNoDuplicate(Eu.getRenderTargetTextures()))
              } else Xu.hasRenderTargetTextures && null != Xu.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(Xu) && (this._processedMaterials.push(Xu), this._materialsRenderTargets.concatWithNoDuplicate(Xu.getRenderTargetTextures()))
        }
        if (Eu) {
          for (uu = 0; uu < this._materialsRenderTargets.length; ++uu) {
            this._materialsRenderTargets.data[uu].isReadyForRendering() || (Uu = !1)
          }
          for (uu = 0; uu < this.customRenderTargets.length; ++uu) {
            this.customRenderTargets[uu].isReadyForRendering() || (Uu = !1)
          }
        }
        for (uu = 0; uu < this.geometries.length; uu++) {
          2 === this.geometries[uu].delayLoadState && (Uu = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const Zu of this.activeCameras) Zu.isReady(!0) || (Uu = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (Uu = !1));
        for (const Zu of this.WG) Zu.isReady() || (Uu = !1);
        if (this.proceduralTexturesEnabled)
          for (const Zu of this.proceduralTextures) Zu.isReady() || (Uu = !1);
        if (this.layers)
          for (const Zu of this.layers) Zu.isReady() || (Uu = !1);
        if (this.effectLayers)
          for (const Zu of this.effectLayers) Zu.isLayerReady() || (Uu = !1);
        for (const Zu of this._isReadyChecks) Zu.isReady() || (Uu = !1);
        return ju.areAllEffectsReady() || (Uu = !1), ju.currentRenderPassId = su, Uu
      }
      resetCachedMaterial() {
        this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null
      }
      registerBeforeRender(uu) {
        this.onBeforeRenderObservable.add(uu)
      }
      unregisterBeforeRender(uu) {
        this.onBeforeRenderObservable.removeCallback(uu)
      }
      registerAfterRender(uu) {
        this.onAfterRenderObservable.add(uu)
      }
      unregisterAfterRender(uu) {
        this.onAfterRenderObservable.removeCallback(uu)
      }
      _executeOnceBeforeRender(uu) {
        const Eu = () => {
          uu(), setTimeout((() => {
            this.unregisterBeforeRender(Eu)
          }))
        };
        this.registerBeforeRender(Eu)
      }
      executeOnceBeforeRender(uu, Eu) {
        void 0 !== Eu ? setTimeout((() => {
          this._executeOnceBeforeRender(uu)
        }), Eu) : this._executeOnceBeforeRender(uu)
      }
      addPendingData(uu) {
        this._pendingData.push(uu)
      }
      removePendingData(uu) {
        const Eu = this.isLoading,
          ju = this._pendingData.indexOf(uu); - 1 !== ju && this._pendingData.splice(ju, 1), Eu && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
      }
      getWaitingItemsCount() {
        return this._pendingData.length
      }
      get isLoading() {
        return this._pendingData.length > 0
      }
      addIsReadyCheck(uu) {
        -1 === this._isReadyChecks.indexOf(uu) && this._isReadyChecks.push(uu)
      }
      removeIsReadyCheck(uu) {
        const Eu = this._isReadyChecks.indexOf(uu); - 1 !== Eu && this._isReadyChecks.splice(Eu, 1)
      }
      executeWhenReady(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(uu), null === this._executeWhenReadyTimeoutId && this._checkIsReady(Eu)
      }
      async whenReadyAsync() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((Eu => {
          this.executeWhenReady((() => {
            Eu()
          }), uu)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = Zu.c.Now;
        else if (this.onReadyTimeoutDuration > 0 && Zu.c.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(uu)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(uu)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = Zu.c.Now
      }
      getViewMatrix() {
        return this._viewMatrix
      }
      getProjectionMatrix() {
        return this._projectionMatrix
      }
      getInverseProjectionMatrix() {
        return this._inverseProjectionMatrix
      }
      getTransformMatrix() {
        return this._transformMatrix
      }
      setTransformMatrix(uu, Eu, ju, su) {
        this._multiviewSceneUboIsActive = !!(ju && su && this._multiviewSceneUbo), this._viewUpdateFlag === uu.updateFlag && this._projectionUpdateFlag === Eu.updateFlag || (this._viewUpdateFlag = uu.updateFlag, this._projectionUpdateFlag = Eu.updateFlag, this._viewMatrix = uu, this._projectionMatrix = Eu, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new Cu.e), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? Tu.d.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = Tu.d.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(ju, su) : this._sceneUbo.useUbo && (this._sceneUbo.y_("viewProjection", this._transformMatrix), this._sceneUbo.y_("view", this._viewMatrix), this._sceneUbo.y_("projection", this._projectionMatrix), this._sceneUbo.y_("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(uu, Eu) {
        const ju = "boolean" === typeof Eu ? Eu : Eu?.trackUBOsInFrame,
          su = new cu.d(this._engine, void 0, !1, uu ?? "vY", void 0, ju);
        return su.addUniform("viewProjection", 16), su.addUniform("view", 16), su.addUniform("projection", 16), su.addUniform("vEyePosition", 4), su.addUniform("inverseProjection", 16), su
      }
      setSceneUniformBuffer(uu) {
        this._sceneUbo = uu, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : Cu.t.ZeroReadOnly
      }
      getUniqueId() {
        return Hu.UniqueId
      }
      hsu(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(uu), uu._resyncLightSources(), uu.parent || uu._addToSceneRootNodes(), Uu.c.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(uu)
          })), Eu)) {
          const Eu = uu.getChildMeshes();
          for (const uu of Eu) this.hsu(uu)
        }
      }
      rV(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ju = this.meshes.indexOf(uu);
        if (-1 !== ju && (this.meshes.splice(ju, 1), uu.parent || uu._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(uu), this.onMeshRemovedObservable.notifyObservers(uu), Eu) {
          const Eu = uu.getChildMeshes();
          for (const uu of Eu) this.rV(uu)
        }
        return ju
      }
      addTransformNode(uu) {
        this._blockEntityCollection || uu.hV() === this && -1 !== uu._indexInSceneTransformNodesArray || (uu._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(uu), uu.parent || uu._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(uu))
      }
      removeTransformNode(uu) {
        const Eu = uu._indexInSceneTransformNodesArray;
        if (-1 !== Eu) {
          if (Eu !== this.transformNodes.length - 1) {
            const uu = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[Eu] = uu, uu._indexInSceneTransformNodesArray = Eu
          }
          uu._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), uu.parent || uu._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(uu), Eu
      }
      removeSkeleton(uu) {
        const Eu = this.skeletons.indexOf(uu);
        return -1 !== Eu && (this.skeletons.splice(Eu, 1), this.onSkeletonRemovedObservable.notifyObservers(uu), this._executeActiveContainerCleanup(this._activeSkeletons)), Eu
      }
      removeMorphTargetManager(uu) {
        const Eu = this.morphTargetManagers.indexOf(uu);
        return -1 !== Eu && this.morphTargetManagers.splice(Eu, 1), Eu
      }
      removeLight(uu) {
        const Eu = this.lights.indexOf(uu);
        if (-1 !== Eu) {
          for (const Eu of this.meshes) Eu._removeLightSource(uu, !1);
          this.lights.splice(Eu, 1), this.sortLightsByPriority(), uu.parent || uu._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(uu)
        }
        return Eu
      }
      removeCamera(uu) {
        const Eu = this.cameras.indexOf(uu);
        if (-1 !== Eu && (this.cameras.splice(Eu, 1), uu.parent || uu._removeFromSceneRootNodes()), this.activeCameras) {
          const Eu = this.activeCameras.indexOf(uu); - 1 !== Eu && this.activeCameras.splice(Eu, 1)
        }
        return this.activeCamera === uu && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(uu), Eu
      }
      removeParticleSystem(uu) {
        const Eu = this.WG.indexOf(uu);
        return -1 !== Eu && (this.WG.splice(Eu, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(uu), Eu
      }
      removeAnimation(uu) {
        const Eu = this.animations.indexOf(uu);
        return -1 !== Eu && this.animations.splice(Eu, 1), Eu
      }
      stopAnimation(uu, Eu, ju) {}
      removeAnimationGroup(uu) {
        const Eu = this.animationGroups.indexOf(uu);
        return -1 !== Eu && this.animationGroups.splice(Eu, 1), this.onAnimationGroupRemovedObservable.notifyObservers(uu), Eu
      }
      removeMultiMaterial(uu) {
        const Eu = this.multiMaterials.indexOf(uu);
        return -1 !== Eu && this.multiMaterials.splice(Eu, 1), this.onMultiMaterialRemovedObservable.notifyObservers(uu), Eu
      }
      removeMaterial(uu) {
        const Eu = uu._indexInSceneMaterialArray;
        if (-1 !== Eu && Eu < this.materials.length) {
          if (Eu !== this.materials.length - 1) {
            const uu = this.materials[this.materials.length - 1];
            this.materials[Eu] = uu, uu._indexInSceneMaterialArray = Eu
          }
          uu._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(uu), Eu
      }
      removeActionManager(uu) {
        const Eu = this.actionManagers.indexOf(uu);
        return -1 !== Eu && this.actionManagers.splice(Eu, 1), Eu
      }
      removeTexture(uu) {
        const Eu = this.textures.indexOf(uu);
        return -1 !== Eu && this.textures.splice(Eu, 1), this.onTextureRemovedObservable.notifyObservers(uu), Eu
      }
      removeFrameGraph(uu) {
        const Eu = this.frameGraphs.indexOf(uu);
        return -1 !== Eu && this.frameGraphs.splice(Eu, 1), this.onFrameGraphRemovedObservable.notifyObservers(uu), Eu
      }
      removeObjectRenderer(uu) {
        const Eu = this.objectRenderers.indexOf(uu);
        return -1 !== Eu && this.objectRenderers.splice(Eu, 1), this.onObjectRendererRemovedObservable.notifyObservers(uu), Eu
      }
      removePostProcess(uu) {
        const Eu = this.postProcesses.indexOf(uu);
        return -1 !== Eu && this.postProcesses.splice(Eu, 1), this.onPostProcessRemovedObservable.notifyObservers(uu), Eu
      }
      removeEffectLayer(uu) {
        const Eu = this.effectLayers.indexOf(uu);
        return -1 !== Eu && this.effectLayers.splice(Eu, 1), this.onEffectLayerRemovedObservable.notifyObservers(uu), Eu
      }
      addLight(uu) {
        if (!this._blockEntityCollection) {
          this.lights.push(uu), this.sortLightsByPriority(), uu.parent || uu._addToSceneRootNodes();
          for (const Eu of this.meshes) - 1 === Eu.lightSources.indexOf(uu) && (Eu.lightSources.push(uu), Eu._resyncLightSources());
          Uu.c.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(uu)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(nu.e.CompareLightsPriority)
      }
      addCamera(uu) {
        this._blockEntityCollection || (this.cameras.push(uu), Uu.c.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(uu)
        })), uu.parent || uu._addToSceneRootNodes())
      }
      addSkeleton(uu) {
        this._blockEntityCollection || (this.skeletons.push(uu), Uu.c.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(uu)
        })))
      }
      addParticleSystem(uu) {
        this._blockEntityCollection || (this.WG.push(uu), Uu.c.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(uu)
        })))
      }
      addAnimation(uu) {
        this._blockEntityCollection || this.animations.push(uu)
      }
      addAnimationGroup(uu) {
        this._blockEntityCollection || (this.animationGroups.push(uu), Uu.c.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(uu)
        })))
      }
      addMultiMaterial(uu) {
        this._blockEntityCollection || (this.multiMaterials.push(uu), Uu.c.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(uu)
        })))
      }
      addMaterial(uu) {
        this._blockEntityCollection || uu.hV() === this && -1 !== uu._indexInSceneMaterialArray || (uu._indexInSceneMaterialArray = this.materials.length, this.materials.push(uu), Uu.c.SetImmediate((() => {
          this.onNewMaterialAddedObservable.notifyObservers(uu)
        })))
      }
      addMorphTargetManager(uu) {
        this._blockEntityCollection || this.morphTargetManagers.push(uu)
      }
      addGeometry(uu) {
        this._blockEntityCollection || (this._geometriesByUniqueId && (this._geometriesByUniqueId[uu.uniqueId] = this.geometries.length), this.geometries.push(uu))
      }
      addActionManager(uu) {
        this.actionManagers.push(uu)
      }
      addTexture(uu) {
        this._blockEntityCollection || (this.textures.push(uu), this.onNewTextureAddedObservable.notifyObservers(uu))
      }
      addFrameGraph(uu) {
        this.frameGraphs.push(uu), Uu.c.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(uu)
        }))
      }
      addObjectRenderer(uu) {
        this.objectRenderers.push(uu), Uu.c.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(uu)
        }))
      }
      addPostProcess(uu) {
        this._blockEntityCollection || (this.postProcesses.push(uu), Uu.c.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(uu)
        })))
      }
      addEffectLayer(uu) {
        this._blockEntityCollection || (this.effectLayers.push(uu), Uu.c.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(uu)
        })))
      }
      switchActiveCamera(uu) {
        let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = uu, Eu && uu.attachControl())
      }
      setActiveCameraById(uu) {
        const Eu = this.getCameraById(uu);
        return Eu ? (this.activeCamera = Eu, Eu) : null
      }
      setActiveCameraByName(uu) {
        const Eu = this.getCameraByName(uu);
        return Eu ? (this.activeCamera = Eu, Eu) : null
      }
      getAnimationGroupByName(uu) {
        for (let Eu = 0; Eu < this.animationGroups.length; Eu++)
          if (this.animationGroups[Eu].name === uu) return this.animationGroups[Eu];
        return null
      }
      _getMaterial(uu, Eu) {
        for (let ju = 0; ju < this.materials.length; ju++) {
          const uu = this.materials[ju];
          if (Eu(uu)) return uu
        }
        if (uu)
          for (let ju = 0; ju < this.multiMaterials.length; ju++) {
            const uu = this.multiMaterials[ju];
            if (Eu(uu)) return uu
          }
        return null
      }
      getMaterialByUniqueID(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(uu, Eu)
      }
      getMaterialByUniqueId(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(Eu, (Eu => Eu.uniqueId === uu))
      }
      getMaterialById(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(Eu, (Eu => Eu.id === uu))
      }
      getMaterialByName(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(Eu, (Eu => Eu.name === uu))
      }
      getLastMaterialById(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let ju = this.materials.length - 1; ju >= 0; ju--)
          if (this.materials[ju].id === uu) return this.materials[ju];
        if (Eu)
          for (let ju = this.multiMaterials.length - 1; ju >= 0; ju--)
            if (this.multiMaterials[ju].id === uu) return this.multiMaterials[ju];
        return null
      }
      getTextureByUniqueId(uu) {
        for (let Eu = 0; Eu < this.textures.length; Eu++)
          if (this.textures[Eu].uniqueId === uu) return this.textures[Eu];
        return null
      }
      getTextureByName(uu) {
        for (let Eu = 0; Eu < this.textures.length; Eu++)
          if (this.textures[Eu].name === uu) return this.textures[Eu];
        return null
      }
      getCameraById(uu) {
        for (let Eu = 0; Eu < this.cameras.length; Eu++)
          if (this.cameras[Eu].id === uu) return this.cameras[Eu];
        return null
      }
      getCameraByUniqueId(uu) {
        for (let Eu = 0; Eu < this.cameras.length; Eu++)
          if (this.cameras[Eu].uniqueId === uu) return this.cameras[Eu];
        return null
      }
      getCameraByName(uu) {
        for (let Eu = 0; Eu < this.cameras.length; Eu++)
          if (this.cameras[Eu].name === uu) return this.cameras[Eu];
        return null
      }
      getBoneById(uu) {
        for (let Eu = 0; Eu < this.skeletons.length; Eu++) {
          const ju = this.skeletons[Eu];
          for (let Eu = 0; Eu < ju.bones.length; Eu++)
            if (ju.bones[Eu].id === uu) return ju.bones[Eu]
        }
        return null
      }
      getBoneByName(uu) {
        for (let Eu = 0; Eu < this.skeletons.length; Eu++) {
          const ju = this.skeletons[Eu];
          for (let Eu = 0; Eu < ju.bones.length; Eu++)
            if (ju.bones[Eu].name === uu) return ju.bones[Eu]
        }
        return null
      }
      getLightByName(uu) {
        for (let Eu = 0; Eu < this.lights.length; Eu++)
          if (this.lights[Eu].name === uu) return this.lights[Eu];
        return null
      }
      getLightById(uu) {
        for (let Eu = 0; Eu < this.lights.length; Eu++)
          if (this.lights[Eu].id === uu) return this.lights[Eu];
        return null
      }
      getLightByUniqueId(uu) {
        for (let Eu = 0; Eu < this.lights.length; Eu++)
          if (this.lights[Eu].uniqueId === uu) return this.lights[Eu];
        return null
      }
      getParticleSystemById(uu) {
        for (let Eu = 0; Eu < this.WG.length; Eu++)
          if (this.WG[Eu].id === uu) return this.WG[Eu];
        return null
      }
      getGeometryById(uu) {
        for (let Eu = 0; Eu < this.geometries.length; Eu++)
          if (this.geometries[Eu].id === uu) return this.geometries[Eu];
        return null
      }
      _getGeometryByUniqueId(uu) {
        if (this._geometriesByUniqueId) {
          const Eu = this._geometriesByUniqueId[uu];
          if (void 0 !== Eu) return this.geometries[Eu]
        } else
          for (let Eu = 0; Eu < this.geometries.length; Eu++)
            if (this.geometries[Eu].uniqueId === uu) return this.geometries[Eu];
        return null
      }
      getFrameGraphByName(uu) {
        for (let Eu = 0; Eu < this.frameGraphs.length; Eu++)
          if (this.frameGraphs[Eu].name === uu) return this.frameGraphs[Eu];
        return null
      }
      pushGeometry(uu, Eu) {
        return !(!Eu && this._getGeometryByUniqueId(uu.uniqueId)) && (this.addGeometry(uu), Uu.c.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(uu)
        })), !0)
      }
      removeGeometry(uu) {
        let Eu;
        if (this._geometriesByUniqueId) {
          if (Eu = this._geometriesByUniqueId[uu.uniqueId], void 0 === Eu) return !1
        } else if (Eu = this.geometries.indexOf(uu), Eu < 0) return !1;
        if (Eu !== this.geometries.length - 1) {
          const uu = this.geometries[this.geometries.length - 1];
          uu && (this.geometries[Eu] = uu, this._geometriesByUniqueId && (this._geometriesByUniqueId[uu.uniqueId] = Eu))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[uu.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(uu), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(uu) {
        for (let Eu = 0; Eu < this.meshes.length; Eu++)
          if (this.meshes[Eu].id === uu) return this.meshes[Eu];
        return null
      }
      getMeshesById(uu) {
        return this.meshes.filter((function(Eu) {
          return Eu.id === uu
        }))
      }
      getTransformNodeById(uu) {
        for (let Eu = 0; Eu < this.transformNodes.length; Eu++)
          if (this.transformNodes[Eu].id === uu) return this.transformNodes[Eu];
        return null
      }
      getTransformNodeByUniqueId(uu) {
        for (let Eu = 0; Eu < this.transformNodes.length; Eu++)
          if (this.transformNodes[Eu].uniqueId === uu) return this.transformNodes[Eu];
        return null
      }
      getTransformNodesById(uu) {
        return this.transformNodes.filter((function(Eu) {
          return Eu.id === uu
        }))
      }
      getMeshByUniqueId(uu) {
        for (let Eu = 0; Eu < this.meshes.length; Eu++)
          if (this.meshes[Eu].uniqueId === uu) return this.meshes[Eu];
        return null
      }
      getLastMeshById(uu) {
        for (let Eu = this.meshes.length - 1; Eu >= 0; Eu--)
          if (this.meshes[Eu].id === uu) return this.meshes[Eu];
        return null
      }
      getLastTransformNodeById(uu) {
        for (let Eu = this.transformNodes.length - 1; Eu >= 0; Eu--)
          if (this.transformNodes[Eu].id === uu) return this.transformNodes[Eu];
        return null
      }
      getLastEntryById(uu) {
        let Eu;
        for (Eu = this.meshes.length - 1; Eu >= 0; Eu--)
          if (this.meshes[Eu].id === uu) return this.meshes[Eu];
        for (Eu = this.transformNodes.length - 1; Eu >= 0; Eu--)
          if (this.transformNodes[Eu].id === uu) return this.transformNodes[Eu];
        for (Eu = this.cameras.length - 1; Eu >= 0; Eu--)
          if (this.cameras[Eu].id === uu) return this.cameras[Eu];
        for (Eu = this.lights.length - 1; Eu >= 0; Eu--)
          if (this.lights[Eu].id === uu) return this.lights[Eu];
        for (Eu = this.skeletons.length - 1; Eu >= 0; Eu--) {
          const ju = this.skeletons[Eu];
          for (let Eu = ju.bones.length - 1; Eu >= 0; Eu--)
            if (ju.bones[Eu].id === uu) return ju.bones[Eu]
        }
        return null
      }
      getNodeById(uu) {
        const Eu = this.getMeshById(uu);
        if (Eu) return Eu;
        const ju = this.getTransformNodeById(uu);
        if (ju) return ju;
        const su = this.getLightById(uu);
        if (su) return su;
        const Uu = this.getCameraById(uu);
        if (Uu) return Uu;
        const Zu = this.getBoneById(uu);
        return Zu || null
      }
      getNodeByName(uu) {
        const Eu = this.getMeshByName(uu);
        if (Eu) return Eu;
        const ju = this.getTransformNodeByName(uu);
        if (ju) return ju;
        const su = this.getLightByName(uu);
        if (su) return su;
        const Uu = this.getCameraByName(uu);
        if (Uu) return Uu;
        const Zu = this.getBoneByName(uu);
        return Zu || null
      }
      getMeshByName(uu) {
        for (let Eu = 0; Eu < this.meshes.length; Eu++)
          if (this.meshes[Eu].name === uu) return this.meshes[Eu];
        return null
      }
      getTransformNodeByName(uu) {
        for (let Eu = 0; Eu < this.transformNodes.length; Eu++)
          if (this.transformNodes[Eu].name === uu) return this.transformNodes[Eu];
        return null
      }
      getLastSkeletonById(uu) {
        for (let Eu = this.skeletons.length - 1; Eu >= 0; Eu--)
          if (this.skeletons[Eu].id === uu) return this.skeletons[Eu];
        return null
      }
      getSkeletonByUniqueId(uu) {
        for (let Eu = 0; Eu < this.skeletons.length; Eu++)
          if (this.skeletons[Eu].uniqueId === uu) return this.skeletons[Eu];
        return null
      }
      getSkeletonById(uu) {
        for (let Eu = 0; Eu < this.skeletons.length; Eu++)
          if (this.skeletons[Eu].id === uu) return this.skeletons[Eu];
        return null
      }
      getSkeletonByName(uu) {
        for (let Eu = 0; Eu < this.skeletons.length; Eu++)
          if (this.skeletons[Eu].name === uu) return this.skeletons[Eu];
        return null
      }
      getMorphTargetManagerById(uu) {
        for (let Eu = 0; Eu < this.morphTargetManagers.length; Eu++)
          if (this.morphTargetManagers[Eu].uniqueId === uu) return this.morphTargetManagers[Eu];
        return null
      }
      getMorphTargetById(uu) {
        for (let Eu = 0; Eu < this.morphTargetManagers.length; ++Eu) {
          const ju = this.morphTargetManagers[Eu];
          for (let Eu = 0; Eu < ju.numTargets; ++Eu) {
            const su = ju.getTarget(Eu);
            if (su.id === uu) return su
          }
        }
        return null
      }
      getMorphTargetByName(uu) {
        for (let Eu = 0; Eu < this.morphTargetManagers.length; ++Eu) {
          const ju = this.morphTargetManagers[Eu];
          for (let Eu = 0; Eu < ju.numTargets; ++Eu) {
            const su = ju.getTarget(Eu);
            if (su.name === uu) return su
          }
        }
        return null
      }
      getPostProcessByName(uu) {
        for (let Eu = 0; Eu < this.postProcesses.length; ++Eu) {
          const ju = this.postProcesses[Eu];
          if (ju.name === uu) return ju
        }
        return null
      }
      isActiveMesh(uu) {
        return -1 !== this._activeMeshes.indexOf(uu)
      }
      get uid() {
        return this._uid || (this._uid = su.h.RandomId()), this._uid
      }
      addExternalData(uu, Eu) {
        return this._externalData || (this._externalData = new qu), this._externalData.add(uu, Eu)
      }
      getExternalData(uu) {
        return this._externalData ? this._externalData.get(uu) : null
      }
      getOrAddExternalDataWithFactory(uu, Eu) {
        return this._externalData || (this._externalData = new qu), this._externalData.getOrAddWithFactory(uu, Eu)
      }
      removeExternalData(uu) {
        return this._externalData.remove(uu)
      }
      _evaluateSubMesh(uu, Eu, ju, su) {
        if (su || uu.isInFrustum(this._frustumPlanes)) {
          for (let su = 0, Uu = this._evaluateSubMeshStage; su < Uu.length; su++) {
            Uu[su].action(Eu, uu)
          }
          const ju = uu.oO();
          null !== ju && void 0 !== ju && (ju.hasRenderTargetTextures && null != ju.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(ju) && (this._processedMaterials.push(ju), this._materialsRenderTargets.concatWithNoDuplicate(ju.getRenderTargetTextures())), this._renderingManager.dispatch(uu, Eu, ju))
        }
      }
      freeProcessedMaterials() {
        this._processedMaterials.dispose()
      }
      get blockfreeActiveMeshesAndRenderingGroups() {
        return this._preventFreeActiveMeshesAndRenderingGroups
      }
      set blockfreeActiveMeshesAndRenderingGroups(uu) {
        this._preventFreeActiveMeshesAndRenderingGroups !== uu && (uu && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = uu)
      }
      freeActiveMeshes() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
          for (let uu = 0; uu < this.activeCameras.length; uu++) {
            const Eu = this.activeCameras[uu];
            Eu && Eu._activeMeshes && Eu._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let uu = 0; uu < this.textures.length; uu++) {
            const Eu = this.textures[uu];
            Eu && Eu.renderList && Eu.freeRenderingGroups()
          }
      }
      _isInIntermediateRendering() {
        return this._intermediateRendering
      }
      _isInRenderingMeshEvaluation() {
        return this._renderingMeshEvaluationDepth > 0
      }
      freezeActiveMeshes() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Eu = arguments.length > 1 ? arguments[1] : void 0,
          ju = arguments.length > 2 ? arguments[2] : void 0,
          su = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          Zu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const Xu = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const uu of Xu) uu.objectRenderer._freezeActiveMeshes(su);
          return this._freezeActiveMeshesCancel = (0, Uu.d)((() => {
            let uu = !0,
              Eu = !0;
            for (const ju of Xu) uu && (uu = ju.objectRenderer._isFrozen), Eu && (Eu = null !== ju.objectRenderer._freezeActiveMeshesCancel);
            if (uu) return !0;
            if (!Eu) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = Zu, this._skipEvaluateActiveMeshesCompletely = uu, Eu?.()
          }), ((uu, Eu) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), Eu) {
              const Eu = "Scene: Timeout while waiting for meshes to be frozen.";
              ju ? ju(Eu) : (uj.b.Error(Eu), uu && uj.b.Error(uu))
            } else {
              const Eu = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              ju ? ju(Eu) : (uj.b.Error(Eu), uu && (uj.b.Error(uu), uu.stack && uj.b.Error(uu.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = Zu, this._skipEvaluateActiveMeshesCompletely = uu, su)
              for (let uu = 0; uu < this._activeMeshes.length; uu++) this._activeMeshes.data[uu]._freeze();
            Eu && Eu()
          } else ju && ju("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let uu = 0; uu < this.meshes.length; uu++) {
          const Eu = this.meshes[uu];
          Eu._internalAbstractMeshDataInfo && (Eu._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const uu = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const Eu of uu) Eu.objectRenderer._unfreezeActiveMeshes()
        } else
          for (let uu = 0; uu < this._activeMeshes.length; uu++) this._activeMeshes.data[uu]._unFreeze();
        return this._activeMeshesFrozen = !1, this
      }
      _executeActiveContainerCleanup(uu) {
        (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => uu.dispose()))
      }
      _evaluateActiveMeshes() {
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset()));
        if (this._activeMeshesFrozen && this._activeMeshes.length) {
          if (!this._skipEvaluateActiveMeshesCompletely) {
            const uu = this._activeMeshes.length;
            for (let Eu = 0; Eu < uu; Eu++) {
              this._activeMeshes.data[Eu].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const uu = this._activeParticleSystems.length;
            for (let Eu = 0; Eu < uu; Eu++) this._activeParticleSystems.data[Eu].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let Uu = 0, Zu = this._beforeEvaluateActiveMeshStage; Uu < Zu.length; Uu++) {
          Zu[Uu].action()
        }
        const uu = this.getActiveMeshCandidates(),
          Eu = uu.length,
          ju = tu.b.Enabled,
          su = this.customLODSelector;
        for (let Uu = 0; Uu < Eu; Uu++) {
          const Eu = uu.data[Uu],
            Zu = !su && !Eu.JV && !Eu._internalMeshDataInfo?._LODLevels.length;
          let Xu, lu;
          if ((Zu || (Xu = Eu._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), Xu ? Xu[1] = -1 : (Xu = [Eu, -1], Eu._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, Xu))), !Eu.isBlocked) && (ju && this._totalVertices.addCount(Eu.getTotalVertices(), !1), Eu.isReady() && Eu.isEnabled() && !Eu.Of.hasAZeroComponent)) {
            if (Eu.computeWorldMatrix(), Eu.actionManager && Eu.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(Eu), Zu) lu = Eu;
            else if (lu = su ? su(Eu, this.activeCamera) : Eu.getLOD(this.activeCamera), Xu[0] = lu, Xu[1] = this._frameId, void 0 === lu || null === lu) continue;
            if (lu !== Eu && 0 !== lu.billboardMode && lu.computeWorldMatrix(), Eu._preActivate(), Eu.isVisible && Eu.visibility > 0 && 0 !== (Eu.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || Eu.JO || Eu.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(Eu), this.activeCamera._activeMeshes.push(Eu), lu !== Eu && lu._activate(this._renderId, !1);
              for (let uu = 0, ju = this._preActiveMeshStage; uu < ju.length; uu++) {
                ju[uu].action(Eu)
              }
              Eu._activate(this._renderId, !1) && (Eu.JV ? Eu._internalAbstractMeshDataInfo._actAsRegularMesh && (lu = Eu) : lu._internalAbstractMeshDataInfo._onlyForInstances = !1, lu._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(Eu, lu)), Eu._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let uu = 0; uu < this.WG.length; uu++) {
            const Eu = this.WG[uu];
            if (!Eu.isStarted() || !Eu.emitter) continue;
            const ju = Eu.emitter;
            ju.position && !ju.isEnabled() || (this._activeParticleSystems.push(Eu), Eu.animate(), this._renderingManager.dispatchParticles(Eu))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(uu) {
        this._skeletonsEnabled && uu.skeleton && (this._activeSkeletons.pushNoDuplicate(uu.skeleton) && (uu.skeleton.prepare(), this._activeBones.addCount(uu.skeleton.bones.length, !1)), uu.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(uu) && this.frameGraph && uu.applySkeleton(uu.skeleton))
      }
      _activeMesh(uu, Eu) {
        this._prepareSkeleton(Eu);
        let ju = uu.fUu || uu.JV || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || Eu.JO;
        if (Eu && Eu.iG && Eu.iG.length > 0) {
          const su = this.getActiveSubMeshCandidates(Eu),
            Uu = su.length;
          ju = ju || 1 === Uu;
          for (let Zu = 0; Zu < Uu; Zu++) {
            const Uu = su.data[Zu];
            this._evaluateSubMesh(Uu, Eu, uu, ju)
          }
        }
      }
      updateTransformMatrix(uu) {
        const Eu = this.activeCamera;
        if (Eu)
          if (Eu._renderingMultiview) {
            const ju = Eu._rigCameras[0],
              su = Eu._rigCameras[1];
            this.setTransformMatrix(ju.getViewMatrix(), ju.getProjectionMatrix(uu), su.getViewMatrix(), su.getProjectionMatrix(uu))
          } else this.setTransformMatrix(Eu.getViewMatrix(), Eu.getProjectionMatrix(uu))
      }
      _bindFrameBuffer(uu) {
        let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (uu && uu._multiviewTexture ? uu._multiviewTexture._bindFrameBuffer() : uu && uu.outputRenderTarget ? uu.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), Eu && this._clearFrameBuffer(uu)
      }
      _clearFrameBuffer(uu) {
        if (uu && uu._multiviewTexture);
        else if (uu && uu.outputRenderTarget && !uu._renderingMultiview) {
          const Eu = uu.outputRenderTarget;
          Eu.onClearObservable.hasObservers() ? Eu.onClearObservable.notifyObservers(this._engine) : Eu.skipInitialClear || uu.isRightCamera || (this.autoClear && this._engine.clear(Eu.clearColor || this._clearColor, !Eu._cleared, !0, !0), Eu._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(uu, Eu) {
        let ju = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (uu && uu._skipRendering) return;
        const Uu = this._engine;
        if (this._activeCamera = uu, !this.activeCamera) throw new Error("Active camera not set");
        if (Uu.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && ju) {
          let Eu = !0;
          uu._renderingMultiview && uu.outputRenderTarget && (Eu = uu.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, uu.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), uu._renderingMultiview && uu.outputRenderTarget && (uu.outputRenderTarget.skipInitialClear = Eu)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = uu.outputRenderTarget?.renderPassId ?? uu.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let su = 0; su < this._softwareSkinnedMeshes.length; su++) {
          const uu = this._softwareSkinnedMeshes.data[su];
          uu.applySkeleton(uu.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), uu.customRenderTargets && uu.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(uu.customRenderTargets), Eu && Eu.customRenderTargets && Eu.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(Eu.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let su = 0, lu = this._gatherActiveCameraRenderTargetsStage; su < lu.length; su++) {
          lu[su].action(this._renderTargets)
        }
        let Zu = !1;
        if (this.renderTargetsEnabled) {
          let uu;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            su.h.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const Eu = this.getBoundingBoxRenderer?.();
            for (let ju = 0; ju < this._renderTargets.length; ju++) {
              const su = this._renderTargets.data[ju];
              if (su._shouldRender()) {
                this._renderId++;
                const ju = su.activeCamera && su.activeCamera !== this.activeCamera;
                Eu && !uu && (uu = Eu.renderList.length > 0 ? Eu.renderList.data.slice() : [], uu.length = Eu.renderList.length), su.render(ju, this.dumpNextRenderTargets), Zu = !0
              }
            }
            Eu && uu && (Eu.renderList.data = uu, Eu.renderList.length = uu.length), su.h.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const Eu = this.getBoundingBoxRenderer?.();
            Eu && !uu && (uu = Eu.renderList.length > 0 ? Eu.renderList.data.slice() : [], uu.length = Eu.renderList.length);
            for (let uu = 0, ju = this._cameraDrawRenderTargetStage; uu < ju.length; uu++) {
              Zu = ju[uu].action(this.activeCamera) || Zu
            }
            Eu && uu && (Eu.renderList.data = uu, Eu.renderList.length = uu.length)
          }
          this._intermediateRendering = !1
        }
        Zu && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || uu._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let su = 0, lu = this._beforeCameraDrawStage; su < lu.length; su++) {
          lu[su].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const Xu = Uu.snapshotRendering && 1 === Uu.snapshotRenderingMode;
        Xu && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !Xu), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let su = 0, lu = this._afterCameraDrawStage; su < lu.length; su++) {
          lu[su].action(this.activeCamera)
        }
        if (this.postProcessManager && !uu._multiviewTexture) {
          const Eu = uu.outputRenderTarget ? uu.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(uu.isIntermediate, Eu)
        }
        for (let su = 0, lu = this._afterCameraPostProcessStage; su < lu.length; su++) {
          lu[su].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(uu) {
        let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === uu.cameraRigMode || uu._renderingMultiview) return uu._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(uu, void 0, Eu), void this.onAfterRenderCameraObservable.notifyObservers(uu);
        if (uu._useMultiviewToSingleView) this._renderMultiviewToSingleView(uu);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(uu);
          for (let Eu = 0; Eu < uu._rigCameras.length; Eu++) this._renderForCamera(uu._rigCameras[Eu], uu)
        }
        this._activeCamera = uu, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(uu)
      }
      _checkIntersections() {
        for (let uu = 0; uu < this._meshesForIntersections.length; uu++) {
          const Eu = this._meshesForIntersections.data[uu];
          if (Eu.actionManager)
            for (let uu = 0; Eu.actionManager && uu < Eu.actionManager.actions.length; uu++) {
              const ju = Eu.actionManager.actions[uu];
              if (12 === ju.trigger || 13 === ju.trigger) {
                const uu = ju.getTriggerParameter(),
                  su = uu.mesh ? uu.mesh : uu,
                  Uu = su.sUu(Eu, uu.usePreciseIntersection),
                  Zu = Eu._intersectionsInProgress.indexOf(su);
                Uu && -1 === Zu ? 12 === ju.trigger ? (ju._executeCurrent(Ou.CreateNew(Eu, void 0, su)), Eu._intersectionsInProgress.push(su)) : 13 === ju.trigger && Eu._intersectionsInProgress.push(su) : !Uu && Zu > -1 && (13 === ju.trigger && ju._executeCurrent(Ou.CreateNew(Eu, void 0, su)), Eu.actionManager.hasSpecificTrigger(13, (uu => {
                  const Eu = uu.mesh ? uu.mesh : uu;
                  return su === Eu
                })) && 13 !== ju.trigger || Eu._intersectionsInProgress.splice(Zu, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(uu) {}
      _animate(uu) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let uu = Math.max(Zj.MinDeltaTime, Math.min(this._engine.getDeltaTime(), Zj.MaxDeltaTime)) + this._timeAccumulator;
          const Eu = this._engine.getTimeStep(),
            ju = 1e3 / Eu / 1e3;
          let su = 0;
          const Uu = this._engine.getLockstepMaxSteps();
          let Zu = Math.floor(uu / Eu);
          for (Zu = Math.min(Zu, Uu); uu > 0 && su < Zu;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = Eu * ju, this._animate(Eu), this.onAfterAnimationsObservable.notifyObservers(this), this.HI && this._advancePhysicsEngineStep(Eu), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, su++, uu -= Eu;
          this._timeAccumulator = uu < 0 ? 0 : uu
        } else {
          const uu = this.useConstantAnimationDeltaTime ? 16 : Math.max(Zj.MinDeltaTime, Math.min(this._engine.getDeltaTime(), Zj.MaxDeltaTime));
          this._animationRatio = .06 * uu, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.HI && this._advancePhysicsEngineStep(uu)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(uu) {
        if (uu?.outputRenderTarget && !uu?.isRigCamera && (uu.outputRenderTarget._cleared = !1), uu?.rigCameras?.length)
          for (let Eu = 0; Eu < uu.rigCameras.length; ++Eu) {
            const ju = uu.rigCameras[Eu].outputRenderTarget;
            ju && (ju._cleared = !1)
          }
      }
      resetDrawCache(uu) {
        if (this.meshes)
          for (const Eu of this.meshes) Eu.resetDrawCache(uu)
      }
      _renderWithFrameGraph() {
        let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Eu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, uu)
          for (const ju of this.cameras)
            if (ju.update(), 0 !== ju.cameraRigMode)
              for (let uu = 0; uu < ju._rigCameras.length; uu++) ju._rigCameras[uu].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(Eu)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(uu) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const Eu = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), su.h.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let uu = 0; uu < this._renderTargets.length; uu++) {
            const ju = this._renderTargets.data[uu],
              su = ju.activeCamera || Eu;
            this._renderRenderTarget(ju, su, !0, this.dumpNextRenderTargets)
          }
          su.h.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let ju = 0, su = this._beforeClearStage; ju < su.length; ju++) {
          su[ju].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const Eu = this.getActiveMeshCandidates(),
            ju = Eu.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let uu = 0; uu < ju; uu++) {
                const ju = Eu.data[uu];
                ju._internalAbstractMeshDataInfo._wasActiveLastFrame && ju.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const uu = this._activeParticleSystems.length;
              for (let Eu = 0; Eu < uu; Eu++) this._activeParticleSystems.data[Eu].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let su = 0; su < ju; su++) {
              const ju = Eu.data[su];
              ju._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, ju.isBlocked || (this._totalVertices.addCount(ju.getTotalVertices(), !1), ju.isReady() && ju.isEnabled() && !ju.Of.hasAZeroComponent && (ju.computeWorldMatrix(uu), ju.actionManager && ju.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(ju)))
            }
            if (this.particlesEnabled)
              for (let uu = 0; uu < this.WG.length; uu++) {
                const Eu = this.WG[uu];
                if (!Eu.isStarted() || !Eu.emitter) continue;
                const ju = Eu.emitter;
                ju.position && !ju.isEnabled() || (this._activeParticleSystems.push(Eu), Eu.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, uu._shouldRender()) {
          if (this._renderId++, this.activeCamera = Eu, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), uu.render(ju, su)
        }
        this._intermediateRendering = !1
      }
      render() {
        let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.Gw) return;
        const ju = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(uu, Eu)
        } finally {
          this._renderingMeshEvaluationDepth = ju
        }
      }
      _renderFrame(uu, Eu) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), hu.b.hV = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const ju of this.activeCameras) this._checkCameraRenderTarget(ju);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), Eu || this.animate();
        for (let ju = 0, su = this._beforeCameraUpdateStage; ju < su.length; ju++) {
          su[ju].action()
        }
        if (uu)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let ju = 0; ju < this.activeCameras.length; ju++) {
              const uu = this.activeCameras[ju];
              if (uu.update(), 0 !== uu.cameraRigMode)
                for (let Eu = 0; Eu < uu._rigCameras.length; Eu++) uu._rigCameras[Eu].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let ju = 0; ju < this.activeCamera._rigCameras.length; ju++) this.activeCamera._rigCameras[ju].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(uu, Eu);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const uu = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            su.h.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let Eu = 0; Eu < this.customRenderTargets.length; Eu++) {
              const ju = this.customRenderTargets[Eu],
                su = ju.activeCamera || this.activeCamera;
              this._renderRenderTarget(ju, su, uu !== su, this.dumpNextRenderTargets)
            }
            su.h.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = uu?.renderPassId ?? 0, this.activeCamera = uu, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let Eu = 0, ju = this._beforeClearStage; Eu < ju.length; Eu++) {
            ju[Eu].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let Eu = 0, ju = this._gatherRenderTargetsStage; Eu < ju.length; Eu++) {
            ju[Eu].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let Eu = 0; Eu < this.activeCameras.length; Eu++) this._processSubCameras(this.activeCameras[Eu], Eu > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let ju = 0, su = this._afterRenderStage; ju < su.length; ju++) {
          su[ju].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let uu = 0; uu < this._toBeDisposed.length; uu++) {
            const Eu = this._toBeDisposed[uu];
            Eu && Eu.dispose()
          }
          this._toBeDisposed.length = 0
        }
        this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
      }
      freezeMaterials() {
        for (let uu = 0; uu < this.materials.length; uu++) this.materials[uu].freeze()
      }
      unfreezeMaterials() {
        for (let uu = 0; uu < this.materials.length; uu++) this.materials[uu].unfreeze()
      }
      dispose() {
        if (this.Gw) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, Gu.b)(this.stopAllAnimations)) {
          for (const uu of this._activeAnimatables) uu.onAnimationEndObservable.clear(), uu.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const uu = this._activeRequests.slice();
        for (const Zu of uu) Zu.abort();
        this._activeRequests.length = 0;
        try {
          this.wV.notifyObservers(this)
        } catch (Uu) {
          uj.b.Error("An error occurred while calling onDisposeObservable!", Uu)
        }
        this.detachControl();
        const Eu = this._engine.getInputElement?.();
        if (Eu)
          for (let Zu = 0; Zu < this.cameras.length; Zu++) this.cameras[Zu].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (uu => uu.dispose(!0))), this._disposeList(this.transformNodes, (uu => uu.dispose(!0)));
        const ju = this.cameras;
        this._disposeList(ju), this._disposeList(this.WG), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let su = this._engine.scenes.indexOf(this);
        if (su > -1 && this._engine.scenes.splice(su, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, hu.i)(), eu.b._LastCreatedScene === this) {
          eu.b._LastCreatedScene = null;
          let uu = eu.b.Instances.length - 1;
          for (; uu >= 0;) {
            const Eu = eu.b.Instances[uu];
            if (Eu.scenes.length > 0) {
              eu.b._LastCreatedScene = Eu.scenes[this._engine.scenes.length - 1];
              break
            }
            uu--
          }
        }
        su = this._engine._virtualScenes.indexOf(this), su > -1 && this._engine._virtualScenes.splice(su, 1), this._engine.wipeCaches(!0), this.wV.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(uu, Eu) {
        const ju = uu.slice(0);
        Eu = Eu ?? (uu => uu.dispose());
        for (const su of ju) Eu(su);
        uu.length = 0
      }
      get Gw() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let uu = 0; uu < this.meshes.length; uu++) {
          const Eu = this.meshes[uu].geometry;
          Eu && Eu.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const uu of this.textures) {
          uu._buffer && (uu._buffer = null)
        }
      }
      getWorldExtends(uu) {
        const Eu = new Cu.t(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          ju = new Cu.t(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        uu = uu || (() => !0);
        const su = this.meshes.filter(uu);
        for (const Uu of su) {
          if (Uu.computeWorldMatrix(!0), !Uu.iG || 0 === Uu.iG.length || Uu.infiniteDistance) continue;
          const uu = Uu.EW(),
            su = uu.boundingBox.minimumWorld,
            Zu = uu.boundingBox.maximumWorld;
          Cu.t.CheckExtends(su, Eu, ju), Cu.t.CheckExtends(Zu, Eu, ju)
        }
        return Eu.x === Number.MAX_VALUE ? {
          min: Cu.t.Zero(),
          max: Cu.t.Zero()
        } : {
          min: Eu,
          max: ju
        }
      }
      createPickingRay(uu, Eu, ju, su) {
        throw (0, Gu.h)("Ray")
      }
      createPickingRayToRef(uu, Eu, ju, su, Uu) {
        throw (0, Gu.h)("Ray")
      }
      createPickingRayInCameraSpace(uu, Eu, ju) {
        throw (0, Gu.h)("Ray")
      }
      createPickingRayInCameraSpaceToRef(uu, Eu, ju, su) {
        throw (0, Gu.h)("Ray")
      }
      Hc(uu, Eu, ju, su, Uu, Zu) {
        const Xu = (0, Gu.h)("Ray", !0);
        return Xu && uj.b.Warn(Xu), new Nu.b
      }
      pickWithBoundingInfo(uu, Eu, ju, su, Uu) {
        const Zu = (0, Gu.h)("Ray", !0);
        return Zu && uj.b.Warn(Zu), new Nu.b
      }
      pickWithRay(uu, Eu, ju, su) {
        throw (0, Gu.h)("Ray")
      }
      multiPick(uu, Eu, ju, su, Uu) {
        throw (0, Gu.h)("Ray")
      }
      multiPickWithRay(uu, Eu, ju) {
        throw (0, Gu.h)("Ray")
      }
      setPointerOverMesh(uu, Eu, ju) {
        this._inputManager.setPointerOverMesh(uu, Eu, ju)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const uu of this.geometries) uu._rebuild();
        for (const uu of this.meshes) uu._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const uu of this._components) uu.rebuild();
        for (const uu of this.WG) uu.rebuild();
        if (this.spriteManagers)
          for (const uu of this.spriteManagers) uu.rebuild()
      }
      _rebuildTextures() {
        for (const uu of this.textures) uu._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(uu, Eu, ju) {
        if (void 0 === Eu) return uu;
        const su = [];
        for (const Uu in uu) {
          const Zu = uu[Uu];
          fu.c && fu.c.MatchesQuery(Zu, Eu) && (!ju || ju(Zu)) && su.push(Zu)
        }
        return su
      }
      getMeshesByTags(uu, Eu) {
        return this._getByTags(this.meshes, uu, Eu)
      }
      getCamerasByTags(uu, Eu) {
        return this._getByTags(this.cameras, uu, Eu)
      }
      getLightsByTags(uu, Eu) {
        return this._getByTags(this.lights, uu, Eu)
      }
      getMaterialByTags(uu, Eu) {
        return this._getByTags(this.materials, uu, Eu).concat(this._getByTags(this.multiMaterials, uu, Eu))
      }
      getTransformNodesByTags(uu, Eu) {
        return this._getByTags(this.transformNodes, uu, Eu)
      }
      setRenderingOrder(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(uu, Eu, ju, su)
      }
      setRenderingAutoClearDepthStencil(uu, Eu) {
        let ju = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          su = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(uu, Eu, ju, su)
      }
      getAutoClearDepthStencilSetup(uu) {
        return this._renderingManager.getAutoClearDepthStencilSetup(uu)
      }
      _forceBlockMaterialDirtyMechanism(uu) {
        this._blockMaterialDirtyMechanism = uu
      }
      get blockMaterialDirtyMechanism() {
        return this._blockMaterialDirtyMechanism
      }
      set blockMaterialDirtyMechanism(uu) {
        this._blockMaterialDirtyMechanism !== uu && (this._blockMaterialDirtyMechanism = uu, uu || this.markAllMaterialsAsDirty(127))
      }
      markAllMaterialsAsDirty(uu, Eu) {
        if (!this._blockMaterialDirtyMechanism)
          for (const ju of this.materials) Eu && !Eu(ju) || ju.tEu(uu)
      }
      _loadFile(uu, Eu, ju, su, Uu, Zu, Xu) {
        const lu = (0, Au.m)(uu, Eu, ju, su ? this.offlineProvider : void 0, Uu, Zu, Xu);
        return this._activeRequests.push(lu), lu.onCompleteObservable.add((uu => {
          this._activeRequests.splice(this._activeRequests.indexOf(uu), 1)
        })), lu
      }
      async _loadFileAsync(uu, Eu, ju, su, Uu) {
        return await new Promise(((Zu, Xu) => {
          this._loadFile(uu, (uu => {
            Zu(uu)
          }), Eu, ju, su, ((uu, Eu) => {
            Xu(Eu)
          }), Uu)
        }))
      }
      async _loadDelayedFileAsync(uu, Eu, ju) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const su = `${uu}|${Eu?"binary":"string"}`;
        let Uu = this._delayedFileRequests.get(su);
        if (!Uu) {
          Uu = Eu ? this._loadFileAsync(uu, void 0, ju, !0) : this._loadFileAsync(uu, void 0, ju, !1);
          const Zu = Uu;
          (async () => {
            try {
              await Zu
            } catch {}
            this._delayedFileRequests?.delete(su)
          })(), this._delayedFileRequests.set(su, Uu)
        }
        return await Uu
      }
      _requestFile(uu, Eu, ju, su, Uu, Zu, Xu) {
        const lu = (0, Au.x)(uu, Eu, ju, su ? this.offlineProvider : void 0, Uu, Zu, Xu);
        return this._activeRequests.push(lu), lu.onCompleteObservable.add((uu => {
          this._activeRequests.splice(this._activeRequests.indexOf(uu), 1)
        })), lu
      }
      async _requestFileAsync(uu, Eu, ju, su, Uu) {
        return await new Promise(((Zu, Xu) => {
          this._requestFile(uu, (uu => {
            Zu(uu)
          }), Eu, ju, su, (uu => {
            Xu(uu)
          }), Uu)
        }))
      }
      _readFile(uu, Eu, ju, su, Uu) {
        const Zu = (0, Au.r)(uu, Eu, ju, su, Uu);
        return this._activeRequests.push(Zu), Zu.onCompleteObservable.add((uu => {
          this._activeRequests.splice(this._activeRequests.indexOf(uu), 1)
        })), Zu
      }
      async _readFileAsync(uu, Eu, ju) {
        return await new Promise(((su, Uu) => {
          this._readFile(uu, (uu => {
            su(uu)
          }), Eu, ju, (uu => {
            Uu(uu)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, Gu.h)("performanceViewerSceneExtension")
      }
      setActiveCameraByID(uu) {
        return this.setActiveCameraById(uu)
      }
      getMaterialByID(uu) {
        return this.getMaterialById(uu)
      }
      getLastMaterialByID(uu) {
        return this.getLastMaterialById(uu)
      }
      getTextureByUniqueID(uu) {
        return this.getTextureByUniqueId(uu)
      }
      getCameraByID(uu) {
        return this.getCameraById(uu)
      }
      getCameraByUniqueID(uu) {
        return this.getCameraByUniqueId(uu)
      }
      getBoneByID(uu) {
        return this.getBoneById(uu)
      }
      getLightByID(uu) {
        return this.getLightById(uu)
      }
      getLightByUniqueID(uu) {
        return this.getLightByUniqueId(uu)
      }
      getParticleSystemByID(uu) {
        return this.getParticleSystemById(uu)
      }
      getGeometryByID(uu) {
        return this.getGeometryById(uu)
      }
      getMeshByID(uu) {
        return this.getMeshById(uu)
      }
      getMeshByUniqueID(uu) {
        return this.getMeshByUniqueId(uu)
      }
      getLastMeshByID(uu) {
        return this.getLastMeshById(uu)
      }
      getMeshesByID(uu) {
        return this.getMeshesById(uu)
      }
      getTransformNodeByID(uu) {
        return this.getTransformNodeById(uu)
      }
      getTransformNodeByUniqueID(uu) {
        return this.getTransformNodeByUniqueId(uu)
      }
      getTransformNodesByID(uu) {
        return this.getTransformNodesById(uu)
      }
      getNodeByID(uu) {
        return this.getNodeById(uu)
      }
      getLastEntryByID(uu) {
        return this.getLastEntryById(uu)
      }
      getLastSkeletonByID(uu) {
        return this.getLastSkeletonById(uu)
      }
    }
    Zj.FOGMODE_NONE = 0, Zj.FOGMODE_EXP = 1, Zj.FOGMODE_EXP2 = 2, Zj.FOGMODE_LINEAR = 3, Zj.MinDeltaTime = 1, Zj.MaxDeltaTime = 1e3, Zj._OriginalDefaultMaterialFactory = Zj.DefaultMaterialFactory;
    let Xj = !1;

    function lj() {
      Xj || (Xj = !0, (0, Ej.f)("BABYLON.Scene", Zj))
    }(Ru = Zj.prototype).sortActiveAnimatables ?? (Ru.sortActiveAnimatables = (0, Gu.g)("Scene", "sortActiveAnimatables")), (uE = Zj.prototype).beginWeightedAnimation ?? (uE.beginWeightedAnimation = (0, Gu.g)("Scene", "beginWeightedAnimation")), (EE = Zj.prototype).beginAnimation ?? (EE.beginAnimation = (0, Gu.g)("Scene", "beginAnimation")), (jE = Zj.prototype).beginHierarchyAnimation ?? (jE.beginHierarchyAnimation = (0, Gu.g)("Scene", "beginHierarchyAnimation")), (sE = Zj.prototype).beginDirectAnimation ?? (sE.beginDirectAnimation = (0, Gu.g)("Scene", "beginDirectAnimation")), (UE = Zj.prototype).beginDirectHierarchyAnimation ?? (UE.beginDirectHierarchyAnimation = (0, Gu.g)("Scene", "beginDirectHierarchyAnimation")), (ZE = Zj.prototype).getAnimatableByTarget ?? (ZE.getAnimatableByTarget = (0, Gu.g)("Scene", "getAnimatableByTarget")), (XE = Zj.prototype).getAllAnimatablesByTarget ?? (XE.getAllAnimatablesByTarget = (0, Gu.g)("Scene", "getAllAnimatablesByTarget")), (lE = Zj.prototype).stopAllAnimations ?? (lE.stopAllAnimations = (0, Gu.g)("Scene", "stopAllAnimations")), (qE = Zj.prototype).getSoundByName ?? (qE.getSoundByName = (0, Gu.g)("Scene", "getSoundByName")), (fE = Zj.prototype).createOrUpdateSelectionOctree ?? (fE.createOrUpdateSelectionOctree = (0, Gu.g)("Scene", "createOrUpdateSelectionOctree")), (CE = Zj.prototype).createDefaultLight ?? (CE.createDefaultLight = (0, Gu.g)("Scene", "createDefaultLight")), (bE = Zj.prototype).createDefaultCamera ?? (bE.createDefaultCamera = (0, Gu.g)("Scene", "createDefaultCamera")), (cE = Zj.prototype).createDefaultCameraOrLight ?? (cE.createDefaultCameraOrLight = (0, Gu.g)("Scene", "createDefaultCameraOrLight")), (NE = Zj.prototype).createDefaultSkybox ?? (NE.createDefaultSkybox = (0, Gu.g)("Scene", "createDefaultSkybox")), (OE = Zj.prototype).createDefaultEnvironment ?? (OE.createDefaultEnvironment = (0, Gu.g)("Scene", "createDefaultEnvironment")), (YE = Zj.prototype).createDefaultVRExperience ?? (YE.createDefaultVRExperience = (0, Gu.g)("Scene", "createDefaultVRExperience")), (hE = Zj.prototype).createDefaultXRExperienceAsync ?? (hE.createDefaultXRExperienceAsync = (0, Gu.g)("Scene", "createDefaultXRExperienceAsync")), (DE = Zj.prototype).getGlowLayerByName ?? (DE.getGlowLayerByName = (0, Gu.g)("Scene", "getGlowLayerByName")), (gE = Zj.prototype).getHighlightLayerByName ?? (gE.getHighlightLayerByName = (0, Gu.g)("Scene", "getHighlightLayerByName")), (ME = Zj.prototype).getSelectionOutlineLayerByName ?? (ME.getSelectionOutlineLayerByName = (0, Gu.g)("Scene", "getSelectionOutlineLayerByName")), (eE = Zj.prototype).removeLensFlareSystem ?? (eE.removeLensFlareSystem = (0, Gu.g)("Scene", "removeLensFlareSystem")), (GE = Zj.prototype).addLensFlareSystem ?? (GE.addLensFlareSystem = (0, Gu.g)("Scene", "addLensFlareSystem")), (pE = Zj.prototype).getLensFlareSystemByName ?? (pE.getLensFlareSystemByName = (0, Gu.g)("Scene", "getLensFlareSystemByName")), (wE = Zj.prototype).getLensFlareSystemByID ?? (wE.getLensFlareSystemByID = (0, Gu.g)("Scene", "getLensFlareSystemByID")), (JE = Zj.prototype).getLensFlareSystemById ?? (JE.getLensFlareSystemById = (0, Gu.g)("Scene", "getLensFlareSystemById")), (dE = Zj.prototype).getPhysicsEngine ?? (dE.getPhysicsEngine = (0, Gu.g)("Scene", "getPhysicsEngine")), (aE = Zj.prototype).enablePhysics ?? (aE.enablePhysics = (0, Gu.g)("Scene", "enablePhysics")), (PE = Zj.prototype).disablePhysicsEngine ?? (PE.disablePhysicsEngine = (0, Gu.g)("Scene", "disablePhysicsEngine")), (oE = Zj.prototype).isPhysicsEnabled ?? (oE.isPhysicsEnabled = (0, Gu.g)("Scene", "isPhysicsEnabled")), (kE = Zj.prototype).deleteCompoundImpostor ?? (kE.deleteCompoundImpostor = (0, Gu.g)("Scene", "deleteCompoundImpostor")), (mE = Zj.prototype).removeReflectionProbe ?? (mE.removeReflectionProbe = (0, Gu.g)("Scene", "removeReflectionProbe")), (vE = Zj.prototype).addReflectionProbe ?? (vE.addReflectionProbe = (0, Gu.g)("Scene", "addReflectionProbe")), (KE = Zj.prototype).getBoundingBoxRenderer ?? (KE.getBoundingBoxRenderer = (0, Gu.g)("Scene", "getBoundingBoxRenderer")), (VE = Zj.prototype).enableDepthRenderer ?? (VE.enableDepthRenderer = (0, Gu.g)("Scene", "enableDepthRenderer")), (rE = Zj.prototype).disableDepthRenderer ?? (rE.disableDepthRenderer = (0, Gu.g)("Scene", "disableDepthRenderer")), (QE = Zj.prototype).enableFluidRenderer ?? (QE.enableFluidRenderer = (0, Gu.g)("Scene", "enableFluidRenderer")), (iE = Zj.prototype).disableFluidRenderer ?? (iE.disableFluidRenderer = (0, Gu.g)("Scene", "disableFluidRenderer")), (WE = Zj.prototype).enableGeometryBufferRenderer ?? (WE.enableGeometryBufferRenderer = (0, Gu.g)("Scene", "enableGeometryBufferRenderer")), (SE = Zj.prototype).disableGeometryBufferRenderer ?? (SE.disableGeometryBufferRenderer = (0, Gu.g)("Scene", "disableGeometryBufferRenderer")), (IE = Zj.prototype).enableIblCdfGenerator ?? (IE.enableIblCdfGenerator = (0, Gu.g)("Scene", "enableIblCdfGenerator")), (FE = Zj.prototype).disableIblCdfGenerator ?? (FE.disableIblCdfGenerator = (0, Gu.g)("Scene", "disableIblCdfGenerator")), (BE = Zj.prototype).getOutlineRenderer ?? (BE.getOutlineRenderer = (0, Gu.g)("Scene", "getOutlineRenderer")), (LE = Zj.prototype).enablePrePassRenderer ?? (LE.enablePrePassRenderer = (0, Gu.g)("Scene", "enablePrePassRenderer")), (tE = Zj.prototype).disablePrePassRenderer ?? (tE.disablePrePassRenderer = (0, Gu.g)("Scene", "disablePrePassRenderer")), (xE = Zj.prototype).enableSubSurfaceForPrePass ?? (xE.enableSubSurfaceForPrePass = (0, Gu.g)("Scene", "enableSubSurfaceForPrePass")), (TE = Zj.prototype).disableSubSurfaceForPrePass ?? (TE.disableSubSurfaceForPrePass = (0, Gu.g)("Scene", "disableSubSurfaceForPrePass")), (HE = Zj.prototype).pickSprite ?? (HE.pickSprite = (0, Gu.g)("Scene", "pickSprite")), (AE = Zj.prototype).pickSpriteWithRay ?? (AE.pickSpriteWithRay = (0, Gu.g)("Scene", "pickSpriteWithRay")), (nE = Zj.prototype).multiPickSprite ?? (nE.multiPickSprite = (0, Gu.g)("Scene", "multiPickSprite")), (yE = Zj.prototype).multiPickSpriteWithRay ?? (yE.multiPickSpriteWithRay = (0, Gu.g)("Scene", "multiPickSpriteWithRay")), (zE = Zj.prototype).setPointerOverSprite ?? (zE.setPointerOverSprite = (0, Gu.g)("Scene", "setPointerOverSprite")), (RE = Zj.prototype).getPointerOverSprite ?? (RE.getPointerOverSprite = (0, Gu.g)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(Zj.prototype, "mainSoundTrack") || Object.defineProperty(Zj.prototype, "mainSoundTrack", (0, Gu.d)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(Zj.prototype, "soundTracks") || Object.defineProperty(Zj.prototype, "soundTracks", (0, Gu.d)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(Zj.prototype, "audioEnabled") || Object.defineProperty(Zj.prototype, "audioEnabled", (0, Gu.d)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(Zj.prototype, "headphone") || Object.defineProperty(Zj.prototype, "headphone", (0, Gu.d)("Scene", "headphone")), Object.getOwnPropertyDescriptor(Zj.prototype, "audioListenerPositionProvider") || Object.defineProperty(Zj.prototype, "audioListenerPositionProvider", (0, Gu.d)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(Zj.prototype, "audioListenerRotationProvider") || Object.defineProperty(Zj.prototype, "audioListenerRotationProvider", (0, Gu.d)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(Zj.prototype, "audioPositioningRefreshRate") || Object.defineProperty(Zj.prototype, "audioPositioningRefreshRate", (0, Gu.d)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(Zj.prototype, "selectionOctree") || Object.defineProperty(Zj.prototype, "selectionOctree", (0, Gu.d)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(Zj.prototype, "debugLayer") || Object.defineProperty(Zj.prototype, "debugLayer", (0, Gu.d)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(Zj.prototype, "gamepadManager") || Object.defineProperty(Zj.prototype, "gamepadManager", (0, Gu.d)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(Zj.prototype, "simplificationQueue") || Object.defineProperty(Zj.prototype, "simplificationQueue", (0, Gu.d)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(Zj.prototype, "onBeforePhysicsObservable") || Object.defineProperty(Zj.prototype, "onBeforePhysicsObservable", (0, Gu.d)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(Zj.prototype, "onAfterPhysicsObservable") || Object.defineProperty(Zj.prototype, "onAfterPhysicsObservable", (0, Gu.d)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(Zj.prototype, "reflectionProbes") || Object.defineProperty(Zj.prototype, "reflectionProbes", (0, Gu.d)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(Zj.prototype, "forceShowBoundingBoxes") || Object.defineProperty(Zj.prototype, "forceShowBoundingBoxes", (0, Gu.d)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(Zj.prototype, "depthPeelingRenderer") || Object.defineProperty(Zj.prototype, "depthPeelingRenderer", (0, Gu.d)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(Zj.prototype, "useOrderIndependentTransparency") || Object.defineProperty(Zj.prototype, "useOrderIndependentTransparency", (0, Gu.d)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(Zj.prototype, "fluidRenderer") || Object.defineProperty(Zj.prototype, "fluidRenderer", (0, Gu.d)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(Zj.prototype, "geometryBufferRenderer") || Object.defineProperty(Zj.prototype, "geometryBufferRenderer", (0, Gu.d)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(Zj.prototype, "iblCdfGenerator") || Object.defineProperty(Zj.prototype, "iblCdfGenerator", (0, Gu.d)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(Zj.prototype, "prePassRenderer") || Object.defineProperty(Zj.prototype, "prePassRenderer", (0, Gu.d)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(Zj.prototype, "subSurfaceConfiguration") || Object.defineProperty(Zj.prototype, "subSurfaceConfiguration", (0, Gu.d)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(Zj.prototype, "spriteManagers") || Object.defineProperty(Zj.prototype, "spriteManagers", (0, Gu.d)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(Zj.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(Zj.prototype, "onBeforeSpritesRenderingObservable", (0, Gu.d)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(Zj.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(Zj.prototype, "onAfterSpritesRenderingObservable", (0, Gu.d)("Scene", "onAfterSpritesRenderingObservable"))
  },
  40422: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => su,
      e: () => Uu
    });
    class su {}
    su.NAME_EFFECTLAYER = "EffectLayer", su.NAME_LAYER = "Layer", su.NAME_LENSFLARESYSTEM = "LensFlareSystem", su.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", su.NAME_PARTICLESYSTEM = "ParticleSystem", su.NAME_GAMEPAD = "Gamepad", su.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", su.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", su.NAME_PREPASSRENDERER = "PrePassRenderer", su.NAME_DEPTHRENDERER = "DepthRenderer", su.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", su.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", su.NAME_SPRITE = "Sprite", su.NAME_SUBSURFACE = "SubSurface", su.NAME_OUTLINERENDERER = "Outline", su.NAME_PROCEDURALTEXTURE = "ProceduralTexture", su.NAME_SHADOWGENERATOR = "ShadowGenerator", su.NAME_OCTREE = "asu", su.NAME_PHYSICSENGINE = "PhysicsEngine", su.NAME_AUDIO = "Audio", su.NAME_FLUIDRENDERER = "FluidRenderer", su.NAME_IBLCDFGENERATOR = "iblCDFGenerator", su.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", su.STEP_ISREADYFORMESH_EFFECTLAYER = 0, su.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, su.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, su.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, su.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, su.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, su.STEP_BEFORECAMERADRAW_PREPASS = 0, su.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, su.STEP_BEFORECAMERADRAW_LAYER = 2, su.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, su.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, su.STEP_BEFORERENDERINGMESH_PREPASS = 0, su.STEP_BEFORERENDERINGMESH_OUTLINE = 1, su.STEP_AFTERRENDERINGMESH_PREPASS = 0, su.STEP_AFTERRENDERINGMESH_OUTLINE = 1, su.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, su.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, su.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, su.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, su.STEP_BEFORECLEAR_PREPASS = 1, su.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, su.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, su.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, su.STEP_AFTERCAMERADRAW_PREPASS = 0, su.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, su.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, su.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, su.STEP_AFTERCAMERADRAW_LAYER = 4, su.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, su.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, su.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, su.STEP_AFTERRENDER_AUDIO = 0, su.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, su.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, su.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, su.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, su.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, su.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, su.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, su.STEP_POINTERMOVE_SPRITE = 0, su.STEP_POINTERDOWN_SPRITE = 0, su.STEP_POINTERUP_SPRITE = 0;
    class Uu extends Array {
      constructor(uu) {
        super(...uu)
      }
      static Create() {
        return Object.create(Uu.prototype)
      }
      registerStep(uu, Eu, ju) {
        let su, Uu = 0;
        for (; Uu < this.length; Uu++) {
          if (su = this[Uu].index, uu < su) break
        }
        this.splice(Uu, 0, {
          index: uu,
          component: Eu,
          action: ju.bind(Eu)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  40255: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Xu,
      d: () => lu,
      e: () => su,
      g: () => Uu,
      h: () => Zu
    });

    function su(uu, Eu, ju, su, Uu, Zu) {
      function Xu(uu) {
        if (void 0 !== uu && "function" !== typeof uu) throw new TypeError("Function expected");
        return uu
      }
      for (var lu, qu = su.kind, fu = "getter" === qu ? "get" : "setter" === qu ? "set" : "value", Cu = !Eu && uu ? su.static ? uu : uu.prototype : null, bu = Eu || (Cu ? Object.getOwnPropertyDescriptor(Cu, su.name) : {}), cu = !1, Nu = ju.length - 1; Nu >= 0; Nu--) {
        var Ou = {};
        for (var Yu in su) Ou[Yu] = "access" === Yu ? {} : su[Yu];
        for (var Yu in su.access) Ou.access[Yu] = su.access[Yu];
        Ou.addInitializer = function(uu) {
          if (cu) throw new TypeError("Cannot add initializers after decoration has completed");
          Zu.push(Xu(uu || null))
        };
        var hu = (0, ju[Nu])("accessor" === qu ? {
          get: bu.get,
          set: bu.set
        } : bu[fu], Ou);
        if ("accessor" === qu) {
          if (void 0 === hu) continue;
          if (null === hu || "object" !== typeof hu) throw new TypeError("Object expected");
          (lu = Xu(hu.get)) && (bu.get = lu), (lu = Xu(hu.set)) && (bu.set = lu), (lu = Xu(hu.init)) && Uu.unshift(lu)
        } else(lu = Xu(hu)) && ("field" === qu ? Uu.unshift(lu) : bu[fu] = lu)
      }
      Cu && Object.defineProperty(Cu, su.name, bu), cu = !0
    }

    function Uu(uu, Eu, ju) {
      for (var su = arguments.length > 2, Uu = 0; Uu < Eu.length; Uu++) ju = su ? Eu[Uu].call(uu, ju) : Eu[Uu].call(uu);
      return su ? ju : void 0
    }

    function Zu(uu, Eu, ju) {
      return "symbol" === typeof Eu && (Eu = Eu.description ? "[".concat(Eu.description, "]") : ""), Object.defineProperty(uu, "name", {
        configurable: !0,
        value: ju ? "".concat(ju, " ", Eu) : Eu
      })
    }
    Object.create;
    Object.create;

    function Xu(uu, Eu, ju, su) {
      if ("a" === ju && !su) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof Eu ? uu !== Eu || !su : !Eu.has(uu)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === ju ? su : "a" === ju ? su.call(uu) : su ? su.value : Eu.get(uu)
    }

    function lu(uu, Eu, ju, su, Uu) {
      if ("m" === su) throw new TypeError("Private method is not writable");
      if ("a" === su && !Uu) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof Eu ? uu !== Eu || !Uu : !Eu.has(uu)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === su ? Uu.call(uu, ju) : Uu ? Uu.value = ju : Eu.set(uu, ju), ju
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);