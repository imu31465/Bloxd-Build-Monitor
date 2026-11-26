export const id = 294;
export const ids = [294];
export const modules = {
  41652: (UU, XU, zU) => {
    zU.d(XU, {
      $: () => Ac,
      $b: () => qU,
      $f: () => fz,
      A: () => mU,
      Ab: () => zz,
      Af: () => Xc,
      Bc: () => mX,
      Bd: () => rU,
      Be: () => nz,
      Cb: () => Xz,
      Cc: () => VU,
      Cf: () => Tz,
      D: () => xX,
      E: () => NU,
      Ed: () => SU,
      Fe: () => Iz,
      Gb: () => IX,
      Gc: () => lU,
      Gd: () => fU,
      Gf: () => Uc,
      H: () => yX,
      Hd: () => uU,
      Ic: () => JX,
      Ie: () => Jz,
      Jf: () => zc,
      Kb: () => FX,
      Kc: () => cX,
      Ke: () => lz,
      L: () => eU,
      Ld: () => pX,
      Mb: () => yU,
      Mf: () => jz,
      Nb: () => gU,
      Nc: () => YX,
      Ne: () => Sz,
      Nf: () => Rz,
      O: () => wU,
      Oc: () => LU,
      Od: () => oU,
      Pe: () => uz,
      Qe: () => rz,
      Qf: () => tz,
      R: () => CU,
      Rb: () => kX,
      Rc: () => DX,
      Rd: () => EU,
      Sc: () => oX,
      Sd: () => tX,
      Tc: () => zX,
      U: () => sX,
      Ud: () => lX,
      Ue: () => bz,
      Uf: () => Kz,
      Vb: () => KU,
      Vc: () => dU,
      Vf: () => iz,
      X: () => IU,
      Xd: () => vU,
      Xe: () => Oz,
      Xf: () => Hz,
      Yb: () => Uz,
      Ye: () => Mz,
      Zc: () => BU,
      Ze: () => qz,
      Zf: () => Gz,
      _: () => nU,
      _d: () => NX,
      _e: () => sz,
      _f: () => az,
      ab: () => hX,
      ad: () => cU,
      ae: () => jX,
      af: () => Vz,
      ag: () => Pz,
      bc: () => TU,
      be: () => vX,
      cd: () => WU,
      d: () => QU,
      db: () => jU,
      dc: () => bU,
      de: () => UX,
      eb: () => bX,
      ef: () => vz,
      eg: () => Bz,
      f: () => AU,
      fc: () => XX,
      g: () => PU,
      gd: () => AX,
      ge: () => hU,
      hf: () => Qc,
      hg: () => xz,
      ib: () => TX,
      ic: () => aX,
      j: () => iU,
      jb: () => JU,
      jg: () => kz,
      kd: () => tU,
      ke: () => sU,
      kf: () => Wz,
      kg: () => mz,
      l: () => Dz,
      lc: () => xU,
      le: () => ZU,
      lg: () => Nz,
      mb: () => KX,
      mf: () => Cz,
      mg: () => pz,
      nd: () => aU,
      nf: () => dz,
      oc: () => OU,
      oe: () => YU,
      p: () => Fz,
      pe: () => oz,
      qb: () => HU,
      qc: () => QX,
      qf: () => wz,
      rd: () => pU,
      s: () => FU,
      sb: () => cz,
      sc: () => kU,
      se: () => cc,
      ud: () => Qz,
      uf: () => ez,
      vd: () => Az,
      vf: () => Lz,
      w: () => VX,
      wb: () => yz,
      wc: () => GU,
      we: () => gz,
      xe: () => Zz,
      xf: () => yc,
      yc: () => EX,
      yd: () => RU,
      yf: () => hz,
      z: () => nX,
      zb: () => MU,
      zc: () => DU
    });
    const cU = -2147483648,
      yU = 12,
      QU = 12,
      AU = 4095,
      FU = {
        Lifeform: 1,
        Throwable: 2,
        Mesh: 3,
        Audio: 4,
        Item: 5
      },
      oU = {
        Alive: 1,
        Crouching: 2,
        OnGround: 4,
        InFluid: 8,
        Spectating: 16,
        AttemptingBreak: 32,
        Aiming: 64,
        FirstPerson: 128,
        Replay: 256,
        Breaking: 512,
        CursorAim: 1024,
        FreeCam: 2048,
        ZoomFirstPerson: 4096,
        JumpHeld: 8192,
        Flying: 16384,
        CanFly: 32768,
        PadSneakToggled: 65536,
        DropAhead: 131072,
        FreeCamMoves: 262144
      },
      DU = {
        None: 0,
        Entity: 1,
        Open: 2,
        Close: 3,
        Milk: 4,
        Shear: 5,
        Tame: 6,
        TameWith: 7,
        Feed: 8,
        Ride: 9
      },
      EU = {
        Off: 0,
        Key: 1,
        Touch: 2
      },
      YU = {
        Alive: 16
      },
      NU = 32,
      IU = {
        Stored: 1,
        Unloaded: 2,
        ResetAll: 4
      },
      pU = {
        opacity: 0,
        zIndex: 1,
        overlayColour: 2,
        canAttack: 3,
        canSee: 4,
        interactable: 5,
        interactionPrompt: 6,
        showDamageAmounts: 7,
        lockHeadToBody: 8,
        killfeedColour: 9,
        meshScaling: 10,
        colorInLobbyLeaderboard: 11,
        lobbyLeaderboardValues: 12,
        lobbyLeaderboardTags: 13,
        nameTagInfo: 14,
        hasPriorityNametag: 15,
        alwaysInInterest: 16,
        multilineTextBox: 17,
        ranks: 18,
        nameColour: 19,
        hideNameSeed: 20,
        _leaderboardAround: 21,
        _invincible: 22,
        _isAlive: 23,
        _invisibleEffect: 24,
        _glowingEffect: 25,
        _armourReductionSum: 26,
        _protectionEnchantSum: 27,
        _receivingDamageMultiplier: 28
      },
      aU = 4294967295,
      tU = 0,
      gU = 4294967295,
      kU = 4,
      GU = 123,
      BU = -2147483648,
      ZU = {
        Off: 0,
        All: 1,
        Filter: 2
      },
      RU = 51,
      PU = 5,
      WU = 4294967295,
      dU = 4294967295,
      LU = 128,
      eU = ["Workbench", "Furnace", "Artisan Bench", "Potion Table", "Salvaging Table", "Enchanting Table"],
      CU = 16,
      wU = 255,
      qU = {
        Off: 0,
        On: 1,
        Keep: 2
      },
      OU = {
        AltVeto: 1,
        AltAction: 2,
        Click: 3,
        ChangeBlock: 4,
        DropItem: 5,
        Tick: 6,
        Message: 7,
        Create: 8,
        Director: 11
      },
      SU = {
        Hotbar: 256,
        Drop: 257
      },
      rU = {
        Down: 1,
        Next: 2,
        Stack: 4,
        Repeat: 8
      },
      uU = {
        Rate: 0,
        Gyro: 1
      },
      fU = {
        Active: 1,
        JumpHeld: 2,
        JumpPressed: 4,
        Running: 8,
        SprintHeld: 16,
        SneakHeld: 32,
        SneakHoldMode: 64,
        Peek: 128,
        EndToggle: 256
      },
      iU = {
        Prevent: 0,
        Allow: 1,
        PreventPlacement: 2
      },
      HU = {
        None: 0,
        Pose: 1,
        FaceMovement: 2,
        FaceCamera: 3,
        FaceCursor: 4
      },
      MU = {
        LookPointed: 1,
        Held: 2
      },
      vU = 3,
      VU = {
        Synced: 0,
        ChestOpened: 1,
        ChestClosed: 2,
        ChestRefreshed: 3,
        EnchantingTable: 4,
        HotbarRequest: 5,
        Scrolled: 6,
        NumberKey: 7,
        DropRequested: 8
      },
      sU = {
        ToggleMenu: 0,
        EditBoard: 1,
        EditCodeBlock: 2,
        ViewCodeBlock: 3,
        EditCustomLobbyBlock: 4,
        OpenIronChest: 5,
        EditNameTag: 6,
        EditBook: 7,
        CantChangeBlock: 8,
        MiddleBarStart: 9,
        MiddleBarStop: 10,
        AimingOverlay: 11,
        BottomMessage: 12,
        Hitmarker: 13,
        ShotsLeft: 14,
        Crosshair: 15,
        ChargeStage: 16,
        EmoteWheelClose: 17,
        BlockMined: 18
      },
      nU = {
        Alt: 1,
        Up: 2,
        HasPos: 4,
        AttackOnly: 8
      },
      mU = {
        Solid: 1,
        Fluid: 2,
        PlaceOver: 4
      },
      lU = {
        Stackable: 1
      },
      xU = {
        granule: 1,
        wood: 2,
        rock: 3,
        cuttable: 4
      },
      JU = {
        Detail: 1,
        RoomForOne: 2
      },
      jU = {
        HaveIngredients: 1,
        Listed: 2
      },
      KU = {
        HasOpts: 1
      },
      bU = {
        Flat: 0,
        Chevrons: 1,
        FurnaceFire: 2,
        FlatOpaque: 3,
        FlatOnTop: 4
      },
      TU = {
        Up: 1,
        Down: 2
      },
      hU = {
        TwoD: 1,
        Loop: 2
      },
      UX = {
        StopAfter: 1
      },
      XX = {
        Anchor: 1,
        Visible: 2,
        UvOffset: 4,
        Visibility: 8,
        Scale: 16
      },
      zX = {
        Pose: 1,
        Visible: 2,
        Clip: 4,
        Perch: 8
      },
      cX = 255,
      yX = 65535,
      QX = 255,
      AX = 65535,
      FX = ["standing", "sitting", "zombie", "gliding", "driving", "sleeping", "riding"],
      oX = ["", "Sheared", "Saddled", "Antlers", "skyblockHeldBoss"],
      DX = ["Box", "BloxdBlock", "Person", "Leaderboard", "ParticleEmitter"],
      EX = {
        Bytes: 16,
        Hidden: 2147483648,
        Max: 262144
      },
      YX = 4294967295,
      NX = 4294967295,
      IX = 255,
      pX = {
        PresetNone: 65535,
        HasBox: 1,
        Anchored: 1,
        MaxOpts: 4096,
        MaxBurst: 2e3,
        MaxPoints: 512,
        PointBytes: 16,
        MaxKey: 1073741823,
        MaxLiveKeys: 256
      },
      aX = {
        critical: 123
      },
      tX = 4294967295,
      gX = {
        BYTES: 4,
        LY: (UU, XU) => UU.getUint32(XU + 0, !0)
      },
      kX = {
        BYTES: 12,
        serverId: (UU, XU) => UU.getInt32(XU + 0, !0),
        index: (UU, XU) => UU.getUint32(XU + 4, !0),
        kind: (UU, XU) => UU.getUint16(XU + 8, !0)
      },
      GX = {
        BYTES: 20,
        pos: (UU, XU, zU) => UU.getInt32(XU + 0 + 4 * zU, !0),
        actual: (UU, XU) => UU.getUint32(XU + 12, !0),
        dataLen: (UU, XU) => UU.getUint32(XU + 16, !0)
      },
      BX = {
        BYTES: 20,
        what: (UU, XU) => UU.getUint8(XU + 0),
        value: (UU, XU) => UU.getInt16(XU + 2, !0),
        pos: (UU, XU, zU) => UU.getInt32(XU + 4 + 4 * zU, !0),
        block: (UU, XU) => UU.getUint32(XU + 16, !0)
      },
      ZX = {
        BYTES: 4,
        item: (UU, XU) => UU.getUint16(XU + 0, !0),
        slot: (UU, XU) => UU.getUint8(XU + 2)
      },
      RX = {
        BYTES: 16,
        target: (UU, XU) => UU.getInt32(XU + 0, !0),
        damage: (UU, XU) => UU.getFloat32(XU + 4, !0),
        distance: (UU, XU) => UU.getFloat32(XU + 8, !0),
        crit: (UU, XU) => UU.getUint8(XU + 12)
      },
      PX = {
        BYTES: 4,
        slot: (UU, XU) => UU.getUint16(XU + 0, !0)
      },
      WX = {
        BYTES: 20,
        what: (UU, XU) => UU.getUint8(XU + 0),
        value: (UU, XU) => UU.getInt16(XU + 2, !0),
        pos: (UU, XU, zU) => UU.getInt32(XU + 4 + 4 * zU, !0),
        block: (UU, XU) => UU.getUint32(XU + 16, !0)
      },
      dX = {
        BYTES: 12,
        serverId: (UU, XU) => UU.getInt32(XU + 0, !0),
        index: (UU, XU) => UU.getUint32(XU + 4, !0),
        what: (UU, XU) => UU.getUint16(XU + 8, !0)
      },
      LX = {
        BYTES: 24,
        cx: (UU, XU) => UU.getInt32(XU + 0, !0),
        cy: (UU, XU) => UU.getInt32(XU + 4, !0),
        cz: (UU, XU) => UU.getInt32(XU + 8, !0),
        slot: (UU, XU) => UU.getUint32(XU + 12, !0),
        generation: (UU, XU) => UU.getUint32(XU + 16, !0),
        flags: (UU, XU) => UU.getUint32(XU + 20, !0)
      },
      eX = {
        BYTES: 44,
        pos: (UU, XU, zU) => UU.getFloat64(XU + 0 + 8 * zU, !0),
        sound: (UU, XU) => UU.getUint16(XU + 24, !0),
        flags: (UU, XU) => UU.getUint16(XU + 26, !0),
        handle: (UU, XU) => UU.getUint32(XU + 28, !0),
        volume: (UU, XU) => UU.getFloat32(XU + 32, !0),
        rate: (UU, XU) => UU.getFloat32(XU + 36, !0),
        refDist: (UU, XU) => UU.getFloat32(XU + 40, !0)
      },
      CX = {
        BYTES: 28,
        pos: (UU, XU, zU) => UU.getFloat64(XU + 0 + 8 * zU, !0),
        handle: (UU, XU) => UU.getUint32(XU + 24, !0)
      },
      wX = {
        BYTES: 16,
        handle: (UU, XU) => UU.getUint32(XU + 0, !0),
        volume: (UU, XU) => UU.getFloat32(XU + 4, !0),
        rate: (UU, XU) => UU.getFloat32(XU + 8, !0),
        refDist: (UU, XU) => UU.getFloat32(XU + 12, !0)
      },
      qX = {
        BYTES: 12,
        handle: (UU, XU) => UU.getUint32(XU + 0, !0),
        to: (UU, XU) => UU.getFloat32(XU + 4, !0),
        ms: (UU, XU) => UU.getUint16(XU + 8, !0),
        flags: (UU, XU) => UU.getUint16(XU + 10, !0)
      },
      OX = {
        BYTES: 4,
        handle: (UU, XU) => UU.getUint32(XU + 0, !0)
      },
      SX = {
        BYTES: 8,
        reason: (UU, XU) => UU.getUint8(XU + 0),
        code: (UU, XU) => UU.getUint8(XU + 1),
        version: (UU, XU) => UU.getUint32(XU + 4, !0)
      },
      rX = {
        BYTES: 4,
        key: (UU, XU) => UU.getUint8(XU + 0),
        tag: (UU, XU) => UU.getUint8(XU + 1)
      },
      uX = {
        BYTES: 16,
        save: (UU, XU) => UU.getUint32(XU + 0, !0),
        index: (UU, XU) => UU.getUint32(XU + 4, !0),
        ptr: (UU, XU) => UU.getUint32(XU + 8, !0),
        len: (UU, XU) => UU.getUint32(XU + 12, !0)
      },
      fX = {
        BYTES: 16,
        save: (UU, XU) => UU.getUint32(XU + 0, !0),
        kind: (UU, XU) => UU.getUint8(XU + 4),
        parts: (UU, XU) => UU.getUint32(XU + 8, !0),
        bytes: (UU, XU) => UU.getUint32(XU + 12, !0)
      },
      iX = {
        BYTES: 4,
        totalTicks: (UU, XU) => UU.getUint32(XU + 0, !0)
      },
      HX = {
        BYTES: 24,
        what: (UU, XU) => UU.getUint8(XU + 0),
        int: (UU, XU) => UU.getInt32(XU + 4, !0),
        x: (UU, XU) => UU.getFloat64(XU + 8, !0),
        y: (UU, XU) => UU.getFloat64(XU + 16, !0)
      },
      MX = {
        BYTES: 8,
        what: (UU, XU) => UU.getUint8(XU + 0),
        kind: (UU, XU) => UU.getUint8(XU + 1),
        save: (UU, XU) => UU.getUint32(XU + 4, !0)
      },
      vX = {
        BYTES: 4,
        TE: (UU, XU) => UU.getUint16(XU + 0, !0)
      },
      VX = {
        BYTES: 360,
        eye: (UU, XU, zU) => UU.getFloat64(XU + 0 + 8 * zU, !0),
        localPos: (UU, XU, zU) => UU.getFloat64(XU + 24 + 8 * zU, !0),
        rXU: (UU, XU, zU) => UU.getFloat64(XU + 48 + 8 * zU, !0),
        viewProj: (UU, XU, zU) => UU.getFloat32(XU + 72 + 4 * zU, !0),
        origin: (UU, XU, zU) => UU.getInt32(XU + 136 + 4 * zU, !0),
        heading: (UU, XU) => UU.getFloat32(XU + 148, !0),
        pitch: (UU, XU) => UU.getFloat32(XU + 152, !0),
        tanHalfFovX: (UU, XU) => UU.getFloat32(XU + 156, !0),
        tanHalfFovY: (UU, XU) => UU.getFloat32(XU + 160, !0),
        viewportCss: (UU, XU, zU) => UU.getFloat32(XU + 164 + 4 * zU, !0),
        localVel: (UU, XU, zU) => UU.getFloat32(XU + 172 + 4 * zU, !0),
        actionDir: (UU, XU, zU) => UU.getFloat32(XU + 184 + 4 * zU, !0),
        localId: (UU, XU) => UU.getInt32(XU + 196, !0),
        playerFlags: (UU, XU) => UU.getUint32(XU + 200, !0),
        targetBlock: (UU, XU, zU) => UU.getInt32(XU + 204 + 4 * zU, !0),
        targetAdjacent: (UU, XU, zU) => UU.getInt32(XU + 216 + 4 * zU, !0),
        targetBlockId: (UU, XU) => UU.getUint32(XU + 228, !0),
        targetNormal: (UU, XU, zU) => UU.getInt8(XU + 232 + 1 * zU),
        targetFlags: (UU, XU) => UU.getUint8(XU + 235),
        pickedEntity: (UU, XU) => UU.getInt32(XU + 236, !0),
        breakingPos: (UU, XU, zU) => UU.getInt32(XU + 240 + 4 * zU, !0),
        breakingProgress: (UU, XU) => UU.getFloat32(XU + 252, !0),
        jB: (UU, XU) => UU.getUint16(XU + 256, !0),
        selectedSlot: (UU, XU) => UU.getUint8(XU + 258),
        heldFlags: (UU, XU) => UU.getUint8(XU + 259),
        heldAttrVersion: (UU, XU) => UU.getUint32(XU + 260, !0),
        inventoryVersion: (UU, XU) => UU.getUint32(XU + 264, !0),
        effectsVersion: (UU, XU) => UU.getUint32(XU + 268, !0),
        entitiesVersion: (UU, XU) => UU.getUint32(XU + 272, !0),
        entRenderPtr: (UU, XU) => UU.getUint32(XU + 276, !0),
        entCapacity: (UU, XU) => UU.getUint32(XU + 280, !0),
        frameMs: (UU, XU) => UU.getFloat32(XU + 284, !0),
        fps: (UU, XU) => UU.getFloat32(XU + 288, !0),
        entVisPtr: (UU, XU) => UU.getUint32(XU + 292, !0),
        momentumFrac: (UU, XU) => UU.getFloat32(XU + 296, !0),
        chunkSlotsPtr: (UU, XU) => UU.getUint32(XU + 300, !0),
        chunkSlotsLen: (UU, XU) => UU.getUint32(XU + 304, !0),
        walkThroughPtr: (UU, XU) => UU.getUint32(XU + 308, !0),
        walkThroughLen: (UU, XU) => UU.getUint32(XU + 312, !0),
        audioViewPtr: (UU, XU) => UU.getUint32(XU + 316, !0),
        inventoryViewPtr: (UU, XU) => UU.getUint32(XU + 320, !0),
        eventOverflowGen: (UU, XU) => UU.getUint32(XU + 324, !0),
        eventOverflowMask: (UU, XU) => UU.getUint32(XU + 328, !0),
        promptEntity: (UU, XU) => UU.getInt32(XU + 332, !0),
        replayViewPtr: (UU, XU) => UU.getUint32(XU + 336, !0),
        slotIcon: (UU, XU) => UU.getUint32(XU + 340, !0),
        localDeaths: (UU, XU) => UU.getUint32(XU + 344, !0),
        cameraFar: (UU, XU) => UU.getFloat32(XU + 348, !0),
        gliderBoostFuel: (UU, XU) => UU.getUint32(XU + 352, !0),
        interactLabel: (UU, XU) => UU.getUint16(XU + 356, !0),
        interactIcon: (UU, XU) => UU.getUint16(XU + 358, !0)
      },
      sX = {
        BYTES: 16,
        voxelsPtr: (UU, XU) => UU.getUint32(XU + 0, !0),
        version: (UU, XU) => UU.getUint32(XU + 4, !0),
        generation: (UU, XU) => UU.getUint32(XU + 8, !0),
        uD: (UU, XU) => UU.getUint32(XU + 12, !0)
      },
      nX = {
        BYTES: 56,
        listener: (UU, XU, zU) => UU.getFloat64(XU + 0 + 8 * zU, !0),
        forward: (UU, XU, zU) => UU.getFloat32(XU + 24 + 4 * zU, !0),
        up: (UU, XU, zU) => UU.getFloat32(XU + 36 + 4 * zU, !0),
        dropped: (UU, XU) => UU.getUint32(XU + 48, !0),
        unfollowed: (UU, XU) => UU.getUint32(XU + 52, !0)
      },
      mX = {
        BYTES: 8,
        item: (UU, XU) => UU.getUint16(XU + 0, !0),
        amount: (UU, XU) => UU.getUint16(XU + 2, !0),
        attrVersion: (UU, XU) => UU.getUint32(XU + 4, !0)
      },
      lX = {
        BYTES: 76,
        version: (UU, XU) => UU.getUint32(XU + 0, !0),
        state: (UU, XU) => UU.getUint8(XU + 4),
        cameraMode: (UU, XU) => UU.getUint8(XU + 5),
        LY: (UU, XU) => UU.getUint32(XU + 8, !0),
        totalTicks: (UU, XU) => UU.getUint32(XU + 12, !0),
        speed: (UU, XU) => UU.getFloat32(XU + 16, !0),
        markIn: (UU, XU) => UU.getUint32(XU + 20, !0),
        markOut: (UU, XU) => UU.getUint32(XU + 24, !0),
        editVersion: (UU, XU) => UU.getUint32(XU + 28, !0),
        drops: (UU, XU, zU) => UU.getUint32(XU + 32 + 4 * zU, !0)
      },
      xX = {
        BYTES: 6,
        flags: (UU, XU) => UU.getUint8(XU + 0),
        harvestType: (UU, XU) => UU.getUint8(XU + 1),
        harvestLevel: (UU, XU) => UU.getUint8(XU + 2),
        attachedTop: (UU, XU) => UU.getUint16(XU + 4, !0)
      },
      JX = {
        BYTES: 3,
        flags: (UU, XU) => UU.getUint8(XU + 0),
        harvests: (UU, XU) => UU.getUint8(XU + 1),
        level: (UU, XU) => UU.getUint8(XU + 2)
      },
      jX = {
        BYTES: 12,
        item: (UU, XU) => UU.getUint32(XU + 0, !0),
        amount: (UU, XU) => UU.getFloat64(XU + 4, !0)
      },
      KX = {
        BYTES: 16,
        recipes: (UU, XU) => UU.getUint32(XU + 0, !0),
        ingredients: (UU, XU) => UU.getUint32(XU + 4, !0),
        craftAllTimes: (UU, XU) => UU.getUint32(XU + 8, !0),
        flags: (UU, XU) => UU.getUint32(XU + 12, !0)
      },
      bX = {
        BYTES: 10,
        item: (UU, XU) => UU.getUint16(XU + 0, !0),
        recipe: (UU, XU) => UU.getUint16(XU + 2, !0),
        produces: (UU, XU) => UU.getUint16(XU + 4, !0),
        requires: (UU, XU) => UU.getUint16(XU + 6, !0),
        flags: (UU, XU) => UU.getUint8(XU + 8)
      },
      TX = {
        BYTES: 4,
        amount: (UU, XU) => UU.getUint16(XU + 0, !0),
        items: (UU, XU) => UU.getUint16(XU + 2, !0)
      },
      hX = {
        BYTES: 8,
        amount: (UU, XU) => UU.getUint32(XU + 0, !0),
        item: (UU, XU) => UU.getUint16(XU + 4, !0),
        from: (UU, XU) => UU.getUint16(XU + 6, !0)
      },
      Uz = {
        BYTES: 16,
        serverId: (UU, XU) => UU.getInt32(XU + 0, !0),
        len: (UU, XU) => UU.getUint32(XU + 4, !0),
        kind: (UU, XU) => UU.getUint16(XU + 8, !0),
        variation: (UU, XU) => UU.getUint16(XU + 10, !0),
        pose: (UU, XU) => UU.getUint8(XU + 12),
        meta: (UU, XU) => UU.getUint8(XU + 13),
        mesh: (UU, XU) => UU.getUint8(XU + 14),
        flags: (UU, XU) => UU.getUint8(XU + 15)
      },
      Xz = {
        BYTES: 56,
        terrainOpaque: (UU, XU) => UU.getUint32(XU + 0, !0),
        terrainTransparent: (UU, XU) => UU.getUint32(XU + 4, !0),
        terrainPack: (UU, XU) => UU.getUint32(XU + 8, !0),
        earthSky: (UU, XU) => UU.getUint32(XU + 12, !0),
        skyMeshes: (UU, XU) => UU.getUint32(XU + 16, !0),
        regular: (UU, XU) => UU.getUint32(XU + 20, !0),
        thin: (UU, XU) => UU.getUint32(XU + 24, !0),
        line: (UU, XU) => UU.getUint32(XU + 28, !0),
        text: (UU, XU) => UU.getUint32(XU + 32, !0),
        particles: (UU, XU) => UU.getUint32(XU + 36, !0),
        terrainParts: (UU, XU) => UU.getUint32(XU + 40, !0),
        terrainCompiling: (UU, XU) => UU.getUint32(XU + 44, !0),
        ringCopiesMax: (UU, XU) => UU.getUint32(XU + 48, !0),
        ringBusyWrites: (UU, XU) => UU.getUint32(XU + 52, !0)
      },
      zz = {
        BYTES: 16,
        fov: (UU, XU) => UU.getFloat32(XU + 0, !0),
        baseFov: (UU, XU) => UU.getFloat32(XU + 4, !0),
        aspect: (UU, XU) => UU.getFloat32(XU + 8, !0),
        bodyHeading: (UU, XU) => UU.getFloat32(XU + 12, !0)
      },
      cz = {
        BYTES: 32,
        eye: (UU, XU, zU) => UU.getFloat64(XU + 0 + 8 * zU, !0),
        heading: (UU, XU) => UU.getFloat32(XU + 24, !0),
        pitch: (UU, XU) => UU.getFloat32(XU + 28, !0)
      },
      yz = {
        BYTES: 48,
        feet: (UU, XU, zU) => UU.getFloat64(XU + 0 + 8 * zU, !0),
        eyeHeight: (UU, XU) => UU.getFloat32(XU + 24, !0),
        heading: (UU, XU) => UU.getFloat32(XU + 28, !0),
        headingIsDrawn: (UU, XU) => UU.getUint32(XU + 32, !0),
        pitch: (UU, XU) => UU.getFloat32(XU + 36, !0),
        lookHeading: (UU, XU) => UU.getFloat32(XU + 40, !0)
      },
      Qz = 32,
      Az = 63,
      Fz = {
        TickEnd: 32,
        EntitySpawned: 33,
        EntityDespawned: 34,
        ChangeBlockFail: 39,
        ChangeBlockFailEnd: 46,
        InventoryEvent: 48,
        HeldItemChanged: 49,
        ShotDamage: 50,
        EnchantOffer: 51,
        UiEvent: 52,
        EntityInfoChanged: 53,
        ChunkSlot: 55,
        PlaySound: 40,
        SoundPos: 41,
        SoundSet: 42,
        SoundFade: 43,
        SoundStop: 44,
        SoundReset: 45,
        ReplayFailed: 56,
        ReplayOption: 57,
        ReplayFilePart: 58,
        ReplayFileReady: 59,
        ReplayOpened: 60,
        ReplayUiEvent: 61,
        RecorderEvent: 62
      };

    function oz(UU, XU, zU, cU, yU) {
      var QU, AU, FU, oU, DU, EU, YU, NU, IU, pU, aU, tU, gU, kU, GU, BU, ZU, RU, PU, WU, dU, LU, eU, CU, wU;
      switch (UU) {
        case 32:
          return 4 === cU && (null === (QU = yU.tickEnd) || void 0 === QU || QU.call(yU, gX.LY(XU, zU)), !0);
        case 33:
          return 12 === cU && (null === (AU = yU.entitySpawned) || void 0 === AU || AU.call(yU, kX.serverId(XU, zU), kX.index(XU, zU), kX.kind(XU, zU)), !0);
        case 34:
          return 12 === cU && (null === (FU = yU.entityDespawned) || void 0 === FU || FU.call(yU, kX.serverId(XU, zU), kX.index(XU, zU), kX.kind(XU, zU)), !0);
        case 39:
          return !(cU < 20) && (null === (oU = yU.changeBlockFail) || void 0 === oU || oU.call(yU, GX.pos(XU, zU, 0), GX.pos(XU, zU, 1), GX.pos(XU, zU, 2), GX.actual(XU, zU), GX.dataLen(XU, zU), zU + 20, cU - 20), !0);
        case 46:
          return 0 === cU && (null === (DU = yU.changeBlockFailEnd) || void 0 === DU || DU.call(yU), !0);
        case 48:
          return 20 === cU && (null === (EU = yU.inventoryEvent) || void 0 === EU || EU.call(yU, BX.what(XU, zU), BX.value(XU, zU), BX.pos(XU, zU, 0), BX.pos(XU, zU, 1), BX.pos(XU, zU, 2), BX.block(XU, zU)), !0);
        case 49:
          return 4 === cU && (null === (YU = yU.heldItemChanged) || void 0 === YU || YU.call(yU, ZX.item(XU, zU), ZX.slot(XU, zU)), !0);
        case 50:
          return 16 === cU && (null === (NU = yU.shotDamage) || void 0 === NU || NU.call(yU, RX.target(XU, zU), RX.damage(XU, zU), RX.distance(XU, zU), RX.crit(XU, zU)), !0);
        case 51:
          return !(cU < 4) && (null === (IU = yU.enchantOffer) || void 0 === IU || IU.call(yU, PX.slot(XU, zU), zU + 4, cU - 4), !0);
        case 52:
          return !(cU < 20) && (null === (pU = yU.uiEvent) || void 0 === pU || pU.call(yU, WX.what(XU, zU), WX.value(XU, zU), WX.pos(XU, zU, 0), WX.pos(XU, zU, 1), WX.pos(XU, zU, 2), WX.block(XU, zU), zU + 20, cU - 20), !0);
        case 53:
          return 12 === cU && (null === (aU = yU.entityInfoChanged) || void 0 === aU || aU.call(yU, dX.serverId(XU, zU), dX.index(XU, zU), dX.what(XU, zU)), !0);
        case 55:
          return 24 === cU && (null === (tU = yU.chunkSlot) || void 0 === tU || tU.call(yU, LX.cx(XU, zU), LX.cy(XU, zU), LX.cz(XU, zU), LX.slot(XU, zU), LX.generation(XU, zU), LX.flags(XU, zU)), !0);
        case 40:
          return 44 === cU && (null === (gU = yU.playSound) || void 0 === gU || gU.call(yU, eX.pos(XU, zU, 0), eX.pos(XU, zU, 1), eX.pos(XU, zU, 2), eX.sound(XU, zU), eX.flags(XU, zU), eX.handle(XU, zU), eX.volume(XU, zU), eX.rate(XU, zU), eX.refDist(XU, zU)), !0);
        case 41:
          return 28 === cU && (null === (kU = yU.soundPos) || void 0 === kU || kU.call(yU, CX.pos(XU, zU, 0), CX.pos(XU, zU, 1), CX.pos(XU, zU, 2), CX.handle(XU, zU)), !0);
        case 42:
          return 16 === cU && (null === (GU = yU.soundSet) || void 0 === GU || GU.call(yU, wX.handle(XU, zU), wX.volume(XU, zU), wX.rate(XU, zU), wX.refDist(XU, zU)), !0);
        case 43:
          return 12 === cU && (null === (BU = yU.soundFade) || void 0 === BU || BU.call(yU, qX.handle(XU, zU), qX.to(XU, zU), qX.ms(XU, zU), qX.flags(XU, zU)), !0);
        case 44:
          return 4 === cU && (null === (ZU = yU.soundStop) || void 0 === ZU || ZU.call(yU, OX.handle(XU, zU)), !0);
        case 45:
          return 0 === cU && (null === (RU = yU.soundReset) || void 0 === RU || RU.call(yU), !0);
        case 56:
          return 8 === cU && (null === (PU = yU.replayFailed) || void 0 === PU || PU.call(yU, SX.reason(XU, zU), SX.code(XU, zU), SX.version(XU, zU)), !0);
        case 57:
          return !(cU < 4) && (null === (WU = yU.replayOption) || void 0 === WU || WU.call(yU, rX.key(XU, zU), rX.tag(XU, zU), zU + 4, cU - 4), !0);
        case 58:
          return 16 === cU && (null === (dU = yU.replayFilePart) || void 0 === dU || dU.call(yU, uX.save(XU, zU), uX.index(XU, zU), uX.ptr(XU, zU), uX.len(XU, zU)), !0);
        case 59:
          return 16 === cU && (null === (LU = yU.replayFileReady) || void 0 === LU || LU.call(yU, fX.save(XU, zU), fX.kind(XU, zU), fX.parts(XU, zU), fX.bytes(XU, zU)), !0);
        case 60:
          return !(cU < 4) && (null === (eU = yU.replayOpened) || void 0 === eU || eU.call(yU, iX.totalTicks(XU, zU), zU + 4, cU - 4), !0);
        case 61:
          return !(cU < 24) && (null === (CU = yU.replayUiEvent) || void 0 === CU || CU.call(yU, HX.what(XU, zU), HX.int(XU, zU), HX.x(XU, zU), HX.y(XU, zU), zU + 24, cU - 24), !0);
        case 62:
          return 8 === cU && (null === (wU = yU.recorderEvent) || void 0 === wU || wU.call(yU, MX.what(XU, zU), MX.kind(XU, zU), MX.save(XU, zU)), !0);
        default:
          return !1
      }
    }
    const Dz = {
      SetChunkAddDistance: 2,
      WatchEntityInfo: 66,
      EventResync: 67,
      WatchPromptPick: 68,
      SetLocalDbId: 69,
      SetAltVeto: 128,
      EnchantOfferRequest: 130,
      ClearPickupDelay: 131,
      SyncOpMarker: 132,
      SetHooks: 133,
      SetPublicLobby: 144,
      ClickCodeBlock: 145,
      Send: 256,
      Leave: 257,
      SetPaused: 258,
      ParticleBurst: 320,
      ParticleStart: 321,
      ParticleUpdate: 322,
      ParticleStop: 323,
      ParticleEmitPoints: 324,
      ParticleStopAll: 325,
      InstancePool: 384,
      InstanceCommit: 385,
      GameMeshCreate: 386,
      GameMeshSet: 387,
      GameMeshDispose: 388,
      SetNametagOffset: 389,
      SetFacingTolerance: 390,
      SetGroundArrowStyle: 391,
      InstancePoolDispose: 392,
      MobModel: 393,
      MobModelSet: 394,
      MobModelDispose: 398,
      CosmeticModel: 399,
      ThirdPersonFor: 448,
      FreecamMove: 450,
      ScriptedRelease: 451,
      SetZoom: 452,
      SwapZoom: 453,
      FreecamCmd: 454,
      SecondCentres: 455,
      SetCameraFar: 456,
      HighlightCell: 457,
      RecorderOption: 530,
      RecorderFlyingText: 531,
      RecorderPlayerKilled: 532,
      RecorderKillfeed: 533,
      Respawn: 576,
      BindCustomButtonKeys: 577,
      PressCustomButton: 578,
      PadMove: 579
    };
    let Ez = new Uint8Array(0);

    function Yz(UU) {
      return Ez.buffer !== UU.buffer && (Ez = new Uint8Array(UU.buffer)), Ez
    }

    function Nz(UU, XU, zU) {
      const cU = UU.gY(66, XU, 4);
      if (cU < 0) return !1;
      return UU.view.setUint8(cU + 0, zU), !0
    }

    function Iz(UU, XU, zU) {
      const cU = UU.gY(67, XU, 4);
      if (cU < 0) return !1;
      return UU.view.setUint32(cU + 0, zU, !0), !0
    }

    function pz(UU, XU, zU) {
      const cU = UU.gY(68, XU, 4);
      if (cU < 0) return !1;
      return UU.view.setUint8(cU + 0, zU), !0
    }

    function az(UU, XU, zU, cU) {
      const yU = UU.gY(69, XU, 4 + cU.length);
      if (yU < 0) return !1;
      const QU = UU.view;
      return QU.setUint8(yU + 0, zU), Yz(QU).set(cU, QU.byteOffset + yU + 4), !0
    }

    function tz(UU, XU, zU, cU, yU) {
      const QU = UU.gY(128, XU, 4 + yU.length);
      if (QU < 0) return !1;
      const AU = UU.view;
      return AU.setUint8(QU + 0, zU), AU.setUint16(QU + 2, cU, !0), Yz(AU).set(yU, AU.byteOffset + QU + 4), !0
    }

    function gz(UU, XU, zU) {
      const cU = UU.gY(131, XU, 4);
      if (cU < 0) return !1;
      return UU.view.setInt32(cU + 0, zU, !0), !0
    }

    function kz(UU, XU, zU) {
      const cU = UU.gY(132, XU, 4);
      if (cU < 0) return !1;
      return UU.view.setUint32(cU + 0, zU, !0), !0
    }

    function Gz(UU, XU, zU) {
      const cU = UU.gY(133, XU, 4);
      if (cU < 0) return !1;
      return UU.view.setUint32(cU + 0, zU, !0), !0
    }

    function Bz(UU, XU, zU) {
      const cU = UU.gY(144, XU, 4);
      if (cU < 0) return !1;
      return UU.view.setUint8(cU + 0, zU), !0
    }

    function Zz(UU, XU, zU, cU, yU) {
      const QU = UU.gY(145, XU, 12);
      if (QU < 0) return !1;
      const AU = UU.view;
      return AU.setInt32(QU + 0, zU, !0), AU.setInt32(QU + 4, cU, !0), AU.setInt32(QU + 8, yU, !0), !0
    }

    function Rz(UU, XU, zU, cU) {
      const yU = UU.gY(256, XU, 4 + cU.length);
      if (yU < 0) return !1;
      const QU = UU.view;
      return QU.setUint16(yU + 0, zU, !0), Yz(QU).set(cU, QU.byteOffset + yU + 4), !0
    }

    function Pz(UU, XU, zU) {
      const cU = UU.gY(258, XU, 4);
      if (cU < 0) return !1;
      return UU.view.setUint8(cU + 0, zU), !0
    }

    function Wz(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
      const DU = UU.gY(320, XU, 48 + oU.length);
      if (DU < 0) return !1;
      const EU = UU.view;
      EU.setUint32(DU + 0, zU, !0), EU.setUint16(DU + 4, cU, !0), EU.setUint16(DU + 6, yU, !0), EU.setUint32(DU + 8, QU, !0);
      for (let YU = 0; YU < 3; YU++) EU.setFloat64(DU + 12 + 8 * YU, AU[YU], !0);
      for (let YU = 0; YU < 3; YU++) EU.setFloat32(DU + 36 + 4 * YU, FU[YU], !0);
      return Yz(EU).set(oU, EU.byteOffset + DU + 48), !0
    }

    function dz(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
      const DU = UU.gY(321, XU, 48 + oU.length);
      if (DU < 0) return !1;
      const EU = UU.view;
      EU.setUint32(DU + 0, zU, !0), EU.setInt32(DU + 4, cU, !0), EU.setUint16(DU + 8, yU, !0), EU.setUint16(DU + 10, QU, !0);
      for (let YU = 0; YU < 3; YU++) EU.setFloat64(DU + 12 + 8 * YU, AU[YU], !0);
      for (let YU = 0; YU < 3; YU++) EU.setFloat32(DU + 36 + 4 * YU, FU[YU], !0);
      return Yz(EU).set(oU, EU.byteOffset + DU + 48), !0
    }

    function Lz(UU, XU, zU, cU, yU, QU, AU) {
      const FU = UU.gY(322, XU, 44 + AU.length);
      if (FU < 0) return !1;
      const oU = UU.view;
      oU.setUint32(FU + 0, zU, !0), oU.setUint32(FU + 4, cU, !0);
      for (let DU = 0; DU < 3; DU++) oU.setFloat64(FU + 8 + 8 * DU, yU[DU], !0);
      for (let DU = 0; DU < 3; DU++) oU.setFloat32(FU + 32 + 4 * DU, QU[DU], !0);
      return Yz(oU).set(AU, oU.byteOffset + FU + 44), !0
    }

    function ez(UU, XU, zU) {
      const cU = UU.gY(323, XU, 4);
      if (cU < 0) return !1;
      return UU.view.setUint32(cU + 0, zU, !0), !0
    }

    function Cz(UU, XU, zU, cU, yU, QU) {
      const AU = UU.gY(324, XU, 32 + QU.length);
      if (AU < 0) return !1;
      const FU = UU.view;
      FU.setUint32(AU + 0, zU, !0), FU.setUint32(AU + 4, cU, !0);
      for (let oU = 0; oU < 3; oU++) FU.setFloat64(AU + 8 + 8 * oU, yU[oU], !0);
      return Yz(FU).set(QU, FU.byteOffset + AU + 32), !0
    }

    function wz(UU, XU) {
      return !(UU.gY(325, XU, 0) < 0)
    }

    function qz(UU, XU, zU, cU, yU, QU) {
      const AU = UU.gY(384, XU, 16);
      if (AU < 0) return !1;
      const FU = UU.view;
      return FU.setUint32(AU + 0, zU, !0), FU.setUint32(AU + 4, cU, !0), FU.setFloat32(AU + 8, yU, !0), FU.setFloat32(AU + 12, QU, !0), !0
    }

    function Oz(UU, XU, zU, cU, yU, QU, AU) {
      const FU = UU.gY(385, XU, 36 + AU.length);
      if (FU < 0) return !1;
      const oU = UU.view;
      oU.setUint32(FU + 0, zU, !0), oU.setUint32(FU + 4, cU, !0);
      for (let DU = 0; DU < 3; DU++) oU.setFloat64(FU + 8 + 8 * DU, yU[DU], !0);
      return oU.setUint32(FU + 32, QU, !0), Yz(oU).set(AU, oU.byteOffset + FU + 36), !0
    }

    function Sz(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
      const DU = UU.gY(386, XU, 56 + oU.length);
      if (DU < 0) return !1;
      const EU = UU.view;
      EU.setUint32(DU + 0, zU, !0), EU.setUint8(DU + 4, cU);
      for (let YU = 0; YU < 4; YU++) EU.setFloat32(DU + 8 + 4 * YU, yU[YU], !0);
      for (let YU = 0; YU < 3; YU++) EU.setFloat64(DU + 24 + 8 * YU, QU[YU], !0);
      return EU.setUint32(DU + 48, AU, !0), EU.setUint32(DU + 52, FU, !0), Yz(EU).set(oU, EU.byteOffset + DU + 56), !0
    }

    function rz(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
      const DU = UU.gY(387, XU, 56);
      if (DU < 0) return !1;
      const EU = UU.view;
      EU.setUint32(DU + 0, zU, !0), EU.setUint16(DU + 4, cU, !0), EU.setUint8(DU + 6, yU);
      for (let YU = 0; YU < 3; YU++) EU.setFloat64(DU + 8 + 8 * YU, QU[YU], !0);
      for (let YU = 0; YU < 2; YU++) EU.setFloat32(DU + 32 + 4 * YU, AU[YU], !0);
      EU.setFloat32(DU + 40, FU, !0);
      for (let YU = 0; YU < 3; YU++) EU.setFloat32(DU + 44 + 4 * YU, oU[YU], !0);
      return !0
    }

    function uz(UU, XU, zU) {
      const cU = UU.gY(388, XU, 4);
      if (cU < 0) return !1;
      return UU.view.setUint32(cU + 0, zU, !0), !0
    }

    function fz(UU, XU, zU, cU) {
      const yU = UU.gY(389, XU, 8);
      if (yU < 0) return !1;
      const QU = UU.view;
      return QU.setInt32(yU + 0, zU, !0), QU.setFloat32(yU + 4, cU, !0), !0
    }

    function iz(UU, XU, zU, cU) {
      const yU = UU.gY(390, XU, 8);
      if (yU < 0) return !1;
      const QU = UU.view;
      return QU.setInt32(yU + 0, zU, !0), QU.setFloat32(yU + 4, cU, !0), !0
    }

    function Hz(UU, XU, zU, cU, yU, QU) {
      const AU = UU.gY(391, XU, 12);
      if (AU < 0) return !1;
      const FU = UU.view;
      return FU.setFloat32(AU + 0, zU, !0), FU.setFloat32(AU + 4, cU, !0), FU.setUint8(AU + 8, yU), FU.setUint8(AU + 9, QU), !0
    }

    function Mz(UU, XU, zU) {
      const cU = UU.gY(392, XU, 4);
      if (cU < 0) return !1;
      return UU.view.setUint32(cU + 0, zU, !0), !0
    }

    function vz(UU, XU, zU, cU, yU) {
      const QU = UU.gY(393, XU, 12);
      if (QU < 0) return !1;
      const AU = UU.view;
      return AU.setUint32(QU + 0, zU, !0), AU.setUint16(QU + 4, cU, !0), AU.setFloat32(QU + 8, yU, !0), !0
    }

    function Vz(UU, XU, zU, cU, yU, QU, AU, FU, oU, DU, EU, YU) {
      const NU = UU.gY(394, XU, 56 + YU.length);
      if (NU < 0) return !1;
      const IU = UU.view;
      IU.setUint32(NU + 0, zU, !0), IU.setUint16(NU + 4, cU, !0), IU.setUint8(NU + 6, yU), IU.setUint8(NU + 7, QU);
      for (let pU = 0; pU < 3; pU++) IU.setFloat64(NU + 8 + 8 * pU, AU[pU], !0);
      IU.setFloat32(NU + 32, FU, !0), IU.setInt32(NU + 36, oU, !0);
      for (let pU = 0; pU < 3; pU++) IU.setFloat32(NU + 40 + 4 * pU, DU[pU], !0);
      return IU.setFloat32(NU + 52, EU, !0), Yz(IU).set(YU, IU.byteOffset + NU + 56), !0
    }

    function sz(UU, XU, zU) {
      const cU = UU.gY(398, XU, 4);
      if (cU < 0) return !1;
      return UU.view.setUint32(cU + 0, zU, !0), !0
    }

    function nz(UU, XU, zU, cU, yU) {
      const QU = UU.gY(399, XU, 12);
      if (QU < 0) return !1;
      const AU = UU.view;
      return AU.setUint32(QU + 0, zU, !0), AU.setUint32(QU + 4, cU, !0), AU.setFloat32(QU + 8, yU, !0), !0
    }

    function mz(UU, XU, zU) {
      const cU = UU.gY(448, XU, 4);
      if (cU < 0) return !1;
      return UU.view.setFloat32(cU + 0, zU, !0), !0
    }

    function lz(UU, XU, zU, cU) {
      const yU = UU.gY(450, XU, 12);
      if (yU < 0) return !1;
      const QU = UU.view;
      for (let AU = 0; AU < 2; AU++) QU.setFloat32(yU + 0 + 4 * AU, zU[AU], !0);
      return QU.setUint8(yU + 8, cU), !0
    }

    function xz(UU, XU, zU, cU) {
      const yU = UU.gY(452, XU, 8);
      if (yU < 0) return !1;
      const QU = UU.view;
      return QU.setFloat32(yU + 0, zU, !0), QU.setUint8(yU + 4, cU), !0
    }

    function Jz(UU, XU, zU, cU, yU) {
      const QU = UU.gY(454, XU, 4);
      if (QU < 0) return !1;
      const AU = UU.view;
      return AU.setUint8(QU + 0, zU), AU.setUint8(QU + 1, cU), AU.setUint8(QU + 2, yU), !0
    }

    function jz(UU, XU, zU, cU) {
      const yU = UU.gY(455, XU, 40);
      if (yU < 0) return !1;
      const QU = UU.view;
      for (let AU = 0; AU < 9; AU++) QU.setInt32(yU + 0 + 4 * AU, zU[AU], !0);
      return QU.setUint32(yU + 36, cU, !0), !0
    }

    function Kz(UU, XU, zU, cU) {
      const yU = UU.gY(456, XU, 8);
      if (yU < 0) return !1;
      const QU = UU.view;
      return QU.setFloat32(yU + 0, zU, !0), QU.setUint8(yU + 4, cU), !0
    }

    function bz(UU, XU, zU, cU, yU) {
      const QU = UU.gY(457, XU, 16);
      if (QU < 0) return !1;
      const AU = UU.view;
      for (let FU = 0; FU < 3; FU++) AU.setInt32(QU + 0 + 4 * FU, zU[FU], !0);
      for (let FU = 0; FU < 3; FU++) AU.setInt8(QU + 12 + 1 * FU, cU[FU]);
      return AU.setUint8(QU + 15, yU), !0
    }

    function Tz(UU, XU, zU, cU) {
      const yU = UU.gY(530, XU, 4 + cU.length);
      if (yU < 0) return !1;
      const QU = UU.view;
      return QU.setUint8(yU + 0, zU), Yz(QU).set(cU, QU.byteOffset + yU + 4), !0
    }

    function hz(UU, XU, zU, cU, yU, QU) {
      const AU = UU.gY(531, XU, 12 + QU.length);
      if (AU < 0) return !1;
      const FU = UU.view;
      return FU.setFloat32(AU + 0, zU, !0), FU.setFloat32(AU + 4, cU, !0), FU.setUint32(AU + 8, yU, !0), Yz(FU).set(QU, FU.byteOffset + AU + 12), !0
    }

    function Uc(UU, XU, zU, cU, yU, QU) {
      const AU = UU.gY(532, XU, 12 + QU.length);
      if (AU < 0) return !1;
      const FU = UU.view;
      return FU.setInt32(AU + 0, zU, !0), FU.setInt32(AU + 4, cU, !0), FU.setUint32(AU + 8, yU, !0), Yz(FU).set(QU, FU.byteOffset + AU + 12), !0
    }

    function Xc(UU, XU, zU, cU, yU) {
      const QU = UU.gY(533, XU, 8 + yU.length);
      if (QU < 0) return !1;
      const AU = UU.view;
      return AU.setInt32(QU + 0, zU, !0), AU.setInt32(QU + 4, cU, !0), Yz(AU).set(yU, AU.byteOffset + QU + 8), !0
    }

    function zc(UU, XU) {
      return !(UU.gY(576, XU, 0) < 0)
    }

    function cc(UU, XU, zU, cU, yU, QU) {
      const AU = UU.gY(577, XU, 36 + QU.length);
      if (AU < 0) return !1;
      const FU = UU.view;
      FU.setUint8(AU + 0, zU);
      for (let oU = 0; oU < 16; oU++) FU.setUint8(AU + 4 + 1 * oU, cU[oU]);
      for (let oU = 0; oU < 16; oU++) FU.setUint8(AU + 20 + 1 * oU, yU[oU]);
      return Yz(FU).set(QU, FU.byteOffset + AU + 36), !0
    }

    function yc(UU, XU, zU, cU) {
      const yU = UU.gY(578, XU, 4 + cU.length);
      if (yU < 0) return !1;
      const QU = UU.view;
      return QU.setUint8(yU + 0, zU), Yz(QU).set(cU, QU.byteOffset + yU + 4), !0
    }

    function Qc(UU, XU, zU, cU, yU, QU, AU, FU) {
      const oU = UU.gY(579, XU, 36);
      if (oU < 0) return !1;
      const DU = UU.view;
      return DU.setFloat64(oU + 0, zU, !0), DU.setFloat64(oU + 8, cU, !0), DU.setFloat64(oU + 16, yU, !0), DU.setFloat64(oU + 24, QU, !0), DU.setUint16(oU + 32, AU, !0), DU.setUint8(oU + 34, FU), !0
    }
    class Ac {
      constructor(UU, XU) {
        this.core = UU, this.afterCall = XU
      }
      canModify(UU, XU, zU) {
        const cU = this.core.tAU(UU, XU, zU);
        return this.afterCall(), cU
      }
      terrainBlocked(UU, XU, zU, cU, yU) {
        const QU = this.core.oFU(UU, XU, zU, cU, yU);
        return this.afterCall(), QU
      }
      Jw(UU, XU, zU, cU) {
        const yU = this.core.pI(UU, XU, zU, cU);
        return this.afterCall(), yU
      }
      blockData(UU, XU, zU) {
        const cU = this.core.pAU(UU, XU, zU);
        return this.afterCall(), cU
      }
      cameraSweep(UU, XU, zU, cU, yU, QU, AU) {
        const FU = this.core.NQU(UU, XU, zU, cU, yU, QU, AU);
        return this.afterCall(), FU
      }
      hasServerTarget(UU) {
        const XU = this.core.CAU(UU);
        return this.afterCall(), XU
      }
      entityInteractable(UU) {
        const XU = this.core.PAU(UU);
        return this.afterCall(), XU
      }
      entityCrouching(UU) {
        const XU = this.core.RAU(UU);
        return this.afterCall(), XU
      }
      entityDrawn(UU) {
        const XU = this.core.gQU(UU);
        return this.afterCall(), XU
      }
      predictServerPosition(UU, XU, zU, cU) {
        const yU = this.core.vAU(UU, XU, zU, cU);
        return this.afterCall(), yU
      }
      setOtherEntitySetting(UU, XU, zU) {
        const cU = this.core.tQU(UU, XU, zU);
        return this.afterCall(), cU
      }
      entityInfoBatch(UU) {
        const XU = this.core.BQU(UU);
        return this.afterCall(), XU
      }
      entityName(UU) {
        const XU = this.core.WAU(UU);
        return this.afterCall(), XU
      }
      hasEffect(UU, XU) {
        const zU = this.core.eAU(UU, XU);
        return this.afterCall(), zU
      }
      scratchPtr() {
        const UU = this.core.oQU();
        return this.afterCall(), UU
      }
      invSwap(UU, XU) {
        const zU = this.core.uAU(UU, XU);
        return this.afterCall(), zU
      }
      invMove(UU, XU, zU) {
        const cU = this.core.OAU(UU, XU, zU);
        return this.afterCall(), cU
      }
      invQuickMove(UU, XU, zU, cU) {
        const yU = this.core.SAU(UU, XU, zU, cU);
        return this.afterCall(), yU
      }
      invRemove(UU, XU, zU) {
        const cU = this.core.rAU(UU, XU, zU);
        return this.afterCall(), cU
      }
      invEnchant(UU, XU, zU, cU, yU) {
        const QU = this.core.qAU(UU, XU, zU, cU, yU);
        return this.afterCall(), QU
      }
      craft(UU, XU, zU) {
        const cU = this.core.craft(UU, XU, zU);
        return this.afterCall(), cU
      }
      salvage(UU, XU, zU) {
        const cU = this.core.salvage(UU, XU, zU);
        return this.afterCall(), cU
      }
      selectSlot(UU) {
        const XU = this.core.mAU(UU);
        return this.afterCall(), XU
      }
      closeChest() {
        const UU = this.core.gAU();
        return this.afterCall(), UU
      }
      itemAttributesBatch(UU) {
        const XU = this.core.GQU(UU);
        return this.afterCall(), XU
      }
      itemNames() {
        const UU = this.core.uL();
        return this.afterCall(), UU
      }
      blockProps() {
        const UU = this.core.aAU();
        return this.afterCall(), UU
      }
      itemProps() {
        const UU = this.core.fAU();
        return this.afterCall(), UU
      }
      salvageRecipe(UU) {
        const XU = this.core.RQU(UU);
        return this.afterCall(), XU
      }
      craftingView(UU, XU, zU) {
        const cU = this.core.kQU(UU, XU, zU);
        return this.afterCall(), cU
      }
      directorView() {
        const UU = this.core.EQU();
        return this.afterCall(), UU
      }
      directorDefaultPose() {
        const UU = this.core.IQU();
        return this.afterCall(), UU
      }
      directorEntity(UU) {
        const XU = this.core.YQU(UU);
        return this.afterCall(), XU
      }
      directorPose(UU, XU, zU, cU, yU, QU) {
        const AU = this.core.pQU(UU, XU, zU, cU, yU, QU);
        return this.afterCall(), AU
      }
      passTimings(UU) {
        const XU = this.core.MAU(UU);
        return this.afterCall(), XU
      }
      drawCensus() {
        const UU = this.core.ZAU();
        return this.afterCall(), UU
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);